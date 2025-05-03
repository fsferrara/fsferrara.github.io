---
title: "Building web applications with Scala"
date: 2013-11-22
tags:
  - programming
  - java
  - lift
  - rest
  - sbt
  - scala
---
Scala is general purpose programming language very popular for building web application. But why? At the moment I really don't know why :) , I'm just reading about it and sharing my thoughts with you.

Let's start from Scala. It's a programming language both object-oriented and functional: we can refer to this kind of programming language as "object-functional". We say that is a programming language because there is a compiler for it, but also an interpreter is available.

It is intended to be compiled to Java bytecode, so the resulting executable runs on the JVM, and Java libraries can be used directly in Scala code and vice-versa. Maybe this is the real strength of this language... it allows to write brand-new web application while reusing legacy java libraries. That's awesome for a company with a bunch of old java code.

<!-- truncate -->

## Scala-powered Web Framework

Of course there is the possibility to simply use scala with any java-enabled web framework, but let's choose a specialized one from the several web frameworks that use scala as main language. At the moment the main frameworks are:

  * [Lift](http://liftweb.net) seems the most mature. As the official website states, Lift is highly secure and has the best JSON handling library in Scala: this make lift a good choice to build a web service. Moreover lift is not a traditional MVC framework, but it has a View First approach: lift loads the view first and builds your page from the view. "Why?" Because complex HTML pages rarely contain a dominant piece of logic... a single controller... but contain many different components that can interact or not.
  * [Play](http://www.playframework.com) seems to have a better documentation and videos, and looks more familiar (traditional MVC pattern). At a glance it has a better support for modern web and mobile application. It has a good support to templates, and allows writing code in Scala, Java, Javascript, Coffeescript, and others languages.
  * <a>Scalatra</a> is a simple, accessible and free web micro-framework. It combines the power of the JVM with the beauty and brevity of Scala. It seems very easy to set up, and it is designed exactly to create web services. As micro-framework Scalatra doesn't offer much functionality.

In my opinion Play is the best framework here for building medium-size applications: for large application I really like the "[View First](http://stackoverflow.com/questions/13290118/differences-between-mvc-and-view-first-approach-in-web-development)" approach, so I choose lift for a first experiment.

## SBT

At first I thought it meant "Scala Build Tool" but actually SBT stands for "Simple Build Tool" and, even if it is more popular for Scala projects, it can be also used for Java projects.

SBT is the de facto build tool for the Scala community, used by both the Lift web framework and Play Framework.

Similar to Java's Maven, it has a native support for compiling Scala code and integrating with many Scala test frameworks (continuous compilation, testing, and deployment). Moreover it manages dependencies using Ivy (and library for apache Ant that is compatible with apache Maven repositories). Integrated with the Scala interpreter, it supports debugging and rapid programming iteration.

The build file is entirely written in Scala. It is placed in the root directory of the project and the default name is 'build.sbt'. This is an example:

```scala
organization := "com.fsferrara"
name := "myfirstlift"
version := "0.1-SNAPSHOT"
scalaVersion := "2.10.0"

// xsbt-web-plugin configuration
seq(webSettings :_*)

libraryDependencies ++= {
  val liftVersion = "2.5.1"
  Seq(
    "net.liftweb" %% "lift-webkit" % liftVersion % "compile",
    "org.eclipse.jetty" % "jetty-webapp" % "8.1.7.v20120910"  %
      "container,test",
    "org.eclipse.jetty.orbit" % "javax.servlet" % "3.0.0.v201112011016" %
      "container,compile" artifacts Artifact("javax.servlet", "jar", "jar")
  )
}
```

The object 'webSettings' contains the standard web configuration used to launch the web container, that is, in this example, Jetty. 'Seq', with a capital S, is the interface of a Java List: it contains the list of all the dependencies to download.

I took the above file from a lift webapp template I'm building. A Scala application has another SBT configuration file 'project/plugins.sbt' that contains the list of plugins used by the application:

```scala
addSbtPlugin("com.earldouglas" % "xsbt-web-plugin" % "0.4.2")
```

The [xsbt-web-plugin](https://github.com/JamesEarlDouglas/xsbt-web-plugin) plugin is used to build Scala web application.

## My first Hello World lift application

To complete the classic "hello world" application, we need three more files. The first one is the well-known 'src/main/webapp/WEB-INF/web.xml':

```html
<!DOCTYPE web-app SYSTEM "http://java.sun.com/dtd/web-app_2_3.dtd">
<web-app>
  <filter>
    <filter-name>LiftFilter</filter-name>
    <display-name>Lift Filter</display-name>
    <description>The Filter that intercepts Lift calls</description>
    <filter-class>net.liftweb.http.LiftFilter</filter-class>
  </filter>
  <filter-mapping>
    <filter-name>LiftFilter</filter-name>
    <url-pattern>/*</url-pattern>
  </filter-mapping>
</web-app>
```

With this file a LiftFilter servlet is instantiated and all the HTTP requests are forwarded to it. This is the entry point of the Lift framework. The next file, the "View", is 'src/main/webapp/index.html':

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Lift From Scratch</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

The last one is our first '.scala' file, Finally! So we create 'src/main/scala/bootstrap/Boot.scala':

```scala
package bootstrap.liftweb

import net.liftweb.http.{Html5Properties, LiftRules, Req}
import net.liftweb.sitemap.{Menu, SiteMap}

class Boot {
  def boot {
    LiftRules.addToPackages("code")

    // Build SiteMap
    def sitemap(): SiteMap = SiteMap(
      Menu.i("Home") / "index"
    )

    // Use HTML5 for rendering
    LiftRules.htmlProperties.default.set((r: Req) =>
      new Html5Properties(r.userAgent))
  }
}
```

This file defines a 'Boot' class containing only one method named 'boot'. This class is instantiated early and run: it allows the application to modify lift's environment. The first instruction of the 'boot' method defines the package used to search for "Snippets" (a Snippet is the component that transforms the incoming HTML to the dynamically generated HTML).

Next is the definition of the SiteMap: every page on the site needs a SiteMap entry.

What? A class with a method? Where is the functional side of Scala?

Scala is an object-functional programming language. In my initial opinion it seems that only the object-oriented side of Scala is used, while only few part of code are written completely functional. Maybe the most used "functional feature" is the immutability: I read it in [this interesting post](http://blog.manub.net/2013/11/like-immutable-objects/).

## Starting our application

In order to start our application, open the shell and change directory to the root of our project and type in 'sbt'. Obviously you should first in install the SBT tool.

Now the console of SBT starts, it seems quite slow, and to download all the dependencies type the command "update". Next to start tomcat, use the command "container:start". By default a Jetty server will start, and we can see our first project at the address _http://localhost:8080_.

### Developing with a text editor

SBT has plugins available used to develop Scala application with IntelliJ Idea, Eclipse, and Netbeans. I like to develop my application with a fast text editor with few unused features. My favourite text editor now is Sublime Text, you surely know it!

Also I like compile and refresh my application while developing: To do that we can use SBT with this instruction:

```shell
~; container:start; container:reload /
```

An SBT command prefixed with ~ makes that command run when files change. The first semicolon introduces a sequence of commands, where if the first command succeeds, the second will run. The second semicolon means the reload command will run if the start command ran OK. The start command will recompile any Scala source files that have changed. Honestly I don't know what the last character (/) means.

## Our first Snippet

Like I said before Lift adopts a view-first approach, so the first thing that is loaded is the View (in this case the HTML) and then the snippets are applied to it.

Our first snippet is 'src/main/scala/code/snippet/HelloSnippet.scala'.

```scala
package code.snippet

import net.liftweb.util.Helpers._
import net.liftweb.util.PassThru

import scala.util.Random
import xml.Text

class HelloSnippet {
  private def fiftyFifty = Random.nextBoolean

  def render =
    if (fiftyFifty) "*" #> Text("Hello Saverio")
    else PassThru
}
```

For those of you who do not know, my name is Saverio. This snippet, with a probability of fifty percent, can change the text value of the HTML object linked to it. So the next step is to modify the view in this way:

```html
...
<div data-lift="HelloSnippet">
  Hello World
</div>
...
```

Try it! The page can render now "Hello World" or "Hello Saverio". All works because in the Boot class we defined the folder 'code' as the place where to search for snippets (remember: `LiftRules.addToPackages("code")`)

## A REST endpoint written with Lift

Lift makes providing REST web services very simple. REST ([Representational State Transfer](http://en.wikipedia.org/wiki/Representational_state_transfer)) is an architectural style that abstracts the architectural elements within a distributed hypermedia system. REST ignores the details of component implementation and protocol syntax in order to focus on the roles of components: it has emerged as a predominant web API design model. For those of you who already know SOAP-based web services, the main [difference](http://stackoverflow.com/questions/2131965/main-differences-between-soap-and-restful-web-services-in-java) between the two is that REST is almost always going to be faster, whilst SOAP is provides a mechanism for services to describe themselves to clients, and to advertise their existence. REST is much more lightweight and can be implemented using almost any tool, leading to lower bandwidth and shorter learning curve. However, the clients have to know what to send and what to expect. In general, When you're publishing an API to the outside world that is either complex or likely to change, SOAP will be more useful. Other than that, REST is usually the better option.

In an extremely small nutshell REST is the convention between two systems to communicate by exchanging JSON messages.

Let's write a really simple PingRest service: create the file 'src/main/scala/code/lib/PingRest.scala'.

```scala
package code.lib

import net.liftweb._
import net.liftweb.http._
import net.liftweb.http.rest._
import net.liftweb.json.JsonAST._
import net.liftweb.json.JsonDSL._

object PingRest extends RestHelper {

  serve {
    case JsonGet("api" :: "ping" :: "pong" :: Nil, req) => sayHello
  }

  val sayHello: JValue = {
    (
      ("ping" -> "pong")
    )
  }
}
```

The PingRest class extend RestHelper, a helper used to speed-up the build of web services. Anyway is possible to create a web service without using RestHelper.

To enable this endpoint, we have to modify the Boot code. We must add, at the end of the 'boot' method, this line: `LiftRules.dispatch.append(PingRest)`.

Now each request to the url _http://localhost:8080/api/ping/pong.json_ produces this answer

```json
{
  "ping":"pong"
}
```

The libraries 'net.liftweb.json.JsonAST.\_' and 'net.liftweb.json.JsonDSL.\_' are used to create a JSON response.

## Conclusion

Scala is designed to concisely express solutions in an elegant, type-safe and lightweight (low ceremonial) manner. Scala has full support for functional programming, including currying, pattern matching, algebraic data types, lazy evaluation, tail recursion, immutability, and so on.

Scala allows the reusing of legacy java libraries, that's true, but I really don't like the idea to have another language server-side. I think that adding additional languages, like Scala or Coffeescript, will only increase the complexity of our project and makes it difficult to find people who know how to work on the project.

Furthermore many web frameworks for Scala assume that part of Scala source code should be translated into Javascript code to be executed in the user browser: this introduces another difficulty in debugging Scala application. Other web framework use instead Javascript as main language (for example [express](http://expressjs.com) in the MEAN stack) and in that case the code you write is the same code you should debug. Additionally you write Javascript on both client side and server side.

You can download all the source code in this [collection of project](https://github.com/fsferrara/learn-scala) on github.
