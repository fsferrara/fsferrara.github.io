---
title: "The Birth of Computer Science"
date: 2013-10-20
authors: [fsferrara]
tags:
  - history
  - computer-science
  - frege
  - gödel
  - hilbert
  - kant
  - turing
---
La nascita dell'informatica.

Il primo kernel Linux è stato pubblicato nel 1991, l'annuncio del primo sistema operativo della famiglia Windows risale al 1983, la nascita dell'informatica come disciplina scientifica risale al 1953, il primo calcolatore programmabile digitale al 1941 (Z3 di Zuse); in realtà tutto scaturisce da una storia molto più lunga che parte dagli studi di Leibniz quando non esistevano i calcolatori digitali, e coinvolge grandi studiosi come Frege, Gödel, e Turing.

<!-- truncate -->

## Gottfried Wilhelm von Leibniz

Leibniz (Lipsia, 21 giugno 1646 – Hannover, 14 novembre 1716), è stato un filosofo, matematico, e logico tedesco. Ai suoi tempi la logica era quella Aristotelica, quindi del tipo soggetto-predicato.

Leibniz fu il primo ad intuire l'<em>elaborazione simbolica</em> con il suo progetto della **Characteristica Universalis**. L'idea alla base della Cu (Characteristica Universalis) era quella di creare un linguaggio universale per migliorare le comunicazioni politiche, religiose, e commerciali; quindi la Cu doveva essere un linguaggio in grado di guidare ogni sorta di ragionamento.

Il progetto della Cu prevedeva:

  1. Una

     **Lista** dei concetti primitivi e simboli corrispondenti
  2. 

    Un'

    **Arte Combinatoria** utile a combinare i concetti primitivi:
      1. 

        

        _Ars Iudicandi_: procedura di decisione della verità
      2. 

        _Ars Invenendi_: procedura di decisione generativa

Notiamo che l'Ars Iudicandi e l'Ars Invenendi _prevedevano l'introduzione nel sistema della Cu di due procedure effettive_, ovvero ci doveva essere un procedimento preciso (algoritmo) sia per decidere la verità di una sentenza del linguaggio (Ars Iudicandi), sia per ottenere altre verità dalle verità che già conosciamo (Ars Invenendi).

I concetti di **Procedura Effettiva** e **Calcolo Simbolico** sono dunque nati da quest'idea di Leibniz.

Purtroppo il programma di sviluppare questo linguaggio è solo un progetto di Leibniz che non è mai stato sviluppato. Abbiamo solo dei documenti e schizzi a riguardo, che saranno poi usati da Frege.

Qui notiamo che l'Ars Iudicandi prevede una sorta di predicato dim(x,y), vero quando x è (il numero di) una dimostrazione della formula (di numero) y. Quindi è quasi un esempio compiuto di **Sistema Formale**.

## Immanuel Kant

Kant (Königsberg, 22 aprile 1724 – Königsberg, 12 febbraio 1804) è stato un filosofo tedesco. Egli scrive un'opera alla fine del ‘700 nella quale diceva: "_La matematica è una cosa certa, e noi dobbiamo studiare solo come arrivare a questa certezza. Inoltre ci si può chiedere: perché la matematica è certa? Qual è il suo fondamento?_".

Frege proverà a rispondere a questa domanda.

## Friedrich Ludwig Gottlob Frege

Frege (Wismar, 8 novembre 1848 – Bad Kleinen, 26 luglio 1925) è stato un matematico, logico e filosofo tedesco, padre della logica matematica moderna.

Frege voleva rispondere alla domanda posta da Kant (_"Perché la matematica è certa?"_), usando l'intuizione che aveva avuto Leibniz nella sua Characteristica Universalis.

Qui è introdotta la **Tesi Logicista** (o **Programma Logicista**):

<p align="center">
  "La Matematica è riconducibile alla Logica"
</p>

Si afferma che la matematica è logica! Per portare avanti il Programma Logicista, Frege introduce la logica del primo e del secondo ordine come la conosciamo attualmente. Lui la chiamava _Ideografia_.

Nel 1879 Frege propose l'<em>Ideografia</em> un "linguaggio in formule del pensiero puro, a imitazione di quello aritmetico" in cui dice: il modo più sicuro di condurre una dimostrazione è quello puramente logico, il quale astrae dalla natura particolare delle cose e si basa soltanto sulle leggi sulle quali si fonda ogni conoscenza.

A supporto della Tesi Logicista, fu introdotto il primo esempio compiuto di **Sistema Formale**, ovvero un sistema che vincola il processo dimostrativo in modo tale che è sempre possibile riconoscere mediante un procedimento algoritmico se una qualsiasi configurazione di simboli è una dimostrazione oppure no.

Questo _sistema formale_ prevedeva:

  1. Insieme Finito di

    **Assiomi Logici**.
  2. 

    Insieme Finito di

    **Regole di Inferenza** che, senza introdurre conoscenza implicita, ci permettano di dedurre gli assiomi della Matematica dall'insieme di _Assiomi Logici_.

Inoltre ci sono due importanti **Condizioni di Effettività** che specificano un _Sistema Formale_:

  * L'insieme degli Assiomi Logici è

    **Effettivamente Decidibile**
  * L'insieme delle Dimostrazioni Logiche è **Effettivamente Decidibile**

In quest'ultima richiesta si intravede qualcosa del teorema di Gödel; si chiede che il predicato dim(x,y) sia effettivamente decidibile!

Come in Leibniz, anche questa volta ci deve essere un procedimento formale (Algoritmo) che ci assicuri le condizioni di effettività. Ma questa volta le condizioni di effettività sono espressamente richieste.

Inoltre Leibniz e Frege hanno obiettivi diversi, il primo vuole un linguaggio universale, mentre il secondo vuole verificare la certezza della matematica (un problema più piccolo rispetto alla definizione di una lingua universale); entrambi usano la logica come strumento per raggiungere il proprio fine epistemologico.

## Bertrand Arthur William Russell

Frege prosegue con il suo programma logicista puntando a dimostrare gli assiomi della matematica (gli assiomi di Peano) partendo solo dagli _assiomi logici_. Nel sistema formale definito da Frege si possono individuare:

  * Il principio di **Coestensione**: "data una proprietà P, esiste l'insieme y di tutti gli x che godono della proprietà P"
  * Il principio del

    **Terzo Escluso**: almeno uno tra _x_ e _not_ _x_ deve essere vero.

Russell (Trellech, 18 maggio 1872 – Penrhyndeudraeth, 2 febbraio 1970), è stato un filosofo, logico e matematico gallese. Si interessò al lavoro di Frege, e formulò il famoso Paradosso di Russell, causa della caduta del Programma Logicista.

_Paradosso di Russell_: Supponiamo la proprietà: _not__(x appartiene ad x)_

Un elemento che gode di questa proprietà non appartiene a se stesso. Per il principio della coestensione c'è l'insieme di tutti gli elementi che godono di questa proprietà. Quindi diciamo y l'insieme di tutti gli elementi che non appartengono a se stessi. Adesso ci chiediamo: y appartiene a se stesso?

  * Se y appartiene a se stesso allora gode della proprietà di non appartenere a se stesso.

  * Se y non appartiene a se stesso allora per come è definito deve appartenere a se stesso

In entrambi i casi, grazie al principio del terzo escluso, giungiamo ad una contraddizione (questa è un'**antinomia**).

Russell nel 1901 formulò il paradosso e si rese conto delle conseguenze che avrebbe avuto per il programma logicista. Non esitò a mettersi in contatto con Frege con una lettera nell'estate del 1902 in cui illustra il paradosso.

Frege prese atto delle conseguenze distruttive per il sistema che aveva costruito in quegli anni e decise di scrivere un'appendice ai suoi Principî in cui confessava il fallimento della sua opera.

Siamo davanti ad una scelta:

<p class="MsoListParagraph">
  -

  <em> rinunciare al principio del terzo escluso</em>: e quindi rinunciare alla logica classica
</p>

oppure

<p class="MsoListParagraph">
  -

  <em> rinunciare al principio di coestensione</em>: ma in questo caso non si riescono più a derivare gli assiomi della matematica
</p>

Qui il Programma Logicista, e sorge il _problema della certezza della matematica_.

A seguire ci saranno due programmi che puntano a risolvere il problema della certezza della matematica: Il **Programma Intuizionista**, ed il **Programma di Hilbert**.

## Luitzen Egbertus Jan Brouwer

Brouwer (Overschie, 27 febbraio 1881 – Blaricum, 2 dicembre 1966) è stato un matematico olandese. Fondò la **Scuola Intuizionista (o costruttivista)**, nella quale dubitò

del _principio del terzo escluso_.

I requisiti del Programma Intuizionista erano:

  1. Eliminazione del Principio del Terzo Escluso su totalità infinite.

  2. Interpretazione delle dimostrazioni in modo Costruttivista: cioè una dimostrazione di "esiste x tale che P(x)" deve effettivamente esibire un elemento y per il quale è vero P(y).

Quindi gli intuizionisti puntano a limitare la matematica, eliminando l'uso di proposizioni ideali, come l'infinito in atto (o infinito attuale), che hanno permesso alla matematica di raggiungere ottimi risultati.

## David Hilbert

Hilbert (Königsberg, 23 gennaio 1862 – Gottinga, 14 febbraio 1943) è stato un matematico tedesco. Rispose agli intuizionisti con il cosiddetto **Programma di Hilbert**.

Al contrario di Frege che voleva dimostrare gli assiomi matematici patendo dagli assiomi logici, Hilbert voleva formalizzare la matematica con degli assiomi e poi verificare la coerenza delle teorie matematiche formalizzate.

Quindi:

  1. 

    Formalizzare tutte le teorie matematiche

    _"T"_ con sistemi formali T
  2. 

    Dimostrare la coerenza di tali sistemi T con

    _metodi matematici finitisti_.

Si comincio con la più semplice delle teorie, ossia con l'Aritmetica Elementare. I _metodi matematici finitisti_ non sono mai stati definiti da Hilbert con precisione. Di sicuro sono metodi matematici in cui vengono chiesti i requisiti intuizionisti: quindi no al terzo escluso su totalità infinite e interpretazione costruttivista delle dimostrazioni. Molti concordano che i metodi finitisti sono inclusi nell'aritmetica Primitiva Ricorsiva dove valgono gli assiomi di Peano che descrivono l'aritmetica elementare.

Nasce la meta-matematica, ossia la parte della matematica che consente di studiare la matematica da punti di vista generali. Stiamo cioè usando la matematica stessa per risolvere il _problema della certezza della matematica_.

Nella metamatematica possiamo studiare varie proprietà dei sistemi formali, ad esempio:

  * 

    **Coerenza**: se T dimostra A allora non può dimostrare not A
  * 

    **Correttezza**: se T dimostra A allora A è vero nella teoria <em>"T"</em>
  * **Completezza**: se A è vero nella teoria _"T"_ allora T dimostra A

Notiamo che la correttezza di un sistema formale T implica la sua coerenza.

Ricapitolando Hilbert con il suo **Programma della Coerenza** (che è solo una parte del **Programma di Hilbert**) vuole dimostrare la coerenza della matematica utilizzando la matematica stessa.

## Principia Mathematica (PM)

I Principia Mathematica, scritti da Russell e Whitehead tra il 1910 e il 1913, rappresentano un'importante tentativo di formalizzare la matematica con la logica. Traggono origine dal lavoro di Frege.

Chiameremo PM il sistema formale formalizzato in questo lavoro.

## Kurt Gödel

Gödel (Brno, 28 aprile 1906 – Princeton, 14 gennaio 1978) è stato un matematico, logico e filosofo statunitense di origine austro-ungarica, noto soprattutto per i suoi lavori sull'incompletezza delle teorie matematiche. Gödel è ritenuto uno dei più grandi logici di tutti i tempi insieme a Frege e Aristotele.

Gödel si interessa al Programma di Hilbert, e formula il suo **primo teorema di incompletezza**:

<p>
  <em>Se PM è coerente, allora esiste una formula G nel linguaggio L(PM) tale che G è vera e non è dimostrabile in PM ne G ne not G</em>
</p>

Ne segue come corollario il **secondo teorema di incompletezza**:

<p>
  <em>Se PM è coerente, e dato che la coerenza di PM è esprimibile all'interno di PM stesso (consis(PM) appartiene a L(PM)) allora in PM non è dimostrabile consis(PM)</em>
</p>

Il **secondo teorema di incompletezza** è quello che fa cadere il **Programma di Hilbert** poiché afferma che non possiamo dimostrare la coerenza di PM all'interno di PM stesso,

cioè non possiamo dimostrare la coerenza della matematica all'interno della matematica stessa.

Però i teoremi di incompletezza si riferiscono al **Sistema Formale** PM. Per far cadere definitivamente il Programma di Hilbert bisognava generalizzare i teoremi di incompletezza a qualsiasi **Sistema Formale** che contiene l'aritmetica elementare.

## Generalizzazione dei Teoremi di Incompletezza

Vogliamo generalizzare i teoremi di incompletezza in questo modo:

_Per ogni sistema formale S tale che:_

  1. 

    _S contiene P (Aritmetica di Peano)_
  2. 

    _S soddisfa la **condizioni di effettività** di Frege_
      * 

         _a) L'insieme degli assiomi è effettivamente decidibile_
      * 

        _b) L'insieme delle dimostrazioni è effettivamente decidibile_
  3. 

     _S è coerente_

_Allora per S valgono i teoremi di incompletezza_

Le ipotesi 1 e 3 sono ben precise. L'ipotesi 2.a e 2.b invece no! Infatti esse chiedono di avere due funzioni **effettivamente calcolabili** f(x) e g(Y) le quali ci decidano rispettivamente le formule ben formate di S e le dimostrazioni di S.

Questo è il punto di snodo tra i fondamenti della matematica e la nascita dell'informatica. Infatti una funzione è effettivamente calcolabile se esiste un algoritmo per essa.

Ma quale'è il concetto di algoritmo? Quali sono le funzioni calcolabili mediante un procedimento di calcolo (algoritmo)?

Tutt'ora non esiste un concetto di algoritmo preciso. La classe di tutti gli algoritmi è delineata con la tesi di Church-Turing, la quale essendo una tesi non può essere dimostrata.

## Alan Mathison Turing

Turing (Londra, 23 giugno 1912 – Wilmslow, 7 giugno 1954) è stato un matematico, logico e crittanalista britannico, considerato uno dei padri dell'informatica.

Lavorò alla generalizzazione del teorema di Gödel, tentando di rispondere alla domanda: _"che cos'è una funzione parzialmente calcolabile mediante un procedimento di calcolo (algoritmo)?"_.

Church a quei tempi lavorava alla stessa domanda definendo la classe delle funzioni matematiche PRF, per poi arrivare ad un procedimento di calcolo (λ-calcolo).

Turing invece cominciò questo lavoro cominciando a definire il procedimento di calcolo (definito dalla **Macchina di Turing**), per poi arrivare alla classe di tutte le funzioni calcolabili da una **Macchina di Turing**.

Per definire la sua Macchia di Turing (d'ora in poi MdT), Turing osservo il comportamento di un essere umano che calcola. Quindi individua una serie di restrizioni:

  1. L'umano effettua dei calcoli aiutandosi con un foglio. Nel caso di una macchina possiamo pensare ad un nastro potenzialmente infinito fatto di caselle contigue. In ogni casella possiamo



    scrivere un simbolo appartenente ad un alfabeto.
  2. Limiti all'uso del nastro

      * a.

        Limite Percettivo: c'è un limite superiore B al numero di caselle contigue osservabili in un istante (questo implica che ci si può spostare sul nastro per vedere le prossime B caselle).

      * b.

        Limite di Memoria: l'alfabeto dei simboli scrivibili sul nastro è finito poiché l'essere umano non riesce a distinguere e ricordareinfiniti simboli.

  3. Il comportamento dipende dallo stato mentale (stato di memoria) dell'essere umano. Questo stato mentale dipende dalle azioni fatte precedentemente. Senza indagare molto sul cervello umano, imponiamo che questi stati siano in numero finito (deciso a priori).

  4. Limitiamo il comportamento dell'essere umano che calcola, senza perdita di generalità, al compimento di un'azione per volta:

      * a.

        Si può cambiare il contenuto solo delle caselle osservate

      * b.

        Ci si può spostare di un numero L di caselle per volta

      * c.

        Si può cambiare lo stato mentale

  5. Il calcolo è fatto in maniera Deterministica, dato lo stesso input otteniamo sempre lo stesso output

Ma come imponiamo la condizione di determinismo?

Consideriamo tutte le possibili azioni che può fare l'essere umano durante il calcolo. Diciamo C l'insieme di tutte le possibili coppie "stato mentale, configurazione dei simboli osservati". Per ogni elemento di C si può scegliere di fare un'azione a scelta contenuta nell'insieme possibili di azioni A (scrittura di un simbolo, spostamento a destra, spostamento a sinistra, cambiamento di stato mentale). Definiamo l'insieme di tutte le possibili istruzioni I=CxA. L'insieme delle istruzioni come definito contiene delle istruzioni che definiscono un algoritmo **non deterministico**, poiché a parità di stato mentale e configurazioni di simboli osservati, possiamo trovare istruzioni che effettuano azioni diverse. Poniamo qui una condizione di **determinismo**, chiedendo di avere come insieme di istruzioni solo un sottoinsieme di I nel quale non compaiano istruzioni che possono essere applicate nello stesso stato del calcolo.

Questa è l'analisi dell'essere umano che calcola.

Adesso definiamo una macchina che simulerà il comportamento di calcolo dell'essere umano. Questa macchina avrà delle configurazioni interne q, che corrispondono agli stati mentali dell'umano. Lavora su un nastro osservando ad ogni nastro un numero B di caselle contigue, e può spostarsi di un numero L di caselle a destra o a sinistra. Può usare i simboli dell'alfabeto per scrivere sulla porzione di nastro osservata, e può cambiare la sua configurazione interna. Questa macchina riproduce il comportamento di calcolo di un essere umano.

Ponendo i vincoli B=1 e L=1 abbiamo proprio la definizione di **Macchina di Turing** (MdT). Chiamiamo classe delle funzioni Turing calcolabili (o T-calcolabili), la classe delle funzioni calcolabili con una MdT.

Turing arriva a formulare la seguente tesi:

<p align="center">
  "Ogni funzione calcolabile da un essere umano mediante algoritmo è una funzione T-calcolabile"
</p>

Notiamo che questa tesi è però ristretta alle funzioni calcolate da un essere umano, e non da un qualsiasi agente di calcolo (come un calcolatore). Proviamo ad estendere questa tesi in questo modo:

<p align="center">
  "Ogni funzione calcolabile da un calcolatore mediante algoritmo è una funzione T-calcolabile"
</p>

Per arrivare alla tesi di Church-Turing, osserviamo che i limiti B ed L sono soggetti ai limiti della fisica: la teoria delle relatività ci vieta di oltrepassare la velocità della luce. Inoltre in una singola cella di nastro possiamo registrarci un simbolo preso da un alfabeto finito, perché assumiamo che la materia (del nastro) abbia un vincolo di atomicità, ma su questo non è ancora stata formulata alcuna teoria scientifica.

Considerando i limiti della fisica possiamo riscrivere la tesi ed ottenere finalmente la **Tesi di Church-Turing**:

<p align="center">
  "Ogni funzione calcolabile da un algoritmo è una funzione T-calcolabile"
</p>

Con questa tesi sono stati generalizzati i teoremi di incompletezza di Gödel, chiedendo che le funzioni f(x) e g(Y) siano T-calcolabili. Cade definitivamente il **Programma di Hilbert**,

e il suo tentativo di verificare la certezza della matematica.

## Sviluppi futuri

Quindi dal problema della matematica è nata la MdT, e Turing stesso definì la **Macchina di Turing Universale**, la quale è programmabile proprio come un moderno calcolatore digitale.

Da questo nasce il ramo dell'Intelligenza Artificiale (IA), e più in generale dell'Informatica.
