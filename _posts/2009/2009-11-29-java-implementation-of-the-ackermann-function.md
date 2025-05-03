---
title: "Java implementation of the Ackermann function"
date: 2009-11-29
tags:
  - programming
  - ackermann
  - computability
  - java
---
Wilhelm Friedrich Ackermann (29/3/1896 – 24/12/1962) was a German mathematician best known for the Ackermann function, an important example in the theory of computation.

La funzione di Ackermann è una funzione f(x,y,z) che ha come dominio l'insieme delle terne di numeri naturali e come codominio i numeri naturali.

Essa è un esempio di funzione ricorsiva che non è primitiva ricorsiva poiché cresce più velocemente di qualsiasi funzione ricorsiva primitiva.

<!-- truncate -->

La descrizione matematica della funzione di Ackermann è:

```
A(m,n) = n+1             // se m=0
A(m,n) = A(m-1,1)        // se m>0 e n=0
A(m,n) = A(m-1,A(m,n-1)) // se m>0 e n>0
```

Qui il codice java che implementa questa funzione:

_Ackermann.java_

```java
public class Ackermann {

 static long count = 0;

 private static long h(long m, long n) {

  count++;

  if (m == 0) {
   return n + 1;
  }
  if (n == 0) {
   return h(m-1, 1);
  }

  return h(m-1, h(m,n-1) );
 }

 private static long ack(long n) {
  return h(n, n);
 }

 public static void main(String[] args) {

  if (args.length != 1) {
   System.out.println("usage: Ackermann <number>\n\twhere number is a positive integer");
   System.exit(1);
  }

  long n = Long.valueOf(args[0]);

  count = 0;
  long retValue = ack(n);  
  System.out.println("ack(" + n + ") = " + retValue + " [recursive calls = "+ count +"]");

  System.exit(0);
 }

}
```

Il meccanismo di calcolo della funzione è estremamente semplice quanto pesante dal punto di vista computazionale. Questi sono i risultati ottenuti:

  * ack(0) = **1**  [recursive calls = **1**]
  * ack(1) = **3**  [recursive calls = **4**]
  * ack(2) = **7**  [recursive calls = **27**]
  * ack(3) = **61** [recursive calls = **2432**]

Non riesco a calcolare ack(4) causa stack overflow (Exception in thread "main" java.lang.StackOverflowError).
