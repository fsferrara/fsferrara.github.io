---
title: "C implementation of Heap sort algorithm"
date: 2010-07-10
tags:
  - programming
  - c
  - sort
---
L' heapsort è un algoritmo di ordinamento iterativo ed in-place proposto da Williams nel 1964, che si basa su strutture dati ausiliarie.

> L' heapsort per eseguire l'ordinamento, utilizza una struttura chiamata heap (mucchio); un heap è rappresentabile con un albero binario in cui tutti i nodi seguono una data proprietà, detta priorità. Esso è completo almeno fino al penultimo livello dell'albero e ad ogni nodo corrisponde uno ed un solo elemento.
>
> In uno heap decrescente (utilizzato per ordinare ad esempio un array in senso crescente) ogni nodo padre contiene un valore maggiore o uguale a quello dei suoi due figli diretti, di conseguenza risulterà maggiore anche di tutti i nodi che si trovano nel sottoalbero di cui esso è la radice; questo non implica affatto che nodi a profondità maggiore contengano valori minori di quelli a profondità minore.
>
> Quindi in ogni istante, in un heap decrescente, la radice contiene il valore maggiore.
>
> Questa struttura è molto usata, in particolare, per l'ordinamento di array.
>
> In questo caso si considera come radice l'elemento iniziale di indice 1; inoltre i figli di un nodo con indice j, avranno indice rispettivamente 2j, quello sinistro, 2j+1 quello destro.

<!-- truncate -->

> Per comprendere meglio il funzionamento dell'algoritmo è bene capire che gli elementi che si trovano nella seconda metà dell'array rappresenteranno foglie dello heap e quindi esse saranno già al loro posto giusto; non vi è infatti alcun elemento dopo di esse.
>
> ...tratto da wikipedia

## Implementazione Iterativa di Heap Sort

L'algoritmo che ordina in senso crescente inizia creando uno heap decrescente. Per ogni iterazione si copia la radice (primo elemento dell'array) in fondo all'array stesso, eseguendo uno scambio di elementi. L'algoritmo poi ricostruisce uno heap di n - 1 elementi spostando verso il basso la nuova radice, e ricomincia con un altro scambio (tra il primo elemento dell'array e quello in posizione n - 1), eseguendo un ciclo che considera array di dimensione progressivamente decrescente.

```c
#include <stdio.h>
#define MAX 20

int sinistro(int i)
{
 return 2*i+1;
}

int destro(int i)
{
 return 2*i+2;
}

int padre(int i)
{
 return (int)(i-1/2);
}

stampavettore(int *vettore,int n)
{
 int i;

 for(i=0 ; i<=n ; printf("%d ",vettore[i++]));
}

int riempivettore(int *vettore)
{
 int i;

 i=0;
 do {
 printf("inserire l'elemento %d dell'array('-1' per terminare): ",i+1);
 scanf("%d",vettore+i);
 } while (vettore[i++] != -1);
 return i-2;
}

void scambia(int *n1,int *n2)
{
 int temp;

 temp = *n1;
 *n1 = *n2;
 *n2 = temp;
}

void heapify(int *vettore, int i,int heapsize)
{
 int l,r,maggiore,violazione=1;

 while (violazione)
 {
 l = sinistro(i);
 r = destro(i);

 if ((l <= heapsize) && (vettore[l] > vettore[i]))
 {
 maggiore = l;
 }
 else
 {
 maggiore = i;
 }

 if ((r <= heapsize) && (vettore[r]>vettore[maggiore]))
 {
 maggiore = r;
 }
 if (maggiore != i)
 {
 scambia(&vettore[i],&vettore[maggiore]);
 i=maggiore;
 }
 else
 {
 violazione = 0;
 }
 }
}

void buildheap(int *vettore,int heapsize,int n)
{
 int i;

 for (i=(int)(n/2) ; i>=0 ; i--)
 {
 heapify(vettore,i,heapsize);
 }
}

heapsort(int *vettore,int n)
{
 int i,heapsize;

 heapsize=n;
 buildheap(vettore,heapsize,n);
 for (i=n ; i>0 ; i--)
 {
 scambia(&vettore[0],&vettore[i]);
 heapsize--;
 heapify(vettore,0,heapsize);
 }
}

main()
{
 int vettore[MAX];
 int n; /*numero di elementi*/

 n=riempivettore(vettore);

 heapsort(vettore,n);

 stampavettore(vettore,n);
}
```

Si può dimostrare che la complessità asintotica massima dell'heap sort è O(nlogn). Tuttavia, in generale (e soprattutto per array quasi ordinati) altri algoritmi con la medesima complessità asintotica, per esempio quick sort o merge sort, ottengono migliori prestazioni. Per array di piccole dimensioni è addirittura più veloce l'insertion sort nonostante abbia una complessità di O(n^2))
