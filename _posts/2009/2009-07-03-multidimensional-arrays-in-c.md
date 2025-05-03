---
title: "Multidimensional Arrays in C"
date: 2009-07-03
tags:
  - programming
  - array
  - c
  - pointers
---
Questo articolo tratta la gestione delle stringhe e, in generale, dei vettori multidimensionali nel linguaggio C.

## Allocazione di memoria del vettore

Sappiamo che nel linguaggio c dichiariamo un vettore con l'istruzione

int vett[n];

in questo modo creiamo un vettore chiamato vett di n elementi:

<!-- truncate -->

vett[0] , vett[1] , ... , vett[n-1]

Supponiamo, con n=5, di riempire il vettore in questo modo:

<table border="1">
  <tr>
    <td>
      10
    </td>

    <td>
      11
    </td>

    <td>
      12
    </td>

    <td>
      13
    </td>

    <td>
      14
    </td>
  </tr>
</table>

Risulterà che:

```c
vett[0] = 10 = *vett
 vett[1] = 11 = *vett+1
 vett[2] = 12 = *vett+2
 vett[3] = 13 = *vett+3
 vett[4] = 14 = *vett+4
```

Inoltre supponiamo di aver fatto girare al computer il programma,

avremo alcuni indirizzi se stampiamo:

804400008 = vett

804400012 = vett+1

804400016 = vett+2

804400020 = vett+3

804400024 = vett+4

## Passare il vettore ad una funzione

Ora che sappiamo come viene creato un vettore in memoria affrontiamo

il problema di passare il vettore nelle funzioni. Supponiamo la funzione:

```c
void funzione(int *vettore)
 {
 int i;

for (i=0 ; i<n ; i++)
 vettore[i] += 20;
 }
```

che aggiunge 20 ad ogni elemento del vettore. Quale sarà la chiamata giusta

da fare nel programma chiamante?

```c
main()
 {
 .
 .
 .
 funzione(vett);
 .
 .
 .
 }
```

Perchè passiamo "vett" e non "&vett"?

Il contenuto di "vett" non è altro che un indirizzo... il primo elemento del

vettore è "*vett" oppure "vett[0]".

Quindi con questa chiamata non facciamo altro che passare per valore alla

funzione un indirizzo che è proprio l'indirizzo del nostro vettore :)

Praticamente nella funzione viene dichiarato un puntatore ad intero chiamato

"vettore". La dichiarazione è

```c
int *vettore
```

Quindi in vettore mettiamo l'indirizzo che nell'esempio è 804400008.

All'intrno della funzione risulterà che:

vettore    = 804400008          // indirizzo

*vettore   = 10                 // contenuto di vett[0]

*vettore+1 = 11                 // contenuto di vett[1]

Questo è il motivo che nel linguaggio C non è obbligatorio definire la

dimensione del vettore!

## STAMPA SU VIDEO DI UN VETTORE v DI n ELEMENTI

```c
void StampaVettore(int n, float *v)
 {
 int i;

printf("\n Vettore = ( ");
 for ( i=0 ; i<n-1 ; i++ )
 printf("%.2f %s",v[i],", ");

printf("%.2f %s \n",v[n-1]," );");
 }
```

## STAMPA SU VIDEO DI UNA MATRICE M DI n RIGHE ED m COLONNE

```c
void StampaMatrice(int n, int m, float **M)
 {
 int i,j;

for (i=0;i<n;i++)
 {
 printf("\n");
 for (j=0;j<m;j++) printf("%.2f %s",M[i][j],"   ");
 }
 printf("\n");
 }
```
