"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7365],{6478:(i,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var n=a(4848),o=a(8453);const t={title:"Very brief introduction to XML",date:new Date("2009-10-26T00:00:00.000Z"),authors:["fsferrara"],tags:["programming","data-structures","XML"]},r=void 0,l={permalink:"/blog/2009/very-brief-introduction-to-xml",source:"@site/../blog/2009/very-brief-introduction-to-xml.md",title:"Very brief introduction to XML",description:"Il linguaggio XML \xe8 diventato uno degli elementi fondamentali per la realizzazione di sistemi informativi, indipendentemente dalla tecnologia usata.",date:"2009-10-26T00:00:00.000Z",tags:[{inline:!1,label:"Programming",permalink:"/blog/tags/programming",description:"programming"},{inline:!0,label:"data-structures",permalink:"/blog/tags/data-structures"},{inline:!0,label:"XML",permalink:"/blog/tags/xml"}],readingTime:8.765,hasTruncateMarker:!0,authors:[{name:"Saverio Ferrara",title:"Software Engineer",url:"https://github.com/fsferrara",page:{permalink:"/blog/authors/fsferrara"},socials:{x:"https://x.com/fsferrara",linkedin:"https://www.linkedin.com/in/fsferrara/",github:"https://github.com/fsferrara"},imageURL:"https://github.com/fsferrara.png",key:"fsferrara"}],frontMatter:{title:"Very brief introduction to XML",date:"2009-10-26T00:00:00.000Z",authors:["fsferrara"],tags:["programming","data-structures","XML"]},unlisted:!1,prevItem:{title:"Describing media with XML and MPEG-7",permalink:"/blog/2009/describing-media-with-xml-and-mpeg-7"},nextItem:{title:"Very brief introduction to Regular Expressions",permalink:"/blog/2009/very-brief-introduction-to-regular-expressions"}},s={authorsImageUrls:[void 0]},d=[{value:"Storia",id:"storia",level:2},{value:"Il Linguaggio",id:"il-linguaggio",level:2},{value:"La Tecnologia XML",id:"la-tecnologia-xml",level:2},{value:"Le Applicazioni XML",id:"le-applicazioni-xml",level:2}];function c(i){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"Il linguaggio XML \xe8 diventato uno degli elementi fondamentali per la realizzazione di sistemi informativi, indipendentemente dalla tecnologia usata."}),"\n",(0,n.jsx)(e.h2,{id:"storia",children:"Storia"}),"\n",(0,n.jsx)(e.p,{children:"Il World Wide Web Consortium (W3C), in seguito alla guerra dei browser fu costretto a seguire le individuali estensioni al linguaggio HTML. Dovette scegliere quali caratteristiche standardizzare e quali lasciare fuori dalle specifiche ufficiali dell'HTML. Fu in questo contesto che inizi\xf2 a delinearsi la necessit\xe0 di un linguaggio di markup che desse maggiore libert\xe0 nella definizione dei tag, pur rimanendo in uno standard."}),"\n",(0,n.jsx)(e.p,{children:"Il \"progetto XML\", che ebbe inizio alla fine degli anni '80 nell'ambito della SGML Activity del W3C, suscit\xf2 un cos\xec forte interesse a tal punto che la W3C cre\xf2 un gruppo di lavoro, chiamato XML Working Group, composto da esperti mondiali delle tecnologie SGML, ed una commissione, XML Editorial Review Board, deputata alla redazione delle specifiche del progetto."}),"\n",(0,n.jsx)(e.p,{children:"Nel febbraio del 1998 le specifiche divennero una raccomandazione ufficiale con il nome di Extensible Mark-up Language, versione 1.0. Ben presto ci si accorse che XML non era solo limitato al contesto web, ma era qualcosa di pi\xf9: uno strumento che permetteva di essere utilizzato nei pi\xf9 diversi contesti, dalla definizione della struttura di documenti, allo scambio delle informazioni tra sistemi diversi, dalla rappresentazione di immagini alla definizione di formati di dati."}),"\n",(0,n.jsx)(e.h2,{id:"il-linguaggio",children:"Il Linguaggio"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Definizione XML"}),": (acronimo di eXtensible Markup Language) \xe8 un metalinguaggio di markup, ovvero un linguaggio marcatore che definisce un meccanismo sintattico che consente di estendere o controllare il significato di altri linguaggi marcatori. Costituisce il tentativo di produrre una versione semplificata di SGML che consenta di definire in modo semplice nuovi linguaggi di markup"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:'Quindi quello che si fa con XML \xe8 definire/progettare dei propri "Linguaggi XML" (cio\xe8 un linguaggio basato su XML); ad esempio possiamo scegliere di codificare in XML i risultati di una giornata del campionato di calcio:'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-xml",children:'<partite giornata="3\xb0">\n <partita numero="1">\n  <squadra>Napoli</squadra>\n  <squadra>Juventus</squadra>\n  <risultato>3-0</risultato>\n </partita>\n  <partita numero="2">\n  <squadra>Roma</squadra>\n  <squadra>Lazio</squadra>\n  <risultato>2-2</risultato>\n </partita>\n</partite>\n'})}),"\n",(0,n.jsx)(e.p,{children:'Il processo di sviluppo di un linguaggio XML \xe8 detto "XMLificazione": ossia la scelta dei tag (partite, partita, squadra, risultato), degli attributi (giornata, numero), e della loro struttura.'}),"\n",(0,n.jsx)(e.p,{children:"Ci possono essere per\xf2 altri linguaggi XML che usano i nostri stessi tag, e mischiare pi\xf9 linguaggi XML con nomi dei tag uguali pu\xf2 portare a confusione, per questo possiamo introdurre un namespace per i nostri nomi."}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Namespace XML"}),": Un namespace \xe8 una collezione di nomi di entit\xe0, definite dal programmatore, omogeneamente usate in uno o pi\xf9 file sorgente. Lo scopo dei namespace \xe8 quello di evitare confusione ed equivoci nel caso siano necessarie molte entit\xe0 con nomi simili, fornendo il modo di raggruppare i nomi per categorie.Nel linguaggio XML i namespaces sono definiti esplicitamente."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Nel nostro caso la prima riga diventer\xe0:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-xml",children:'<partite giornata="3\xb0" xmlns="http://www.fireteam.it">\n'})}),"\n",(0,n.jsxs)(e.p,{children:["In questo modo indichiamo che il tag 'partite' e tutto il suo contenuto appartengono al namespace '",(0,n.jsx)(e.a,{href:"http://www.fireteam.it",children:"http://www.fireteam.it"}),"' di default."]}),"\n",(0,n.jsx)(e.p,{children:"Fin qui XML sembra la pi\xf9 banale delle tecnologie, eppure ha avuto cos\xec tanto successo... allora perch\xe9 \xe8 cos\xec importante?"}),"\n",(0,n.jsx)(e.h2,{id:"la-tecnologia-xml",children:"La Tecnologia XML"}),"\n",(0,n.jsx)(e.p,{children:"Il primo motivo \xe8 che tutti i file XML sono codificati in UNICODE (i famosi UTF-8 UTF-16, ed UTF-32), e sono stati eliminati in questo modo molto dei fastidi che affligevano i formati testuali."}),"\n",(0,n.jsx)(e.p,{children:"Il secondo motivo \xe8 che con XML si pu\xf2 rappresentare l'informazione in modo semplice, mantenendo un minimo di struttura; non a caso l'informazione codificata in XML \xe8 detta semistrutturata, che \xe8 il compromesso dalla completa strutturazione (come ad esempio la struttura rigida di uno schema di un database relazionale) e l'assenza di struttura (schema-less, ossia il testo puro)."}),"\n",(0,n.jsx)(e.p,{children:"Il terzo motivo, che ritengo pi\xf9 importante, \xe8 che attorno a questo semplice linguaggio di markup sono state definite parecchie tecnologie utili a risparmiare lavoro durante il trattamento dei dati. Queste sono:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Xpath"}),": \xe8 un linguaggio parte della famiglia XML che permette di individuare i nodi all'interno di un documento XML."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Linguaggi Schema"}),': un linguaggio di schema \xe8 un linguaggio formale per esprimere "schemi". Uno schema \xe8 la definizione formale della sintassi di un linguaggio XML, ovvero una famiglia di documenti XML.']}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"DTD"}),": Il linguaggio DTD \xe8 utile a definire schemi DTD per un particolare linguaggio XML. DTD \xe8 semplice, con un potere espressivo limitato, non \xe8 autoesplicativo poich\xe9 non usa una notazione XML (\xe8 descritto da una grammatica BNF), e tra i tanti difetti non supporta i namespace in quanto il linguaggio DTD stato definito \xe8 stato definito prima dei namespace."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Schema"}),": \xe8 un linguaggio di schema nato per sostituire DTD. E' pi\xf9 espressivo, \xe8 quasi autoesplicativo (\xe8 scritto in XML e la sua sintassi \xe8 definibile con XML schema stesso, ma non si riescono a catturare tutti gli aspetti sintattici del linguaggio). Inoltre introduce i tipi di dato e permette di crearne nuovi, in modo da riuscire a fare buoni controlli sui contenuti dei file XML."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"XSL"}),": acronimo di eXtensible Stylesheet Language, \xe8 il linguaggio di descrizione dei fogli di stile per i documenti in formato XML. Com'\xe8 noto, lo standard XML prevede che i contenuti di un documento siano separati dalla formattazione della pagina in cui verranno pubblicati."]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"XSLT"}),": XSL Transformations - il linguaggio di trasformazione dell'XML. Fa uso di XPath per accedere alle parti di un documento XML. La trasformazione \xe8 fatta da un modulo detto Processore XSLT, come ad esempio quello incluso nei browser."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"XSL-FO"}),": XSL Formatting Objects - usato per l'applicazione degli stili e del modo di apparizione a un documento XML."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"XQuery"}),": abbrevazione per XML Query Language, \xe8 un linguaggio di programmazione specificato dal W3C e destinato ad interrogare documenti e basi di dati XML."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Qui \xe8 d'obbligo soffermarsi per discutere sull'utilit\xe0 di un linguaggio di interrogazione XML. Un'ambiziosa applicazione di XML ha come scopo la generalizzazione del tradizionale modello delle basi di dati relazionali. Da tempo si sta cercando un'alternativa ai vecchissimi database relazionali, e si \xe8 provato in svariate direzioni... database gerarchici, database multidimensionali, database ad oggetti, ecc."}),"\n",(0,n.jsx)(e.p,{children:"XML \xe8 un alternativa allettane! Oggi si scrive molto in XML, specialmente sul web dove vi sono pagine XHTML (che sono XML), e l'idea di avere un database XML perfettamente integrabile con tutti gli altri nostri dati non \xe8 affatto male... il World Wide Web pu\xf2 cos\xec diventare una gigantesca base di dati."}),"\n",(0,n.jsx)(e.p,{children:"XQuery \xe8 un linguaggio per interrogare file XML, allo stesso modo in cui SQL interroga base di dati relazionali... ed \xe8 qui che una collezione di file XML \xe8 spesso chiamata Database XML."}),"\n",(0,n.jsx)(e.p,{children:"E come tutti i linguaggi di interrogazione che si rispettano anche per XQuery c'\xe8 un algebra... XML Query Algebra definita dal W3C. In realt\xe0 i lavori sono ancora in progresso e ci sono varie proposte di algebra:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Algebra per linguaggi di interrogazione XML"}),": sono stati proposti svariati linguaggi di interrogazione XML, come XQuery, XML-QL, ed altri; quindi c'\xe8 un interesse crescente verso l'interrogazione di file XML. Non ancora per\xf2 \xe8 stata definita un'algebra comune per questi linguaggi. Un algebra formale \xe8 un passo obbligato per avere una buona ottimizzazione delle query.","\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"TAX"}),': E\' una proposta di algebra non standard, utilizzata da un motore di database XML chiamato "Timber XML". TAX sta per "Tree Algebra for XML", ed \xe8 una proposta interessante perch\xe9 usa un modello di dati dove i documenti XML sono effettivamente visti come alberi, quindi le varie operazioni (Selezione, Proiezione, Prodotto, Set, Raggruppamento, Aggregazione, Renaming, Reordering, Copy-and-Paste, Cancellazione, Inserimento) risultano definite in modo naturale.']}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"XML Query Algebra"}),': anche chiamata "The Algebra" \xe8 la proposta di standardizzazione da parte del W3C. Questa algebra, che sembra assomigliare ad un linguaggio di programmazione dichiarativo, non definisce le operazioni con operatori ad HOC, ma riesce a ricavare le consuete operazioni mediante l\'uso di cicli for, assegnazioni di variabili, costrutti condizionali, ed altro. Inoltre i tipi di dato sono molto importanti, e sono definiti per ogni espressione. Una volta tradotta una query, la sua ottimizzazione sfrutta delle regole di inferenza logica; un metodo del tutto innovativo.']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"E quando queste tecnologie non riescono a soddisfare le nostre richieste, entra in gioco la solita programmazione:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Programmazione XML"}),": Bench\xe8 gli strumenti XML (Schema, XSLT, XQuery, XPath, ecc...) ci permettono di fare molti tipi di elaborazione, spesso c'\xe8 la necessita di manipolare file XML da linguaggi di programmazione di uso generale come ad esempio Java."]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"DOM"}),": Il Document Object Model (DOM) \xe8 una forma di rappresentazione dei documenti strutturati come modello orientato agli oggetti. DOM definisce un API per accedere e manipolare file XML comune a diversi linguaggi."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"SAX"}),": (Simple API for XML) \xe8 un'API per numerosi linguaggi di programmazione che permette di leggere ed elaborare dei documenti XML. Contrariarmente al DOM, il SAX processa i documenti linea per linea. Il flusso di dati XML \xe8 unidirezionale, cos\xec che dati a cui si \xe8 acceduto in precedenza non possono essere riletti senza la rielaborazione dell'intero documento."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"JDOM"}),": JDom \xe8 un API per accedere ed elaborare documenti XMl specifica per il linguaggio di programmaziopne Java, che (rispettando il principio del 80/20) permette di sviluppare con semplicit\xe0 l'80% delle applicazione, mentre richiede una soluzione ad HOC per il restante 20%... cio\xe8 JDom sacrifica parte della generalit\xe0 per dar miglior supporto alle applicazioni pi\xf9 comuni."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"XML Retrieval"}),": L'information retrieval (IR) \xe8 la disciplina che studia le tecniche utilizzate per il recupero mirato dell'informazione in formato elettronico."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"le-applicazioni-xml",children:"Le Applicazioni XML"}),"\n",(0,n.jsx)(e.p,{children:"XML \xe8 oggi una tecnologia matura ed utilizzata negli ambiti pi\xf9 disparati... basta provare a salvare un documento di testo scritto con il famosissimo word processor OpenOffice, rinominare questo file .zip, e provare ad estrarre il contenuto: dentro troveremo il nostro documento descritto in XML!!!"}),"\n",(0,n.jsx)(e.p,{children:"Un altro esempio \xe8 SVG, lo standard aperto per la grafica vettoriale che punta a sostituire la tecnologia 'flash' sul web. Un file .svg \xe8 interamente scritto in XML, tant'\xe8 vero che si pu\xf2 aprire senza problemi con un qualsiasi editor di testo."}),"\n",(0,n.jsx)(e.p,{children:"Alcuni linguaggi XML hanno avuto particolare successo come XHTML, CML (Chemical Markup Language), WML (usato nella tecnologia WAP dei cellulari), RSS ed altri... in particolare Mpeg7:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Mpeg-7"}),": MPEG-7 \xe8 uno standard nato per codificare i contenuti multimediali; non \xe8 uno standard nato per codificare flussi audio o video come, ad esempio, MPEG-1 MPEG-2 o MPEG-4 ma per definire metadati sui dati multimediali.La codifica utilizza l'XML per memorizzare dei metadati che utilizzano a loro volta il timecode del filmato permettendo di sincronizzare i flussi multimediali con particolari eventi. Per esempio, permette di sincronizzare un filmato con i suoi sottotitoli o un video con il testo della canzone."]}),"\n"]})]})}function u(i={}){const{wrapper:e}={...(0,o.R)(),...i.components};return e?(0,n.jsx)(e,{...i,children:(0,n.jsx)(c,{...i})}):c(i)}},8453:(i,e,a)=>{a.d(e,{R:()=>r,x:()=>l});var n=a(6540);const o={},t=n.createContext(o);function r(i){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function l(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(o):i.components||o:r(i.components),n.createElement(t.Provider,{value:e},i.children)}}}]);