---
title: "Very brief introduction to XML"
date: 2009-10-26
tags:
  - programming
  - data-structures
  - XML
categories:
  - tools
---
Il linguaggio XML è diventato uno degli elementi fondamentali per la realizzazione di sistemi informativi, indipendentemente dalla tecnologia usata.

## Storia

Il World Wide Web Consortium (W3C), in seguito alla guerra dei browser fu costretto a seguire le individuali estensioni al linguaggio HTML. Dovette scegliere quali caratteristiche standardizzare e quali lasciare fuori dalle specifiche ufficiali dell'HTML. Fu in questo contesto che iniziò a delinearsi la necessità di un linguaggio di markup che desse maggiore libertà nella definizione dei tag, pur rimanendo in uno standard.

Il "progetto XML", che ebbe inizio alla fine degli anni '80 nell'ambito della SGML Activity del W3C, suscitò un così forte interesse a tal punto che la W3C creò un gruppo di lavoro, chiamato XML Working Group, composto da esperti mondiali delle tecnologie SGML, ed una commissione, XML Editorial Review Board, deputata alla redazione delle specifiche del progetto.

Nel febbraio del 1998 le specifiche divennero una raccomandazione ufficiale con il nome di Extensible Mark-up Language, versione 1.0. Ben presto ci si accorse che XML non era solo limitato al contesto web, ma era qualcosa di più: uno strumento che permetteva di essere utilizzato nei più diversi contesti, dalla definizione della struttura di documenti, allo scambio delle informazioni tra sistemi diversi, dalla rappresentazione di immagini alla definizione di formati di dati.

<!-- truncate -->

## Il Linguaggio

  * **Definizione XML**: (acronimo di eXtensible Markup Language) è un metalinguaggio di markup, ovvero un linguaggio marcatore che definisce un meccanismo sintattico che consente di estendere o controllare il significato di altri linguaggi marcatori. Costituisce il tentativo di produrre una versione semplificata di SGML che consenta di definire in modo semplice nuovi linguaggi di markup

Quindi quello che si fa con XML è definire/progettare dei propri "Linguaggi XML" (cioè un linguaggio basato su XML); ad esempio possiamo scegliere di codificare in XML i risultati di una giornata del campionato di calcio:

```xml
<partite giornata="3°">
 <partita numero="1">
  <squadra>Napoli</squadra>
  <squadra>Juventus</squadra>
  <risultato>3-0</risultato>
 </partita>
  <partita numero="2">
  <squadra>Roma</squadra>
  <squadra>Lazio</squadra>
  <risultato>2-2</risultato>
 </partita>
</partite>
```

Il processo di sviluppo di un linguaggio XML è detto "XMLificazione": ossia la scelta dei tag (partite, partita, squadra, risultato), degli attributi (giornata, numero), e della loro struttura.

Ci possono essere però altri linguaggi XML che usano i nostri stessi tag, e mischiare più linguaggi XML con nomi dei tag uguali può portare a confusione, per questo possiamo introdurre un namespace per i nostri nomi.

  * **Namespace XML**: Un namespace è una collezione di nomi di entità, definite dal programmatore, omogeneamente usate in uno o più file sorgente. Lo scopo dei namespace è quello di evitare confusione ed equivoci nel caso siano necessarie molte entità con nomi simili, fornendo il modo di raggruppare i nomi per categorie.Nel linguaggio XML i namespaces sono definiti esplicitamente.

Nel nostro caso la prima riga diventerà:

```xml
<partite giornata="3°" xmlns="http://www.fireteam.it">
```

In questo modo indichiamo che il tag 'partite' e tutto il suo contenuto appartengono al namespace 'http://www.fireteam.it' di default.

Fin qui XML sembra la più banale delle tecnologie, eppure ha avuto così tanto successo... allora perché è così importante?

## La Tecnologia XML

Il primo motivo è che tutti i file XML sono codificati in UNICODE (i famosi UTF-8 UTF-16, ed UTF-32), e sono stati eliminati in questo modo molto dei fastidi che affligevano i formati testuali.

Il secondo motivo è che con XML si può rappresentare l'informazione in modo semplice, mantenendo un minimo di struttura; non a caso l'informazione codificata in XML è detta semistrutturata, che è il compromesso dalla completa strutturazione (come ad esempio la struttura rigida di uno schema di un database relazionale) e l'assenza di struttura (schema-less, ossia il testo puro).

Il terzo motivo, che ritengo più importante, è che attorno a questo semplice linguaggio di markup sono state definite parecchie tecnologie utili a risparmiare lavoro durante il trattamento dei dati. Queste sono:

  * **Xpath**: è un linguaggio parte della famiglia XML che permette di individuare i nodi all'interno di un documento XML.

  * **Linguaggi Schema**: un linguaggio di schema è un linguaggio formale per esprimere "schemi". Uno schema è la definizione formale della sintassi di un linguaggio XML, ovvero una famiglia di documenti XML.
      * **DTD**: Il linguaggio DTD è utile a definire schemi DTD per un particolare linguaggio XML. DTD è semplice, con un potere espressivo limitato, non è autoesplicativo poiché non usa una notazione XML (è descritto da una grammatica BNF), e tra i tanti difetti non supporta i namespace in quanto il linguaggio DTD stato definito è stato definito prima dei namespace.
      * **Schema**: è un linguaggio di schema nato per sostituire DTD. E' più espressivo, è quasi autoesplicativo (è scritto in XML e la sua sintassi è definibile con XML schema stesso, ma non si riescono a catturare tutti gli aspetti sintattici del linguaggio). Inoltre introduce i tipi di dato e permette di crearne nuovi, in modo da riuscire a fare buoni controlli sui contenuti dei file XML.

  * **XSL**: acronimo di eXtensible Stylesheet Language, è il linguaggio di descrizione dei fogli di stile per i documenti in formato XML. Com'è noto, lo standard XML prevede che i contenuti di un documento siano separati dalla formattazione della pagina in cui verranno pubblicati.
      * **XSLT**: XSL Transformations - il linguaggio di trasformazione dell'XML. Fa uso di XPath per accedere alle parti di un documento XML. La trasformazione è fatta da un modulo detto Processore XSLT, come ad esempio quello incluso nei browser.
      * **XSL-FO**: XSL Formatting Objects - usato per l'applicazione degli stili e del modo di apparizione a un documento XML.

  * **XQuery**: abbrevazione per XML Query Language, è un linguaggio di programmazione specificato dal W3C e destinato ad interrogare documenti e basi di dati XML.

Qui è d'obbligo soffermarsi per discutere sull'utilità di un linguaggio di interrogazione XML. Un'ambiziosa applicazione di XML ha come scopo la generalizzazione del tradizionale modello delle basi di dati relazionali. Da tempo si sta cercando un'alternativa ai vecchissimi database relazionali, e si è provato in svariate direzioni... database gerarchici, database multidimensionali, database ad oggetti, ecc.

XML è un alternativa allettane! Oggi si scrive molto in XML, specialmente sul web dove vi sono pagine XHTML (che sono XML), e l'idea di avere un database XML perfettamente integrabile con tutti gli altri nostri dati non è affatto male... il World Wide Web può così diventare una gigantesca base di dati.

XQuery è un linguaggio per interrogare file XML, allo stesso modo in cui SQL interroga base di dati relazionali... ed è qui che una collezione di file XML è spesso chiamata Database XML.

E come tutti i linguaggi di interrogazione che si rispettano anche per XQuery c'è un algebra... XML Query Algebra definita dal W3C. In realtà i lavori sono ancora in progresso e ci sono varie proposte di algebra:

  * **Algebra per linguaggi di interrogazione XML**: sono stati proposti svariati linguaggi di interrogazione XML, come XQuery, XML-QL, ed altri; quindi c'è un interesse crescente verso l'interrogazione di file XML. Non ancora però è stata definita un'algebra comune per questi linguaggi. Un algebra formale è un passo obbligato per avere una buona ottimizzazione delle query.
      * **TAX**: E' una proposta di algebra non standard, utilizzata da un motore di database XML chiamato "Timber XML". TAX sta per "Tree Algebra for XML", ed è una proposta interessante perché usa un modello di dati dove i documenti XML sono effettivamente visti come alberi, quindi le varie operazioni (Selezione, Proiezione, Prodotto, Set, Raggruppamento, Aggregazione, Renaming, Reordering, Copy-and-Paste, Cancellazione, Inserimento) risultano definite in modo naturale.
      * **XML Query Algebra**: anche chiamata "The Algebra" è la proposta di standardizzazione da parte del W3C. Questa algebra, che sembra assomigliare ad un linguaggio di programmazione dichiarativo, non definisce le operazioni con operatori ad HOC, ma riesce a ricavare le consuete operazioni mediante l'uso di cicli for, assegnazioni di variabili, costrutti condizionali, ed altro. Inoltre i tipi di dato sono molto importanti, e sono definiti per ogni espressione. Una volta tradotta una query, la sua ottimizzazione sfrutta delle regole di inferenza logica; un metodo del tutto innovativo.

E quando queste tecnologie non riescono a soddisfare le nostre richieste, entra in gioco la solita programmazione:

  * **Programmazione XML**: Benchè gli strumenti XML (Schema, XSLT, XQuery, XPath, ecc...) ci permettono di fare molti tipi di elaborazione, spesso c'è la necessita di manipolare file XML da linguaggi di programmazione di uso generale come ad esempio Java.
      * **DOM**: Il Document Object Model (DOM) è una forma di rappresentazione dei documenti strutturati come modello orientato agli oggetti. DOM definisce un API per accedere e manipolare file XML comune a diversi linguaggi.
      * **SAX**: (Simple API for XML) è un'API per numerosi linguaggi di programmazione che permette di leggere ed elaborare dei documenti XML. Contrariarmente al DOM, il SAX processa i documenti linea per linea. Il flusso di dati XML è unidirezionale, così che dati a cui si è acceduto in precedenza non possono essere riletti senza la rielaborazione dell'intero documento.
      * **JDOM**: JDom è un API per accedere ed elaborare documenti XMl specifica per il linguaggio di programmaziopne Java, che (rispettando il principio del 80/20) permette di sviluppare con semplicità l'80% delle applicazione, mentre richiede una soluzione ad HOC per il restante 20%... cioè JDom sacrifica parte della generalità per dar miglior supporto alle applicazioni più comuni.

  * **XML Retrieval**: L'information retrieval (IR) è la disciplina che studia le tecniche utilizzate per il recupero mirato dell'informazione in formato elettronico.

## Le Applicazioni XML

XML è oggi una tecnologia matura ed utilizzata negli ambiti più disparati... basta provare a salvare un documento di testo scritto con il famosissimo word processor OpenOffice, rinominare questo file .zip, e provare ad estrarre il contenuto: dentro troveremo il nostro documento descritto in XML!!!

Un altro esempio è SVG, lo standard aperto per la grafica vettoriale che punta a sostituire la tecnologia 'flash' sul web. Un file .svg è interamente scritto in XML, tant'è vero che si può aprire senza problemi con un qualsiasi editor di testo.

Alcuni linguaggi XML hanno avuto particolare successo come XHTML, CML (Chemical Markup Language), WML (usato nella tecnologia WAP dei cellulari), RSS ed altri... in particolare Mpeg7:

  * **Mpeg-7**: MPEG-7 è uno standard nato per codificare i contenuti multimediali; non è uno standard nato per codificare flussi audio o video come, ad esempio, MPEG-1 MPEG-2 o MPEG-4 ma per definire metadati sui dati multimediali.La codifica utilizza l'XML per memorizzare dei metadati che utilizzano a loro volta il timecode del filmato permettendo di sincronizzare i flussi multimediali con particolari eventi. Per esempio, permette di sincronizzare un filmato con i suoi sottotitoli o un video con il testo della canzone.
