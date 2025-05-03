---
title: "Loop-Unrolling Technique"
date: 2009-05-20
tags:
  - programming
  - algorithm
---
Lo "srotolamento" del ciclo consistente nel modificare il controllo del ciclo e nel replicare opportunamente le istruzioni all'interno del ciclo viene detto "tecnica di LOOP UNROLLING".

<!-- truncate -->

## VANTAGGI DEL LOOP UNROLLING

- Utilizzo ottimale dei processori con architettura pipelined

- Riduzione dell'overhead del ciclo di iterazione

- Riduzione del numero di trasferimenti fra i vari livelli memoria

- Aumento delle operazioni concorrenti

L'overhead del programma e il numero di trasferimenti di dati dai livelli più bassi di memoria ai registri Si riducono di un fattore proporzionale alla nuova lunghezza del ciclo (profondità dell'unrolling).

## SVANTAGGI DEL LOOP UNROLLING

- Aumento della memoria destinata al programma

- Perdita della generalità del codice*

* se si effettua l'unrolling a mano, mentre se si usa un compilatore per queste tecniche se ne risente di meno; ad esempio, il compilatore gcc supporta l'opzione "-unroll-all-loops" per effettuare automaticamente il loop unrolling.

## ESEMPIO DI APPLICAZIONE 1

I clicli:

for i=1 to n

a[i] = x(i) + i

endfor

for i=1 to n

b[i] = x(i) + i

endfor

Si possono unificare in:

for i=1 to n

a[i] = x(i) + i

b[i] = x(i) + i

endfor

## ESEMPIO DI APPLICAZIONE 2

Il ciclo:

for i=1 to n

if (i % 2) == 0

y(i)++;

else

y(i)-;

endfor

si puo' dividere in questo modo per evitare l'if:

for i=2 to n step 2

y(i)++;

endfor

for i=1 to n step 2

y(i)-;

endfor

## ESEMPIO DI APPLICAZIONE 2

Un ciclo del tipo:

for i=1 to n

y(i)=0

endfor

puo' essere modificato il passo del ciclo in questo modo:

for i=1 to n step 2

y(i)=0

y(i+1)=0

endfor
