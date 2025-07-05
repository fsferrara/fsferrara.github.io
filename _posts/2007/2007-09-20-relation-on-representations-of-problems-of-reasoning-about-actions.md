---
title: "Relazione sull'articolo: On Representations of Problems of Reasoning about Actions"
date: 2007-09-20
tags:
  - history
  - computer-science
  - artificial-intelligence
  - ai
  - amarel
categories:
  - learning
---
Saul Amarel - RCA Laboratories Princeton, N.J.

In questo articolo Saul Amarel parla dei problemi di "ragionamento sulle azioni" (reasoning about action), ossia dei problemi che trattano l'individuazione delle azioni da compiere per avere un certo risultato. In questa categoria cadono problemi di tipo industriale/militare, e sicuramente li abbiamo incontrati nella nostra vita, quando ad esempio organizziamo una cena tra amici.

<!-- truncate -->

In generale la rappresentazione di un problema può essere fatta in diversi modi, e questo fattore condiziona poi la risoluzione del problema stesso. Tenuto conto della relazione tra la formulazione del problema e il modulo "problem solving system" addetto a risolvere il problema, si tende a cercare una rappresentazione tale da semplificare il processo di risoluzione del problema. Nella maggior parte di questo articolo l'attenzione è rivolta proprio a questo: capire bene come formulare il problema per poi risolverlo in modo semplice!

Le prinicipali caratteristiche di un problema di "ragionamento sulle azioni" sono:

- Una situazione iniziale e una situazione finale;
- Un insieme d'azioni che variano lo stato della situazione;
- Un insieme di vincoli che limita la fattibilità delle azioni.

Il compito del modulo "problem solving system" è trovare la miglior sequenza di azioni che ci portano dalla situazione iniziale alla situazione finale senza violare nessun vincolo. 

I problemi vengono formulati e risolti in un sistema "P" composto da:

- _Un linguaggio per descrivere gli N-States_: questi ultimi rappresentano gli stati delle varie situazioni (ad esempio la situazione iniziale e la situazione finale sono due N-States);
- _Un linguaggio di descrizione estesa_: per descrivere più dettagliatamente un N-State, ricorriamo a questo linguaggio ottenendo così una descrizione estesa dello stato;
- _Regole per le azioni_: specificano una possibile prossima situazione basandosi su un insieme di caratteristiche che troviamo nella situazione corrente.

Inizialmente la formulazione di un problema di ragionamento è fatta in linguaggio naturale, quindi possiamo individuare differenti linguaggi per descrivere gli N-States, ed è proprio la scelta di uno di questi linguaggi che condiziona la quantità di sforzi da fare per risolvere il problema. Per mettere in evidenzia questo particolare, nell'articolo viene discusso ampiamente una versione estesa del problema dei "Missionary and Cannibals" esaminando 6 formulazioni (da F1 a F6).

La formulazione F1 del problema è  interamente verbale: "Tre missionari e tre cannibali cercano di attraversare un fiume ed hanno a disposizione una barca che può trasportare una o due persone.  Bisogna trovare il modo di condurre tutti sull'altra sponda senza mai lasciare in un posto un numero di missionari inferiore a quello dei cannibali. In generale, vi sono N missionari ed N cannibali e la barca ha capacità K (dove N è maggiore o uguale a 3, e K maggiore o uguale a 2)."

A partire dalla formulazioni F1, viene data la formulazione F2 definendo un sistema P come prima descritto. In particolare gli elementi base degli N-States sono:

- N missionari `(m1, ... , mn)` e N cannibali `(c1, ... , cn)`;
- Un oggetto barca `bk` con la relazione `on(<qualcuno>, bk)` la quale indica che `<qualcuno>` è sulla barca;
- Due spazi `pL` e `pR` con la relazione `at(<qualcuno>, <spazio>)` che ci da informazioni sulla posizione dei cannibali e dei missonari.

Ovviamente la situazione iniziale, la situazione finale, e tutte le altre possibili situazioni, possono essere descritte combinando gli elementi base appena introdotti.
Per avere una descrizione estesa degli N-States (linguaggio di descrizione estesa), introduciamo:

- `{m}` insieme di missionari; `{m}L`, `{m}R`, `{m}b` sono i missionari rispettivamente a sinistra, a destra, e sulla barca;
- `{c}` insieme di cannibali; `{c}L`, `{c}R`, `{c}b` sono i cannibali rispettivamente a sinistra, a destra, e sulla barca

Definiamo inoltre, sempre per la descrizione estesa degli N-States, le variabili `M`, `ML`, `MR`, `Mb` che rappresentano rispettivamente `|{m}|`, `|{m}L|`, `|{m}R|`, `|{m}b|` . In modo analogo definiamo `C`, `CL`, `CR`, `Cb`: queste ultime definizioni sono utili per applicare poi gli operatori matematici (ad esempio `<`, `>`, `=`, `+`, `-`, ed altri).
Con la definizione appena data possiamo avere le seguenti azioni:

- `LBL`, `LBR`: per caricare la barca sia sulla riva sinistra (Load Boat Left - LBL), che su quella destra;
- `MBRL`, `MBLR`: per navigare il fiume (Move Boat from Right to Left - MBRL);
- `UBL`, `UBR`: per scaricare la barca (Unload Boat Left - UBL).

Ogni azione è definita formalmente, e a questo punto possono essere definite alcune regole per le azioni, per fare in modo che il numero dei missionari non sia mai inferiore al numero dei cannibali. Questa appena data è la formulazione F1 del problema dei cannibali e dei missionari, definita proprio come descritto all'inizio dell'articolo.

La parte riguardante la formalizzazione delle regole è molto delicata, in quanto inserire una regola ridondante fa destabilizzare l'intero sistema rendendolo molto alta la complessità degli N-States del problema. Esaminando questo aspetto, e notando che nella formulazione F2 ci sono molti dettagli che possiamo eliminare, nell'articolo è proposta una formulazione ristretta del problema (chiamata formulazione F3), la quale non fa altro che eliminare i dettagli ridondanti. Con quest'ultima formulazione si riduce il numero delle regole da rispettare, e degli N-States possibili. Questo si nota dal fatto che nella formulazione F2 lo stato iniziale è descritto da:

```
s0 = at(bk, pL), at(m1, pL), ..., at(mn, pL), at(c1, pL), ... , at(cn, pL)
```

Mentre nella formulazione F3 lo stato iniziale è descritto da:

```
s0 = (N, N, 1)
```

Nel quale il primo N indica il numero di missionari sulla riva sinistra, il secondo N indica il numero di cannibali sulla riva sinistra, e il numero 1 indica che la barca si trova sulla riva sinistra.

L'ultima formulazione del problema in questione è la formulazione F4, nella quale Amarel si concentra sullo scopo da perseguire: trovare la strada più corta per spostare cannibali e missionari sull'altra sponda del fiume (ammesso sia possibile). Si nota il problema è riconducibile a un tipico problema di derivazione e quindi nell'articolo si definisce un sistema di inferenza naturale basato sulle nozioni di "stati del problema" (P-States), e relativi movimenti (Relevan Moves). Una relazione del tipo:

```
S = (sa => sb)
```

è un esempio di P-State ed indica l'ottenibilità di sb a partire da sa. I movimenti relativi possono essere di due tipi:

- _Movimenti relativi non terminali_: Un movimento non terminale risulta essere l'applicazione di una regola di azione al lato sinistro di un P-State come ad esempio quella che consente di ottenere sb da sa tale che sb sia diverso da sa.
- _Movimenti relativi terminali_: Un movimento terminale è invece un movimento dove si presenta un'uguaglianza tra quello che è il lato sinistro e il lato destro di un P-State.

Una soluzione del problema nella formulazione F4 è una sequenza di P-State ottenuti dall'applicazione successiva di movimenti relativi non terminali, che ci portano dallo stato iniziale ad uno stato in cui non è più possibile applicare movimenti relativi non terminali. Ovviamente se tutti i possibili sviluppi da un P-State terminano, allora non esistono soluzione (cosa che non è vera per il problema dei missionari e dei cannibali), se invece ciò non accade vorrà dire che la soluzione è determinata dal percorso che non termina e che ci porta nello stato finale desiderato.

Questo articolo formula lo stesso problema in vari modi possibili, ma non per mostrare come sia possibile fare ciò, ma per evidenziare che lo stesso problema può essere risolto con più efficienza se è formulato in modo intelligente.
