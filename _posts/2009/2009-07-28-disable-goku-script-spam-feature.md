---
title: "Disable Goku Script spam feature"
date: 2009-07-28
tags:
  - internet
  - chat
  - irc
categories:
  - projects
---
Eliminare lo spam dal goku script

Il goku script è uno script per mIRC realizzato nell'anno 2001 e tutt'oggi è considerato uno degli script più completi in circolazione.

Purtroppo nella sua distribuzione sono stati lasciati attivi i messaggi di spam (messaggi usati per pubblicizzare lo script stesso).

Di questi messaggi ne sono inviati due ogni volta che si entra o esce da un canale di chat... quindi se entriamo in un canale inviamo un messaggio di spam alla prossima persona che entra in uno dei canali in cui ci troviamo. Qui il codice dello script per mIRC:

<!-- truncate -->

```shell
on 1:JOIN:#:{
 if ($nick == $me) {
   ...
 }
 else {
   if (%joinkiff == on) { notice $nick $spam.line %script | set %joinkiff off }
 }
 :fine
}

on 1:PART:#:{
 if (%partkiff == on) { notice $nick $spam.line %script | set %partkiff off }
 }
}
```

Per disattivarli possiamo intervenire in questo modo...

## Disattivare messaggi spam

Dobbiamo eliminare il meccanismo che setta ad **on** le variabili _%joinkiff_ e _%partkiff_. Questo si trova nel file_

".\system\remote\rgoku23.ini"_ (path relativo alla cartella in cui è installato lo script... di solito _C:\Programmi\Goku4\_)

alle righe 208 e 209 troviamo:

```
n206=  set %joinkiff on
n207=  set %partkiff on
```

modifichiamo queste due righe in:

```
n206=  set %joinkiff off
n207=  set %partkiff off
```

Questo è tutto... adesso il nostro goku script non spamma più :)

## Mirc Editor

La stessa modifica può essere effettuata usando il mIRC Editor, premendo **Alt+R** mentre mIRC è aperto. Basta selezionare il file rgoku23.ini (dal menu View) e cercare le righe da modificare.

La ricerca può essere fatta usando il Find Text (si trova sotto il menu Edit).

Buona Chat!!!
