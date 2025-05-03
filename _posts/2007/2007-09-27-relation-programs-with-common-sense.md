---
title: "Summary - Programs With Common Sense"
date: 2007-09-27
authors: [fsferrara]
tags:
  - history
  - computer-science
  - artificial-intelligence
  - ai
  - mccharty
---

# Relazione sull'articolo: "Programs With Common Sense".
John McCharty

Nel 1959, quando si parlava pochissimo di "intelligenza artificiale", John McCharty con l'articolo "Programs with common sense", introduce un programma che ha buonsenso (common sense).

<!-- truncate -->

L'articolo esaminato parla di come un programma può risolvere problemi mediante la manipolazione di un linguaggio formale accettato dal computer, che contiene i più comuni costrutti utilizzati anche nel linguaggio naturale. Lo scopo è di far svolgere alla macchina un ragionamento verbale elementare, ma con delle facilitazioni: essa è collegata ad un display video per "parlare" e l'umano userà una tastiera per interagire. Il programma introdotto da McCharty è chiamato "Advice Taker" e può eseguire azioni al suo interno (ad esempio muovere una frase, o espressione formale, nelle sue liste) e dare conclusioni (stampare frasi dichiarative o imperative).

La differenza tra l'Advice Taker ed altri programmi proposti all'epoca sta nel fatto che mentre gli altri programmi contenevano le euristiche di valutazione all'interno della procedura di deduzione, nell'Advice Taker le euristiche sono state descritte nel linguaggio formale stesso, in modo da avere una maggiore flessibilità. Si potrà cambiare il comportamento dell'Advice Taker; possiamo istruirlo sull'ambiente nel quale lavora, e sullo scopo che deve perseguire, il tutto in tempo relativamente breve: infatti, istruire l'Advice Taker richiede poca familiarità con il programma e con le conoscenze passate. L'aggettivo common sense si basa sul fatto che più il programma è istruito, più ha buonsenso: questo concetto ha molto in comune con il "buonsenso" degli umani.

Prima di introdurre il funzionamento del programma, McCharty illustra cinque caratteristiche (non pienamente condivise da Marvin Minsky, altro studioso dell'intelligenza artificiale) che un sistema deve avere per essere capace di sviluppare intelligenza paragonabile a quella degli umani:

1. Ogni comportamento deve essere rappresentabile nel sistema;
2. Un cambiamento nel comportamento deve essere esprimibile semplicemente;
3. Tutti gli aspetti del comportamento devono essere migliorabili;
4. Oltre al successo e al fallimento, la macchina deve comprendere il concetto di successo parziale;
5. Il sistema deve essere in grado di programmarsi da solo automi o subroutine che potrà poi eseguire.

Certo un sistema con queste caratteristiche è molto difficile da implementare, specialmente nell'anno in cui l'articolo è stato scritto. McCharty, infatti, nella progettazione dell'Advice Taker si concentra solo sulla seconda caratteristica, cercando un modo semplice ed intelligente per rappresentare cambiamenti di comportamento.

Per far pensare la macchina, sono preferite preposizioni dichiarative anziché preposizioni imperative. Di fatto le preposizioni imperative non badano a conoscenze precedenti, e rappresentano solo ordini da eseguire, mentre le preposizioni dichiarative sfruttano le conoscenze precedenti, hanno conseguenze logiche, e lo stato del sistema non è sconvolto dall'effetto che una proposizione può avere. Inoltre, siccome l'ordine di presentazione delle proposizione dichiarative non è rilevante, la macchina può avere ripensamenti.

I tre componenti principali dell'Advice Taker sono:

Espressioni regolari: Il nome "Advice Taker" si riferisce a qualcosa che accetta consigli (advice). Questi consigli sono dati dall'umano alla macchina sotto forma di espressioni regolari, di conseguenza l'Advice Taker deve essere in grado di rappresentare e memorizzare al suo interno espressioni di questo tipo. Un'espressione può essere ad esempio una proposizione dichiarativa o un nome di entità, e ad ognuna di esse è associata una precisa regola di inferenza data dalla combinazione del modus ponens con la sostituzione di variabili; con un insieme iniziali di espressioni, mediante un'apposita procedura di deduzione, si può immediatamente dedurre un insieme di conclusioni. Oltre alle espressioni regolari, si possono memorizzare anche individui, funzioni, e programmi. L'insieme di tutte le espressioni memorizzate all'interno dell'Advice Taker rappresenta la sua conoscenza.

Procedura di deduzione: La procedura di deduzione non userà un'euristica di carattere semantico! Questo rende l'euristica stessa non dipendente dall'argomento trattato, quindi si punta a risolvere qualsiasi problema, senza legarsi ad un tipo specifico.  Applicare simultaneamente la procedura di deduzione su tutta la conoscenza dell'Advice Taker può essere molto oneroso computazionalmente, e renderà lenta la reazione della macchina. A questo proposito ci saranno alcune procedure che in base al problema da risolvere preleveranno dalla conoscenza l'insieme di tutte le espressioni interessanti al problema stesso, per poi applicare la procedura di deduzione solo su questo sottoinsieme. E' evidente che la procedura di deduzione immediata non conterrà l'intelligenza dell'Advice Taker, ma essa sarà inglobata nelle procedure atte a formare le liste su cui operare.

Oggetti e liste di attributi: Tutte le espressioni che rappresentano il nome di un'entità hanno associate ad esse una lista di attributi contenente le proprietà dell'entità stessa. Può capitare che un'entità non abbia aggiuntivi, ma solo informazioni ricavabili dal nome stesso; in questo caso per l'entità non sarà presente una lista di proprietà. Un esempio è rappresentato del numero 3812 il quale ci offre tutte le informazioni dal nome stesso. Le liste di attributi hanno anche una seconda utilità: se per dedurre un'informazione dell'entità è stato particolarmente costoso, questa informazione si può registrare all'interno della lista.
 
Il funzionamento del programma prevede di svolgere ciclicamente i seguenti cinque passi:

**Passo 1**: Si parte da una lista di premesse (espressioni regolari) e d'individui.
**Passo 2**: Alla lista si applica la procedura di deduzione, e abbiamo in output una lista di conclusioni.
**Passo 3**: Dalla lista di conclusioni estrapoliamo tutte le proposizioni imperative dedotte.
**Passo 4**: Gli imperativi sono ubbiditi.
**Passo 5**: Tra gli imperativi c'è la procedura che deduce e ubbidisce, e questo rende ciclico il funzionamento del programma.

Com'esempio è considerato il problema "Come raggiungere l'aeroporto se mi trovo alla scrivania nella mia casa". La prima cosa da fare è istruire il programma sull'ambiente e sul problema da risolvere, mediante l'introduzione di espressioni regolari.

Il primo predicato introdotto è

```
at(x,y)
```

che è una formalizzazione di "x is at y", quindi dire

```
at(io,scrivania)
```

significa che io mi trovo alla scrivania.

Di questo predicato è possibile esprimere la proprietà transitiva in questo modo:

```
at(x,y), at(y,z)  ->  at(x,z)
```

In questo modo sono inserite tutte le conoscenze utili all'Advice Taker per risolvere il problema, come le seguenti proprietà:

* "raggiungibilità di un luogo a piedi",
* "raggiungibilità di un luogo con l'auto",
* "andare in un luogo",
* "possibilità di andare in un luogo".

Infine la proprietà dalla quale parte il processo di deduzione:

```
want(at(io,aeroporto))
```

Quest'ultima esprime l'obiettivo (goal) che la macchina deve perseguire. A questo punto ci sono due importanti problemi da risolvere:

1. Estrapolare dalla conoscenza le premesse utili a risolvere il problema;
2. Applicare il processo di deduzione alle premesse estrapolate.

Questi due problemi non trovano soluzione nell'articolo di McCharty.

Sicuramente l'Advice Taker parte con due premesse; la prima è in(io,scrivania) che è dedotta dalla domanda "Dove mi trovo?", mentre la seconda è quella che esprime il goal da perseguire: want(at(io,aeroporto)). Quest'ultima è inserita in una lista principale L, e in base al contenuto di questa lista è creata una lista ausiliaria (chiamata "observation of the main list"). Questa lista ausiliaria, insieme ad un'altra lista delle "azioni da compiere" sono utilizzate dalla procedura di deduzione per perseguire lo scopo.

McCharty non s'inoltra troppo nei dettagli della soluzione, in effetti, questo articolo ha lo scopo di introdurre le liste, di espressioni formali o di proprietà, e di chiarire la sistemazione delle regole euristiche.
