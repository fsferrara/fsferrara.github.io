---
title: "Tuning Ubuntu Linux 9.04"
date: 2009-07-04
tags:
  - system administration
  - linux
  - tuning
  - ubuntu
categories:
  - system
---
Sulla rete ci sono parecchie guide sul come fare il tuning di ubuntu (cioè come alleggerire ubuntu) ma ho deciso di raggruppare il tutto in questa guida.

Ubuntu Linux è una distribuzione piuttosto semplice da usare ma ma stabile, poiché basata su debian, tuttavia ubuntu di default ha molti pacchetti e servizi che si possono tranquillamente disabilitare o adattare secondo le proprie esigenze, così facendo guadagneremo in spazio sull'hdd e qualche mb di ram, questo significa avere un sistema operativo più snello e più reattivo.

La presente guida è valida per la maggior parte degli utenti, ma ovviamente informatevi prima se un servizio\pacchetto non vi serve davvero... ad esempio chi possiede una stampante HP non dovrebbe disabilitare i relativi servizi per la sua gestione :-P

<!-- truncate -->

## Disabilitare Servizi

bene possiamo cominciare:

inanzitutto installiamo da synaptic il boot-up manager che permette di disabilitare alcuni servizi:

  * **anacron**, **atd**, **cron** - servizi di pianificazione, servono per gli aggiornamenti automatici dei pacchetti di Ubuntu, e altri compiti  un po' obsoleti,disattivabile.
  * **apport** - generatore di rapporti per i crash, che andranno salvati in /var/crash.
  * **brltty** - gestione di dispositivi braille
  * **bluetooth** - gestisce il bluetooth,se ne fate uso non disabilitatelo
  * **cupsys** - se non avete\usate una stampante connessa al PC, sappiate che potete disabilitarlo
  * **dhcp3-server** - se non fate da server dhcp in una rete potete disabilitarlo
  * **hotkey-setup** - se non usate tasti speciali (ad esempio inun notebook o nelle moderne tastiere multimediali) potete disabilitarlo
  * **laptop-mode** - si occupa della gestione ottimizzata per allungare la vita alla batteria in un portatile.
  * **phplip** - se non avete una stampante HP potete disabilitarlo
  * **powernowd*** - gestione dello scaling della CPU, di solito si usa sui portatili
  * **readahead*** - serve a precaricare in memoria file/librerie elencate in /etc/readahead/* se avete molta ram potete abilitarlo.
  * **rsync** - serve a copiare/sincronizzare file in remoto. difficilmente serve
  * **screen** -non so cosa sia ma non ci sono problemi a disabilitarlo (credo)

## Disinstallazione di Pacchetti

Questi sono pacchetti di che di solito sono installati di default ma che sono dinsintallabili (a seconda della necessità dell'utente). Vi ricordo di leggere prima la descrizione del pacchetto prima di eliminarlo dal sistema!!!

bluez (bluetooth)

hpijs e hplip* (stampanti HP)

ubuntu-docs (documentazione)

gnome-games (i giochi di ubuntu)

gnome-games-data (file contenenti giochi di ubuntu)openoffice.org-help-en-us (file d'aiuto per OpenOffice in inglese)

openoffice.org-help-en-gb (file d'aiuto per OpenOffice in inglese)

openoffice.org-thesaurus-en-au  (supporto lingua inglese/australiano per OpenOffice)

openoffice.org-help-it (file d'aiuto per OpenOffice in italiano)

gimp-help-common (file d'aiuto per GIMP in italiano)

example-content (contenuti d'esempio)

cups* (vari pacchetti relativi alla stampa, **attenzione** con questi!)

gnome-screensaver (gli screensaver)

xsane (consente gi gestire gli scanner)

## Rimuovere Mono

con questo comando potremmo liberarci di mono,pacchetto presente di default su ubuntu:

> <p>
>   **Mono è un progetto open sourceNovell (precedentemente da Ximian) per creare un insieme di strumenti compatibili con il Framework .NET, secondo gli standard ECMA coordinato da **
> </p>
>
> <ul>
>   <li>
>     ** è un programma di instant messaging per MSN.**
>   </li>
>   <li>
>     **GLyrics è un programma per la ricerca di testi musicali.**
>   </li>
>   <li>
>     **Gnome Do è un lanciatore per Linux (simile a Quicksilver).**
>   </li>
>   <li>
>     **iFolder 3 (della Novell) permette la condivisione di file attraverso molteplici computer e con altri utenti tramite peer-to-peer o attraverso server groupware di Novell.**
>   </li>
>   <li>
>     **Imendio Blam! è un aggregatore di news e feed RSS buono tra l'altro per la lettura di feed planet come Planet Gnome.**
>   </li>
>   <li>
>     **MonoDevelop è un IDE per la creazione di applicazioni Mono. Originariamente è stato un port di SharpDevelop per Gtk#, ma oggi viene sviluppato indipendentemente.**
>   </li>
>   <li>
>     **Muine è un riproduttore musicale con una interfaccia utente progettata per essere intuitiva, sviluppato da Jorn Baayen il quale ha già collaborato allo sviluppo di Rhythmbox.**
>   </li>
>   <li>
>     **Second Life, il mondo virtuale creato da Linden Lab, si dice stia per passare dall'utilizzo del Linden Scripting Language (LSL) a Mono, in un futuro prossimo.**
>   </li>
>   <li>
>     **SkyNET è una mappa stellare.**
>   </li>
>   <li>
>     **smuxi è un client IRC per utenti esperti scritto usando Gtk#/Gnome#, SmartIrc4net e Nini.**
>   </li>
>   <li>
>     **Tomboy è una applicazione desktop per annotazioni che utilizza un sistema di link simile al Wiki.**
>   </li>
> </ul>
>
> <p>
>   (tratto da wikipedia)
> </p>

**`sudo apt-get --purge remove libmono0`**

<h2>
  Ulteriore Tuning
</h2>

<p>
  in generale potete alleggerire il sistema con programmi meno pesanti ad esempio epiphany al posto di firefox,abi word al posto di opneoffice e via dicendo con questo comando eliminate "**evolution-exchange**" che è un pacchetto che si occupa di cercare il server ms-exchange che spesso non è utilizzato ma occupa ram:
</p>

**`sudo apt-get --purge remove evolution-exchange`**

<p>
  ora andate su servizi ed eliminate quelli che non usate o non vi interessano,posto una lista di quelli meno usati (sui dextop)
</p>

<p>
  bootlogd e stop-bootlogd  
 rsync  
 apmd  
 powernowd  
 acpi-support  
 laptop-mode  
 mdadm
</p>

un altro consiglio che posso darvi è dare un "apt-get install localepurge" per installare un programma da utilizzare tramite terminale che consente di eliminare le lingue non utilizzate

Ciao al prossimo articolo!!!
