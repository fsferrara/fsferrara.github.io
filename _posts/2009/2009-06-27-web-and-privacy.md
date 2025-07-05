---
title: "Il Web e il problema della Privacy"
date: 2009-06-27
tags:
  - security and privacy
  - p3p
  - privacy
categories:
  - system
---
Tempo fa il problema della privacy non era sentito perché dovevamo fidarci solo di un insieme ristretto di persone; con Internet, e le moderne tecnologie, è diventato facilissimo raccogliere, scambiare, e trasferire informazione.

C'è perdita di controllo su _cosa è raccolto_ e soprattutto _come è utilizzato_.

Il problema della privacy può sembrare una sciocchezza, ma un esempio vi farà cambiare subito idea!

Quando un paziente è sfortunatamente ricoverato in ospedale i suoi dati sono a disposizione di: medico curante, medico specialistico, ospedale, infermieri, e farmacia... tutte persone con le quali il paziente deve condividere i suoi dati.

Cosa succede se uno di questi ruba i dati dei pazienti e li rivende illegalmente ad enti che ne faranno uso improprio???

**Si racconta (ed è una storia vera) che un funzionario di banca, in servizio in un comitato statale relativo alla sanità, ebbe accesso alla lista dei pazienti diagnosticata di tumore. Collegò i dati alla lista dei suoi clienti e annullò i prestiti.** Adesso vi è chiaro il problema della privatezza?

<!-- truncate -->

Purtroppo i dati medici non sono gli unici dati ad essere sensibili; il Garante della Privacy in Italia nella Legge 675/96 che regola la raccolta, mantenimento, e divulgazione di informazioni personali, impone di chiedere sempre il consenso prima di raccogliere dati e definisce Dato Sensibile nell'articolo 22, comma 1: "

_I dati personali idonei a rivelare l'origine razziale ed etnica, le convinzioni religiose, filosofiche o di altro genere, le opinioni politiche, l'adesione a partiti, sindacati, associazioni od organizzazioni a carattere religioso, filosofico, politico o sindacale, nonché i dati personali idonei a rivelare lo stato di salute e la vita sessuale, possono essere oggetto di trattamento solo con il consenso scritto dell'interessato e previa autorizzazione del Garante._"

## Anonimizzatori (Anonymous Surfers)

I dati sono sempre raccolti sul Web mentre navighiamo, sfruttando varie tecniche come Link referenziali, File di log, Cookies, ecc... non sto qui a raccontarvi i dettagli tecnici di queste tecniche (ma se siete interessati contattatemi pure ;-) ), ma vi presento subito un modo per evitare di lasciare traccie in giro: gli Anonymous Surfers!

Un Anonymous Surfer, o anonimizzatore, maschera il tuo indirizzo IP: infatti mentre navighi in Internet il tuo indirizzo ip e visibile a ogni server, e puoi essere rintracciato da chiunque. Navigando con un anonimizzatore invece non sarà il tuo indirizzo ip ad essere visibile, ma sarà visibile l'indirizzo dell'anonimizzatore stesso. A questo punto dobbiamo solo sperare che l'Anonymous Surfer non imbrogli e raccolga dati illegalmente!

Esempi di Anonymous Surfer sono http://anonymouse.org/ , http://proxify.co.uk/ , http://www.shadowsurf.com/ , e cercando su Google se ne trovano molti altri. Per usarli basta collegarci al sito e seguire le semplici istruzioni... spesso basta digitare l'indirizzo del Sito Web che vogliamo visitare.

### 1+1=2

Dopo questa semplice introduzione... sapete cosa deve fare uno sfortunato malato di epatite o tumore per cercare in rete informazioni sulla sua malattia? DEVE USARE UN COMPUTER PUBBLICO O ALMENO UTILIZZARE UN ANONIMIZZATORE!!!

Per assurdo un motore di ricerca (gestito in modo illegale) potrebbe incrociare i suoi log sul server con i dati di un ISP (Internet Service Provider, suo complice) per sostituire l'indirizzo IP nei log con l'intestatario della linea telefonica, in modo da sapere chi ha cercato cosa :-)

## Raccolta di Dati su Web

Purtroppo le persone sono ancora poco sensibili al problema della privacy, e rilasciano facilmente i propri dati sul Web utilizzando Social Network, o partecipando a questionari e sondaggi... quante volte hai trovato un "Religione: Ateo" oppure "Fumo: 3 pacchetti al giorno" su un social network???

La FTC (Federal Trade Commission) è un ente che ha identificato cinque punti principali che un sito web dovrebbe rispettare per garantire privacy dei suoi utenti (Notifica, Consenso, Accesso, Sicurezza, Implementazione... manca però la richiesta di Cancellazione dei dati). Oltre alla FTC sono nati i **Seal Program**; enti che garantiscono la protezione della privacy da parte di alcuni siti web... quindi quando su un sito troviamo il sigillo di TRUSTe (http://truste.org/), BBBOnLine, WebTrust, o altri, abbiamo una certa sicurezza che quel sito web non faccia uso improprio dei nostri dati personali.

## P3P - Platform for Privacy Preferences Project

P3P è un modo per specificare le nostre preferenze di privacy direttamente nel browser, in modo che il controllo sia fatto in automatico con i vari siti web in cui navighiamo. P3P lo ritroviamo in tutti i moderni browser, ad esempio in Internet Explorer. Altri browser come Firefox, Opera, Safari, ed altri supportano in modo equivalente P3P. Purtroppo queste interfacce grafiche non ci permettono molto dettaglio nella configurazione... avendo a disposizione un plugin avanzato per P3P, un utente può configurare il browser in modo da essere avvisato quando un sito che richiede i dati anagrafici dichiara che li utilizzerà anche per inviare materiale commerciale.

### Applicare P3P al proprio Sito Web

Un web master può applicare P3P al proprio sito web in quattro semplici passi:

1) Creare il file /w3c/p3p.xml in questo modo:

```xml
<META xmlns="http://www.w3.org/2002/01/P3Pv1">
 <POLICY-REFERENCES>
 <POLICY-REF about="http://www.nomesito.it/w3c/p3p_full.xml#FireTeamPolicy">
 <INCLUDE>/*</INCLUDE>
 <COOKIE-INCLUDE name="*" value="*" domain="*" path="*"/>
 </POLICY-REF>
 </POLICY-REFERENCES>
</META>
```

2) Creare il file /w3c/p3p_full.xml in questo modo:

```xml
<POLICIES xmlns="http://www.w3.org/2002/01/P3Pv1"> <!-- Versione P3P -->

<POLICY name="FireTeamPolicy" discuri="http://www.nomesito.it/w3c/privacy.html" opturi="http://www.nomesito.it/w3c/privacy.html">
<!-- discuri e opturi contengono una versione human readable della politica p3p -->

 <!-- Prevengo inconvenienti durante lo sviluppo della politica P3P -->
 <TEST />

 <!-- Nome del Sito e lista dei contatti -->
 <ENTITY>
 <DATA-GROUP>
 <DATA ref="#business.name">nomesito.it</DATA>
 <DATA ref="#business.contact-info.postal.street">Garibaldi, 110</DATA>
 <DATA ref="#business.contact-info.postal.city">Avellino</DATA>
 <DATA ref="#business.contact-info.postal.stateprov">AV</DATA>
 <DATA ref="#business.contact-info.postal.postalcode">83100</DATA>
 <DATA ref="#business.contact-info.postal.country">Italy</DATA>
 <DATA ref="#business.contact-info.online.email">nome@nomesito.it</DATA>
 <DATA ref="#business.contact-info.online.uri">www.nomesito.it</DATA>
 <DATA ref="#business.contact-info.telecom.telephone.intcode">+39</DATA>
 <DATA ref="#business.contact-info.telecom.telephone.loccode">0825</DATA>
 <DATA ref="#business.contact-info.telecom.telephone.number">120031</DATA>
 </DATA-GROUP>
 </ENTITY>

 <ACCESS><nonident/></ACCESS>

 <DISPUTES-GROUP>
 <DISPUTES resolution-type="independent"
 service="http://www.nomesito.it"
 short-description="nomesito.it">
 <IMG src="http://www.nomesito.it/w3c/logo.png" alt="Privacy Logo"/>
 <REMEDIES><correct/></REMEDIES>
 </DISPUTES>
 </DISPUTES-GROUP>

 <STATEMENT>
 <CONSEQUENCE>Our hosting service keep standard web server log</CONSEQUENCE>
 <PURPOSE><admin/><current/><develop/></PURPOSE>
 <RECIPIENT><ours/></RECIPIENT>
 <RETENTION><stated-purpose/></RETENTION>
 <DATA-GROUP>
 <DATA ref="#dynamic.clickstream"/>
 <DATA ref="#dynamic.http"/>
 </DATA-GROUP>
 </STATEMENT>

</POLICY>

</POLICIES>
```

3) Nell'esempio non sono illustrati particolari usi delle informazioni raccolte, in questo passo si dovrebbero rivedere i file p3p.xml e p3p_full.xml in base alle proprie esigenze. Inoltre si deve avere un'immagine a piacere w3c/logo.png, e un file (w3c/privacy.html) in cui è scritta la politica di privatezza in linguaggio naturale (cioè in Italiano!!!).

4) Copiare i file sul server e testarli con il validatore all'indirizzo http://www.w3.org/P3P/validator.html

Purtroppo P3P è solo un modo per negoziare automaticamente politiche sulla privacy, ma non ci assicura che effettivamente quel sito web rispetti quello che dichiara... però se il server ha una politica P3P e non la rispetta, allora è attaccabile legalmente. E' bene fidarsi sempre in presenza di un sigillo da parte di un Seal Program :-)

## Conclusioni

Il giusto equilibrio si può trovare con il buon senso, ricordando che ogni nostra pubblicazione su internet è di dominio pubblico... ricordando però che ci sono cose di cui andiamo orgogliosi e che potremo diffondere.

E' bene quindi dare poche informazioni su di noi, sia nelle pagine pubbliche disponibili sulla rete che a privati sconosciuti o conosciuti in rete. In particolare, gli esperti raccomandano ai minori di:

  * Evitare di condividere foto che mostrano il proprio aspetto
  * Non rivelare mai il proprio indirizzo fisico o numero di telefono
  * Non rivelare mai i propri dati anagrafici
  * Nascondere le proprie preferenze politiche, religiose, sessuali, o altro che potrebbe causarti problemi

La prima raccomandazione è in contrasto con la partecipazione a molte reti sociali... ma hai ancora voglia di scrivere sul tuo Social Network preferito?
