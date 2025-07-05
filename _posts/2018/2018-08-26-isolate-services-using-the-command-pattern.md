---
title: "Isolate services using the command pattern"
date: 2018-08-26
tags:
  - programming
  - java
  - hystrix
  - metrics
  - command-pattern
categories:
  - programming
---
Using microservices is mainstream nowadays and them bring several challenges for the software engineers: operations and infrastructure, security, monitoring, caching, fault-tolerance, and so on.  
In particular, having under control the communication between microservices is the key to build reliable reliable services.

In the Java world there are around several solutions for this purpose but, in this post, I'd like to analyze how Hystrix leverage the "command pattern" to accomplish this goal.

<!-- truncate -->

# The Command Pattern

According to Wikipedia, the [command pattern](https://en.wikipedia.org/wiki/Command_pattern) is...

> ...is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.

Assuming we have an ExternalService and an ExternalServiceClient, to implement this pattern a special "command" class have to be defined, like in this schema:

```
+-----------------------+       +------------------------+       +-----------------+
| ExternalServiceClient |       | ExternalServiceCommand |       | ExternalService |
|      <<caller>>       |       |      <<command>>       |       |  <<receiver>>   |
+-----------------------+ +---> +------------------------+ +---> +-----------------+
|                       |       | execute()              |       | state           |
+-----------------------+       +------------------------+       | action()        |
                                                                 +-----------------+
```


The ExternalServiceCommand class knows all the details about the ExternalService. The command knows how to call the "action" method and, in addition, it always knows the **state** of the external service: this allows to decouple the ExternalServiceClient from the ExternalService.

# Implementation with Hystrix

Let's analyze a simple java implementation with [Hystrix](https://github.com/Netflix/Hystrix) `com.netflix.hystrix::hystrix-core::1.5.12`.

> Hystrix is a latency and fault tolerance library designed to isolate points of access to remote systems, services and 3rd party libraries, stop cascading failure and enable resilience in complex distributed systems where failure is inevitable.

## The External Service

```java
package com.fsferrara.hystrix.commandpattern.service.concrete;

import com.fsferrara.hystrix.commandpattern.service.dto.ExternalServiceRequest;
import com.fsferrara.hystrix.commandpattern.service.dto.ExternalServiceResponse;

public class ExternalService {

    private static ExternalService instance;
    private static final Object lock = new Object();

    private ExternalService() {
    }

    public static ExternalService getInstance() {
        ExternalService r = instance;
        if (r == null) {
            synchronized (lock) {
                r = instance;
                if (r == null) {
                    r = new ExternalService();
                    instance = r;
                }
            }
        }
        return r;
    }

    public ExternalServiceResponse action(ExternalServiceRequest request) {

        String greeting = createGreeting(request.getName());

        ExternalServiceResponse response = new ExternalServiceResponse();
        response.setGreeting(greeting);

        return response;
    }

    private String createGreeting(String name) {
        StringBuilder greeting = new StringBuilder("Hello");
        if (!"".equals(name)) {
            greeting.append(" ").append(name);
        }
        return greeting.toString();
    }
}
```

If you carefully look at this implementation, it is obvious that it is a simple "hello-world"-style service. The classes `ExternalServiceRequest` and `ExternalServiceResponse` are simple DTOs defining respectively the request and the response of this fake service.  
It is a singleton and, besides that, we have defined nothing in particular here. Let's imagine that the `action` method would actually hit an external service with an HTTP call and, for this reason, we need to access this method in a controlled way (i.e. through a command).

## The External Service Command

By extending the `HystrixCommand` class, we can define an hystrix-based command:

```java
package com.fsferrara.hystrix.commandpattern.service;

import com.fsferrara.hystrix.commandpattern.service.concrete.ExternalService;
import com.fsferrara.hystrix.commandpattern.service.dto.ExternalServiceRequest;
import com.fsferrara.hystrix.commandpattern.service.dto.ExternalServiceResponse;
import com.netflix.hystrix.HystrixCommand;
import com.netflix.hystrix.HystrixCommandGroupKey;

public class ExternalServiceCommand extends HystrixCommand<ExternalServiceResponse> {

    public static final String HYSTRIX_COMMAND_GROUP_KEY = "ExternalServiceCommand";

    private final ExternalServiceRequest request;

    public ExternalServiceCommand(ExternalServiceRequest request) {
        super(Setter.withGroupKey(HystrixCommandGroupKey.Factory.asKey(HYSTRIX_COMMAND_GROUP_KEY)));
        this.request = request;
    }
    
    @Override
    protected ExternalServiceResponse run() throws Exception {
        ExternalService service = ExternalService.getInstance();
        return service.action(request);
    }
}
```

As you can see, the command is a sort of proxy for the external service. But it knows the state, that is contained in the Hystrix group with key `HYSTRIX_COMMAND_GROUP_KEY`.
The logic that is needed to actually hit the ExternalService is contained in the `run` method.

## The External Service Client

In this specific implementation, I decided to implement the client as a daemon thread that will run forever (or better until Ctrl+C) and hit the external service "command" every `millis` milliseconds:

```java
package com.fsferrara.hystrix.commandpattern;

import com.fsferrara.hystrix.commandpattern.service.ExternalServiceCommand;
import com.fsferrara.hystrix.commandpattern.service.dto.ExternalServiceRequest;
import com.fsferrara.hystrix.commandpattern.service.dto.ExternalServiceResponse;

class ExternalServiceClient {

    private final long millis;

    public ExternalServiceClient(long millis) {
        this.millis = millis;
    }

    public void run() {
        Thread t = new Thread(() -> {
            while (true) {
                hitTheExternalService();
                try {
                    Thread.sleep(millis);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        t.setDaemon(true);
        t.start();
    }

    private void hitTheExternalService() {
        ExternalServiceRequest request = new ExternalServiceRequest();
        request.setName("Mr. Foo");
        ExternalServiceCommand command = new ExternalServiceCommand(request);
        ExternalServiceResponse response = command.execute();
        System.out.println(response.getGreeting());
    }
}
```

Pay attention that the client is calling the `execute()` method that is implemented in the `HystrixCommand` superclass. That is because Hystrix, once defined a command, allows to call the ExternalService with different modalities: execute, observe, queue, and so on. All these modalities are well explained in the Hystrix documentation.

## Monitoring the External Service

The dedicated Hystrix group is able to give us information such as:

* total number of requests
* total number of errors and the error percentage
* time-based metrics

Here is a very basic implementation:

```java
...
    private void monitor() {
        HystrixCommandMetrics externalServiceCommandMetrics = HystrixCommandMetrics.getInstance(HystrixCommandKey.Factory.asKey(ExternalServiceCommand.HYSTRIX_COMMAND_GROUP_KEY));
        StringBuilder metrics = new StringBuilder();
        if (externalServiceCommandMetrics != null) {
            HystrixCommandMetrics.HealthCounts health = externalServiceCommandMetrics.getHealthCounts();
            metrics.append("Requests: ").append(health.getTotalRequests()).append(" ");
            metrics.append("Errors: ").append(health.getErrorCount()).append(" (").append(health.getErrorPercentage()).append("%)   ");
            metrics.append("Mean: ").append(externalServiceCommandMetrics.getExecutionTimePercentile(50)).append(" ");
            metrics.append("75th: ").append(externalServiceCommandMetrics.getExecutionTimePercentile(75)).append(" ");
            metrics.append("90th: ").append(externalServiceCommandMetrics.getExecutionTimePercentile(90)).append(" ");
            metrics.append("99th: ").append(externalServiceCommandMetrics.getExecutionTimePercentile(99)).append(" ");
        }
        System.out.println("externalServiceCommandMetrics: " + metrics.toString());
    }
...
```

# Other hystrix features

The example in this page is really simple and can be used to understand the basics of the command pattern. Hystrix has a lot of feature such as circuit-breaker logic, fallback definition, cache, and many more.
