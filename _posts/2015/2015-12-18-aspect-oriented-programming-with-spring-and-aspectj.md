---
title: "Aspect Oriented Programming with Spring and AspectJ"
date: 2015-12-18
tags:
  - programming
  - aop
  - aspect
  - aspectj
  - crosscutting
  - spring
categories:
  - programming
---
**Aspect-Oriented Programming** (_AOP_) powerfully complements **Object-Oriented Programming** (_OOP_) by providing another way of thinking about program structure.

Drawing a comparison between AOP and OOP we can say that the key unit of modularity in OOP is the class, whereas in AOP the unit of modularity is the aspect. With aspects, you can group application behaviour that was once spread throughout your applications into reusable modules. You can then declare exactly where and how this behaviour is applied. This reduces code duplication and lets your classes focus on their main functionality.

<!-- truncate -->

The concept of a general-purpose aspect is introduced where an aspect transparently forces crosscutting behaviour on object classes and other software entities.

From Wikipedia, the free encyclopedia, we can read:

> "In computing, Aspect-Oriented programming (AOP) is a patented (by Google) programming paradigm that aims to increase modularity by allowing the separation of cross-cutting concerns. It does so by adding additional behaviour to existing code (an advice) without modifying the code itself, instead separately specifying which code is modified via a pointcut specification"

> "This allows behaviours that are not central to the business logic (such as logging) to be added to a program without cluttering the code core to the functionality. AOP forms a basis for aspect-oriented software development"

One of the key components of Spring Framework is the AOP framework it provides.

This article just focuses on AOP with Spring by showing you the source code of a working example.

Let's start with the pom.xml containing all the dependencies we need: the spring framework with AOP (spring-aop) and AspectJ.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.fsferrara</groupId>
  <artifactId>spring-aop-example</artifactId>
  <version>1.0-SNAPSHOT</version>

  <properties>
    <springframework.version>4.0.6.RELEASE</springframework.version>
  </properties>

  <dependencies>
    <!-- Spring framework -->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-core</artifactId>
      <version>${springframework.version}</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-context</artifactId>
      <version>${springframework.version}</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-aop</artifactId>
      <version>${springframework.version}</version>
    </dependency>
    <!-- AspectJ -->
    <dependency>
      <groupId>org.aspectj</groupId>
      <artifactId>aspectjweaver</artifactId>
      <version>1.8.7</version>
    </dependency>
    <!-- Utilities -->
    <dependency>
      <groupId>org.slf4j</groupId>
      <artifactId>slf4j-api</artifactId>
      <version>1.7.6</version>
      <type>jar</type>
    </dependency>
  </dependencies>
</project>
```

## Aspect Definition

As stated on Wikipedia, Aspect Oriented Programming entails breaking down program logic into distinct parts called so-called concerns. The functions that span multiple points of an application are called crosscutting concerns and these crosscutting concerns are conceptually separate from the application's business logic. There are various common good examples of aspects like logging, auditing, declarative transactions, security, and caching etc.

Separating these crosscutting concerns from the business logic is where AOP goes to work.

An Aspect is an implementation of a crosscutting concern and it is described in terms of:

  1. **Advice**: is the Aspect purpose definition. It defines the "_what_" and the "_when_" of an aspect.
  2. **Pointcuts**: they define the"_where_".

An Aspect is attached to one or more **Join Points**.

A _Join Point_ is a point in the execution of the application where an aspect can be plugged in. This point could be a method being called, an exception being thrown, or even a field being modified. These are the points where your aspect's code can be inserted into the normal flow of your application to add new behavior.

### Advice

Spring aspects can work with five kinds of advice:

  * _Before_: The advice functionality takes place before the advised method is invoked.
  * _After_: The advice functionality takes place after the advised method completes, regardless of the outcome.
  * _After-returning_: The advice functionality takes place after the advised method successfully completes.
  * _After-throwing_: The advice functionality takes place after the advised method throws an exception.
  * _Around_: The advice wraps the advised method, providing some functionality before and after the advised method is invoked.

In our example, we are going to define the advice in this way:

```java
package com.fsferrara.spring_aop_example;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

/**
 * Example of an Aspect Advice definition.
 *
 * @author fsferrara
 */
@Component
@Aspect
public class AspectExample {

    /**
     * Define WHAT the aspect do and WHEN to do it.
     * - WHAT: the method source code
     * - WHEN: "around" the method
     *
     * @param pjp the join point selected by the pointcut.
     * @return any object that the proxied method might return.
     * @throws Throwable anything that the proxied object might throw.
     */
    @Around(value = "@annotation(PointcutExample)")
    public Object whatThisAspectDo(ProceedingJoinPoint pjp) throws Throwable {
        Object returnObject;
        System.out.println("The aspect behaviour is implemented here!");
        try {
            returnObject = pjp.proceed();
        } catch (Throwable throwable) {
            throw throwable;
        }
        return returnObject;
    }

}
```

Please note that this aspect is enabled around an annotation called _PointcutExample_. It is a custom annotation we are going to define.

### Pointcuts

If _advice_ defines the "what" and "when" of aspects, then _pointcut_ define the "where". A _pointcut_ definition matches one or more join points at which advice should be woven.

We will annotate a join point with a custom annotation in order to make it a pointcut. This is the definition of the custom annotation

```java
package com.fsferrara.spring_aop_example;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * This annotation define a pointcut on a method.
 *
 * @author fsferrara
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface PointcutExample {

}
```

Let's consider a simple java "hello world" class

```java
package com.fsferrara.spring_aop_example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;


/**
 * Simple Hello World Bean.
 *
 * @author fsferrara
 */
@Component
public class HelloWorld {
    private final Logger logger = LoggerFactory.getLogger(HelloWorld.class);

    /**
     * Prints a sentence.
     */
    @PointcutExample
    public void printHello() {
        logger.info("I don't know anything about the aspect!");
    }

}
```

Please note that with the annotation _@PointcutExample_ we are defining a pointcut on this class!

### Aspect

To actual apply and run the aspect source code, then the existing source code should be modified in some way.

We can distinguish between:

  * **Introductions**: an introduction allows you to add new methods or attributes to existing classes. They can be introduced to existing classes without having to change them, giving them new behavior and state.
  * **Weaving**: is the process of applying aspects to a target object by creating a proxy object. The aspects are woven into the target object at the specified join points. The weaving can take place at several points in the target object's lifetime:
      * _Compile time_: Aspects are woven in when the target class is compiled. This requires a special compiler.
      * _Class-load time_: Aspects are woven in when the target class is loaded into the JVM. This requires a special ClassLoader that enhances the target class's bytecode before the class is introduced into the application.
      * _Runtime_: Aspects are woven in sometime during the execution of the application. Typically, an AOP container dynamically generates a proxy object that delegates to the target object while weaving in the aspects. This is how Spring AOP aspects are woven.

Since Spring AOP is built around dynamic proxies, then AOP support is limited to method interception. So Spring AOP module provides interceptors to intercept an application, for example, when a method is executed, you can add extra functionality before or after the method execution.

## AspectJ

AspectJ is an aspect-oriented programming (AOP) extension created at PARC for the Java programming language. There is a lot of synergy between the Spring and AspectJ projects, and the AOP support in Spring borrows a lot from the AspectJ project.

Definitely AspectJ can complement Spring's AOP framework. For example wiring advice and pointcuts in Spring is much easier with the addition of @AspectJ annotation support.

As you noticed in our example we are using the Spring AOP with the AspectJ annotation.

To completely do that we should define the application context enabling AOP:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns="http://www.springframework.org/schema/beans"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans-3.1.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context-2.5.xsd
    http://www.springframework.org/schema/aop
    http://www.springframework.org/schema/aop/spring-aop-3.1.xsd">

  <context:component-scan base-package="com.fsferrara.spring_aop_example"/>
  <aop:aspectj-autoproxy/>

  <bean id="main" class="com.fsferrara.spring_aop_example.Main">
  </bean>

</beans>
```

The last thing is to load the application context and start the application.

This can be done with a simple Main class.

```java
package com.fsferrara.spring_aop_example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Simple Main.
 * @author fsferrara
 */
public class Main {

    private final HelloWorld helloWorld;

    /**
     * Simple auto-wired constructor.
     *
     * @param helloWorld the application bean proxied by spring AOP.
     */
    @Autowired
    public Main(HelloWorld helloWorld) {
        this.helloWorld = helloWorld;
    }

    /**
     * Calls the proxied method.
     */
    public void start() {
        this.helloWorld.printHello();
    }

    /**
     * Starts Spring application context.
     *
     * @param args if any
     */
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring/applicationContext.xml");
        Main main = (Main) context.getBean("main");
        main.start();
    }
}
```

Although Spring AOP is sufficient for many applications of aspects, it's a weak AOP solution when contrasted with AspectJ. AspectJ offers many types of pointcuts that aren't possible with Spring AOP.

For instance there are times when Spring AOP isn't enough, and you must turn to AspectJ for more powerful aspects. Constructor pointcuts, for example, are convenient when you need to apply advice on the creation of an object.
