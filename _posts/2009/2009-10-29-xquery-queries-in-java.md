---
title: "XQuery queries in Java"
date: 2009-10-29
tags:
  - programming
  - basex
  - java
  - xml
  - xquery
---
<p>
  XQuery, una abbrevazione per XML Query Language, è un linguaggio di programmazione specificato dal W3C e destinato ad interrogare documenti e basi di dati XML. Questo perché XML si sta proponendo come la tecnologia per rimpiazzare i vecchi DBMS relazionali :-)
</p>

<p>
  Il w3c ha definito il linguaggio XQuery 1.0; usa la sintassi delle espressioni di XPath  2.0, con l'aggiunta delle cosiddette espressioni FLWOR per la formulazione di query complesse. Il risultato è un linguaggio di programmazione funzionale, dichiarativo, con somiglianze con il vecchio SQL.
</p>

<p>
  Per effettuare delle query xquery su un file XML possiamo usare delle librerie come BaseX e Saxon. Purtroppo attualmente Saxon non è un prodotto del tutto gratuito, quindi scegliamo di usare BaseX, un processore Xquery-XPath open source.
</p>

<!-- truncate -->

<p>
In realtà BaseX, oltre ad essere utlilizzabile come libreria all'interno del linguaggio Java, ci mette a disposizione un'interfaccia grafica dalla quale possiamo effettuare query su file XML ben formati arbitrari.
</p>

<h2>
  Primo esempio di query
</h2>

<p>
  La prima cosa da fare è inserire i file jar di BaseX nel build path del nostro progetto; la seconda è assicurarsi di avere java 1.6 (non funziona con java 1.5) perché BaseX utilizza il package javax.xml.stream.
</p>

<p>
  Questo è un sempio dove si esegue la query **//li **sul file '**input**':
</p>

```java
import javax.xml.xquery.XQConnection;
import javax.xml.xquery.XQDataSource;
import javax.xml.xquery.XQPreparedExpression;
import javax.xml.xquery.XQResultSequence;

public final class XQueryAPIExample {
 /** Database Driver. */
 static final String DRIVER = "org.basex.api.xqj.BXQDataSource";

 public static void main(final String[] args) throws Exception {

 // Gets the XQDataSource for the specified Driver.
 XQDataSource source = (XQDataSource) Class.forName(DRIVER).newInstance();

 // Creates an XQConnection
 XQConnection conn = source.getConnection();

 // Prepares the Expressionwith the Document and the Query.
 XQPreparedExpression expr = conn.prepareExpression("doc('input')//li");

 // Executes the XQuery query.
 XQResultSequence result = expr.executeQuery();

 // Gets all results of the execution.
 while(result.next()) {
 // Prints the results to the console.
 System.out.println(result.getItemAsString(null));
 }

 }
}
```

<p>
  Questo esempio funziona solo se il file XML interrogato non dichiara nessun namespace.
</p>

<h2>
  Query in presenza di namespace
</h2>

<p>
  Supponiamo adesso di interrogare un file XML con namespace... ad esempio un file in formato XML Mpeg-7 che usa i seguenti namespace:  
 xmlns="urn:mpeg:mpeg7:schema:2001"  
 xmlns:mpeg7="urn:mpeg:mpeg7:schema:2001"  
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
</p>

<p>
  Per far riconoscere i namespace dobbiamo dichiararli nel prologo della xquery in questo modo:  
 declare default element namespace "urn:mpeg:mpeg7:schema:2001"  
 declare  namespace mpeg7 = "urn:mpeg:mpeg7:schema:2001"  
 declare  namespace xsi = "http://www.w3.org/2001/XMLSchema-instance"
</p>

<p>
  Questo è il codice che esegue la query sul file file/video/extract.xml:
</p>

```java
String prologoQuery = "" +
 "declare default element namespace \"urn:mpeg:mpeg7:schema:2001\"; " +
 "declare  namespace mpeg7 = \"urn:mpeg:mpeg7:schema:2001\"; " +
 "declare  namespace xsi = \"http://www.w3.org/2001/XMLSchema-instance\"; ";

 // Gets the XQDataSource for the specified Driver.
 XQDataSource source = (XQDataSource) Class.forName(DRIVER).newInstance();
 // Creates an XQConnection
 XQConnection conn = source.getConnection();
 // Prepares the Expressionwith the Document and the Query.
 //XQPreparedExpression expr = conn.prepareExpression("<xml>1 + 2 = { 1+2 }</xml>/text()");
 //XQPreparedExpression expr = conn.prepareExpression("doc('file/video/20090201_video_15213221.xml')//meta");
 XQPreparedExpression expr = conn.prepareExpression(prologoQuery + " doc('file/video/extract.xml')//Name");

 // Executes the XQuery query.
 XQResultSequence result = expr.executeQuery();
 // Gets all results of the execution.
 while(result.next()) {
 //element = (org.w3c.dom.Element) result.getObject();
 System.out.println(result.getItemAsString(null));
 }
```

<p>
  Nella riga 18 è commentato un altro modo per usare gli oggetti restiuiti dalla query, che ci restituisce il risultato come elementi della struttura DOM del file XML.
</p>
