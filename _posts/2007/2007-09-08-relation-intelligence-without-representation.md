---
title: "Summary - Intelligence without representation"
date: 2007-09-08
tags:
  - history
  - computer-science
  - artificial-intelligence
  - ai
  - brooks
---

# Relazione sull'articolo: "Intelligence without representation"
Rodney A. Brooks

Il campo dell'intelligenza artificiale partì con l'intento di replicare l'intelligenza umana in una macchina, ma negli anni a seguire sono stati fatti pochi progressi. Nessuno parla di replicare l'intelligenza umana interamente, ma si sono specializzati vari campi come quello della rappresentazione della conoscenza, e la comprensione del linguaggio naturale; i sognatori specializzati nel campo dell'intelligenza artificiale sperano che in futuro tutti questi campi di studio si fondino creando così dei sistemi veramente intelligenti. Brooks non crede che l'intelligenza umana sia completamente replicabile poiché troppo complessa; bisognerebbe decomporla in vari sottomoduli, tutti interconnessi tra loro: Brooks usa proprio questo approccio per studiare creature semplici.

<!-- truncate -->

In questo articolo, risultato di una ricerca effettuata al M.I.T., Brooks illustra il suo approccio di costruire creature intelligenti non basate sulla rappresentazione, capaci di operare in modo autonomo (senza supervisione) nel proprio ambiente. Queste creature sono state costruite in modo incrementale, aggiungendo capacità nuove gradualmente; i vantaggi di questo approccio sono:

* Avere un sistema intelligente già dalle prime fasi;
* Concentrarsi solo sulla funzionalità (modulo) che si sta progettando;
* Semplicità di interconnettere i moduli tra loro mediante interfacce.

Brooks inoltre osserva come gli essere viventi sulla terra si sono evoluti. In particolare pone in risalto il fatto che per molto tempo la terra è stata popolata da organismi "poco" intelligenti, e solo ultimamente si sono evoluti. In un certo senso paragona lo studio dell'intelligenza artificiale a come si sono realmente evoluti gli esseri viventi; c'è un lungo tempo iniziale impiegato a costruire le fondamenta dell'intelligenza, susseguito da un'improvvisa evoluzione. Durante la storia dell'intelligenza artificiale, essa è stata capace di risolvere vari problemi con appositi algoritmi, ma il più delle volte sono stati dei "successi" negati all'AI perché ritenuti problemi non strettamente legati all'intelligenza artificiale. D'altro canto non si è mai parlato di gravi "fallimenti" nell'intelligenza artificiale.

Brooks pensa che i ricercatori di intelligenza artificiale si ingannano da soli non usando bene l'astrazione. Ad esempio una sedia può essere considerata come un semplice oggetto dove qualcuno di può sedere. Possono anche essere considerate la dimensione, il colore, la consistenza, e tantissime altre particolarità: la scelta delle caratteristiche "importanti" è data all'astrazione. Così che i sistemi di intelligenza artificiali hanno in input un insieme limitato di asserzioni che rappresentano il mondo esterno e lo stato interno; queste asserzioni però non riescono a descrivere il mondo nei minimi particolari, e il sistema intelligente lavora in un ambiente che non riproduce, dunque, il mondo reale alla perfezione. Il livello di dettaglio è dettato appunto dall'astrazione fatta dal costruttore del sistema.

## Intelligenza incrementale

Nel costruire le sue "creature", Brooks non si basa sul comportamento degli umani (anche se afferma che gli umani, assieme agli altri esseri viventi, sono interessanti oggetti di studio), ma da via libera alla sua immaginazione. In particolare definisce un approccio ingegneristico per costruire le sue creature tenendo presente quattro punti fondamentali:

1. Una creatura deve saper far fronte, in modo ragionevole, i cambiamenti del suo ambiente (dinamico);
2. Una creatura deve essere robusta rispetto al suo ambiente: un piccolo cambiamento del suo "mondo" non deve portare ad un totale collasso del suo comportamento;
3. Una creatura può avere più scopi da perseguire, ed in base alle circostanze sceglie quale perseguire;
4. Una creatura deve avere almeno uno scopo da perseguire.

Per rispettare questi quattro punti, c'è bisogno di decomporre un sistema complesso in più parti, e per fare ciò si possono seguire due strade: decomposizione in base alle funzioni, e decomposizione in base alle attività.

## Decomposizione in base alle funzioni

La decomposizione in base alle funzioni il tipo di decomposizione tradizionale, con un sistema centrale che prende in input una descrizione simbolica del mondo da moduli percettivi, e effettua azioni mediante moduli di azione. E' chiaro che il sistema centrale non è altro che un elaboratore simbolico. La costruzione dei moduli percettivi è quella del sistema centrale, e quella dei moduli di azione è fatta spesso da gruppi di ricerca diversi, spesso anche in diversi laboratori.

Il sistema centrale è a sua volta suddiviso in piccole parti, ad esempio "rappresentazione della conoscenza", learning", "ragionamento", ed altri. Un gruppo di lavoro lavoro ad uno di questi moduli specificando gli input e gli output richiesti dal modulo stesso.

Brooks non pensa che questo tipo di decomposizione sia ottimale per vari motivi, tra i più evidenti:

* C'è poca speranza per un modulo costruito indipendentemente di trovare posto in un sistema intelligente completo;
* L'azione scatenata da una percezione è connessa da una lunga catena di moduli interconnessi;
* Per testare l'effettivo funzionamento di un modulo abbiamo bisogno di tutti gli altri, e sarà difficile individuare malfunzionamenti.

## Decomposizione in base alle attività 

Un altro modo di decomporre un sistema complesso è in base alle attività; questo modo di operare non prevede distinzione tra moduli periferici e sistema centrale. Ogni modulo (anche chiamato "strato" - layer) collega direttamente una percezione all'azione: uno strato in effetti descrive un modello di interazione con il mondo esterno.

La maggior parte di questo articolo si basa proprio su questo approccio, in quanto ha il vantaggio di costruire sistemi (creature) in modo incrementale, aggiungendo nuovi strati agli strati già presenti. Si fa l'esempio di una creatura molto semplice, capace di evitare oggetti lanciati, e di non "inciampare" su ostacoli imprevisti. Una possibile scomposizione in attività di questa creatura è di avere due strati, uno che provvede ad evitare gli oggetti, ed un altro che riesce ad evitare ostacoli imprevisti. Il fatto di avere più stati fa si che variazioni del mondo esterno non portino ad un totale collasso del sistema.

La chiave di questo approccio è che non c'è una fonte centrale di rappresentazione! Ogni strato è indipendente e persegue il suo obiettivo, e nel complesso un sistema può avere più obiettivi. Un osservatore esterno vede che la creatura si comporta in modo coerente, ma in realtà il suo comportamento è il risultato di insieme di varie interazioni tra gli strati. Minsky da un simile descrizione di come è generato il comportamento degli umani.
Per costruire le sue creature Brooks usa una precisa metodologia della quale risalta i punti più importanti:

* Mai semplificare i dettagli del mondo: anche se in futuro si pensa di adattare la creatura nel mondo reale, ci può essere qualche strato che si basa sulle ipotesi semplificate;
* Testare sempre ogni strato accuratamente, e per un lungo periodo nel mondo reale degli umani;
* Quando aggiungiamo un nuovo strato, trovare un errore è più semplice; infatti i vecchi strati sono tutti ben testati, quindi l'errore si trova nel nuovo stato oppure nel modo in cui esso interagisce con gli altri.

## Limiti dell'approccio descritto

Seguendo questi punti chiave sono state costruite quattro creature (robot), che riescono ad operare nel mondo reale con gli umani. Queste creature hanno un massimo di tre strati; nelle simulazioni si è riusciti ad avere fino a sei strati paralleli, ma quanti strati si possono realmente avere? Il prossimo obiettivo è costruire una creatura capace di riconoscere le lattine vuote sulle scrivanie degli uffici, e riportarle in un deposito centrale. Per fare ciò si ha bisogno di molti strati: una possibile scomposizione è "evitare oggetti", "seguire le pareti", "riconoscere e usare le porte", "riconoscere le scrivanie", "riconoscere le lattine", ed altri. Ovviamente tutti questi strati devono essere coordinati senza l'ausilio di un sistema di controllo centrale.

Un altro punto interrogativo in questo approccio è riuscire ad avere sistemi con funzioni ad alto livello come l'apprendimento. Per adesso si è trovata una strada per aggiungere al sistema uno strato capace di "imparare dall'istinto" come ad esempio una farfalla riesce a distinguere un fiore dagli altri, ma è ancora poco.

## Conclusioni

La rappresentazione è stato il nodo centrale dell'intelligenza artificiale per almeno quindici anni; durante questa ricerca si è giunto ad un inaspettato risultato: nei modelli semplici di intelligenza la rappresentazione esplicita fa funzionare il sistema, ma non è l'astrazione giusta per costruire la parte portante del sistema intelligente. La decomposizione in base alle attività e l'approccio incrementale rappresentano il giusto approccio? I risultati si vedranno con il tempo e i risultati degli esperimenti nel mondo reale.
