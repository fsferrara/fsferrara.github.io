---
title: "Very brief introduction to Regular Expressions"
date: 2009-10-25
tags:
  - programming
  - regex
  - regular-expression
categories:
  - tools
---
Le espressioni regolari sono utili per descrivere la validità di valori, come ad esempio valori di attributi, dati caratteri, e qualsiasi tipo di valore esprimibile con un certo alfabeto.

Il concetto di espressione regolare è un formalismo importante utilizzato, in varie forme, in svariate applicazioni... ad esempio nei linguaggi di schema (come DTD di XML) per descrivere sequenze di elementi o caratteri. I linguaggi regolari sono utilizzati in molte altre aree dell'informatica oltre a XML, dall'elaborazione del testo e del linguaggio naturale alla verifica formale dei componenti hardware.

Potrebbe essere necessario, ad esempio, vincolare un valore 'data' in modo tale da rispettare il formato dd-mm-yyyy, ovvero sia composto da due cifre per il giorno, seguite da due per il mese e quattro per l'anno, tutto separato da un segno meno "-". Alternativamente possiamo specificare che un certo valore deve essere un numero intero.

Chiamiamo Σ un alfabeto consistente in un insieme di atomi, che tipicamente sono caratteri Unicode o nomi di elementi. Un'espressione regolare su Σ è costruita in base alle seguenti regole:

<!-- truncate -->

  * ogni atomo in Σ, preso da solo, è un espressione regolare;
  * se a e b sono espressioni regolari, allora lo sono anche le seguenti:
      * `a?`

      * `a*`

      * `a+`

      * `a b`

      * `a|b`

      * `(a)`

Gli operatori `?`, `,` e `+` hanno una precedenza superiore alla concatenazione (l'operatore vuoto o "giustapposizione"), che a sua volta ha una precedenza superiore a `|`. E' sempre possibile usare le parentesi per raggruppare sotto-espressioni, superando così le precedenze di default. L'espressione `ab\*|c`, in cui l'alfabeto `Σ` contiene a, b, e c, è interpretata come `(a(b\*))|c` e non `a(b*|c)`.

Una stringa finita di atomi di `Σ` può corrispondere o meno a una data espressione regolare a:

  * un atomo `r` appartenente a `Σ` corrisponde unicamente al singolo atomo `r`;
  * `a?` corrisponde ad `a` opzionalmente, ovvero a qualsiasi stringa corrisponda ad `a` più la stringa vuota;
  * `a*` corrisponde a zero o più ripetizioni delle stringhe che corrispondono ad `a`;
  * `a+` corrisponde ad una o più ripetizioni delle stringhe che corrispondono ad `a`;
  * `a b` corrisponde a ciò a cui corrisponde `a` seguito da ciò a cui corrisponde `b`;
  * `a|b` corrisponde all'unione delle corrispondenze di `a` e `b`;
  * `(a)` ha le stesse corrispondente di `a`.

L'espressione regolare `(a(b*))|c` corrisponde così a tutte le stringhe composte da una `a` seguite da zero o più `b`, oppure una singola `c` da sola.

Un linguaggio regolare è un insieme di stringhe che corrispondono a una qualche espressione regolare.

E' possibile definire un'espressione regolare `d` (che sta per digit, cifra) scrivendo:

```
0|1|2|3|4|5|6|7|8|9
```

laddove l'alfabeto è composto ad esempio da tutti caratteri Unicode. Possiamo partire da questa definizione per definire un'altra espressione regolare 'data' scrivendo dd-dd-dddd. Naturalmente quest'espressione corrisponde anche a stringhe come 88-26-9995, che non denotano date reali, ma con un po' più di sforzo è possibile catturare precisamente l'insieme di stringhe desiderato: in effetti su può usare un linguaggio regolare per gestire correttamente anche gli anni bisestili, ma allora le cose si fanno parecchie complicate!

La seguente espressione regolare descrive gli interi con un alfabeto composto dalle dieci cifre e dal segno meno:

```
0|-?(|1|2|3|4|5|6|7|8|9)(0|1|2|3|4|5|6|7|8|9)*
```

Secondo questa definizione, -42, 0, 117 sono accettabili, mentre 000, -0 e 3.14 non lo sono.

Adesso facciamo l'ultimo esempio, più complicato! In XHTML il contenuto di un elemento table dev'essere una sequenza che consiste in un elemento opzionale 'caption' seguito da un certo numero di elementi 'col' o alternativamente 'colgroup', i quali a loro volta sono opzionalmente seguiti da un elemento 'thead' e uno 'tfoot', per concludere almeno un elemento 'tbody' (o alternativamente 'tr'). Possiamo scrivere con un'espressione regolare:

```
caption? ( col* | colgroup* ) thead? tfoot? ( tbody+ | tr+ )
```

Esistono molte varianti delle espressioni regolari... ad esempio le regular expression del linguaggio perl: tuttavia la maggior parte di queste varianti si limita ad aggiungere zucchero sintattico alla notazione base che abbiamo appena presentato.

Un'estensione tipica sono gli intervalli di caratteri: [0-9], ad esempio, è una comoda abbreviazione per indicare le cifre al posto di `0|1|2|3|4|5|6|7|8|9`. In modo analogo `a{n,m}` con n e m numeri interi non negativi, denota da n ad m ripetizioni di a.

Questa è l'introduzione alle espressioni regolari; per lavorare efficientemente con un vero implementazione di queste espressioni richiede ulteriore studio.
