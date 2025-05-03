---
title: "Installation guide of Windows Server 2003"
date: 2009-06-20
tags:
  - system administration
  - tuning
  - windows server
---
Successore di Windows 2000, Microsoft Windows Server 2003 (Nome in codice Whistler Server, o anche Windows NT 5.2 o ancora Windows .NET Server) (2003) è una tappa della evoluzione della serie server dei sistemi operativi di Microsoft. Il lancio è avvenuto il 24 aprile 2003.

Windows Server 2003 è basato sulla provata stabilità di Windows 2000 Server e la compatibilità con altre caratteristiche di Windows XP.

Questa guida all'installazione e configurazione di Windows Server 2003 è rivolta ai sistemisti alle prime armi, oppure a chi vuole costrure il proprio server a casa :)

Sarà copera la parte della configurazione Hardware di un buon server; successivamente sarà indicato come configurare il Windows Server 2003 appena dopo l'installazione

<!-- truncate -->

## Installazione Windows Server 2003

Anche se stiamo in italia, in ambito server installare sempre la versione inglese del sistema... questo ci può creare problemi per la rappresentazione delle date, ma ci semplifica la gestione: installare sempre gli altri pacchetti in inglese!!!

## Hardware

Un pò di buon senso...

  * server web => molta RAM
  * server di file => molto spazio HD

Per piccole/medie imprese va bene un bi-processore. Per grossi server ci sono macchine a 4 processori: ITANIUM, OPTERON (AMD), XEON (INTEL)

Componenti interni fondamentali per il fault-tollerance:

- Alimentatore interno ridondande,

- Disk-array RAID:

- RAID 0, numero pari di dischi (mirroring)

- RAID 5, numero dispari di dischi + 1 di ripresa a caldo

Sono consigliabili minimo due interfacce di rete: 1 per la rete interna, e 1 per la rete esterna (internet).

Possibilemente schede di rete Gigabit

I moduli di RAM devono essere affidabili: **ECC** (Error Correction Code).

## Preparativi

Partizionare il disco... almeno una partizione per il sistema operativo e una per i dati.

Un partizionamento professionale prevede quattro partizioni: System, Swap File, User Data, RIS Partition

Notare che i cilindri esterni del disco sono quelli letti più velocemente... conviene posizionale in questi posti la partizione di swap. Inoltre è buona norma fare la partiziona del sistema operativo (System) quanto più piccola possibile.

## Configurazione di Base

Innanzitutto fare tutti gli aggiornamenti, installare le utility (bginfo, siw, ecc...), ed evitare sempre di usare Internet Explorer per scopi personali.

### Menu e Desktop

Mettere il menu classico, oppure dalle impostazioni avanzate del desktop permettere di visualizzare le classiche icone sul desktop.

### File temporanei

Bisogna unificare la cartella dei file temporanei, quindi:

1) Click destro su "My Computer" -> "Proprierties" -> tab "Advanced"

2) Modificare le variabili TMP e TEMP in modo che puntino alla stessa directory sul disco... ad esempio C:\Temp

### File di swap

Fissare le dimensioni del file di swap in modo che variazioni del file non portino ad un'eccessiva frammentazione. Ad esempio:

-> Initial size (MB): 2048

-> Maxium size (MB): 2048

### Effetti grafici

Eliminare gli effetti grafici:

-> Click destro sul Desktop -> "Proprierties" -> "Appareance ed Effects"

### Monitor

Configurare gli Hertz del monitor a 60Hz. In questo modo non avremmo problemi di visualizzazione nel caso operiamo da vecchi terminali.

### Aggiornamenti automatici

Per avere il totale controllo della macchina e' bene disabilitare gli aggiornamenti automatici, in modo che **Download the updates automatically and notify me when they are ready to be installed**.
