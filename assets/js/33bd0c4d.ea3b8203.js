"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7268],{6176:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(74848),r=i(28453);const o={title:"C implementation of Quicksort algorithm",date:new Date("2009-07-07T00:00:00.000Z"),authors:["fsferrara"],tags:["programming","algorithm","c","sort"]},a=void 0,s={permalink:"/blog/2009/c-implementation-of-quicksort-algorithm",source:"@site/../blog/2009/c-implementation-of-quicksort-algorithm.md",title:"C implementation of Quicksort algorithm",description:"Quicksort \xe8 un ottimo algoritmo di ordinamento ricorsivo in place che, come merge sort, si basa sul paradigma divide et impera. La base del suo funzionamento \xe8 l'utilizzo ricorsivo della procedura partition: preso un elemento da una struttura dati (es. array) si pongono gli elementi minori a sinistra rispetto a questo e gli elementi maggiori a destra.",date:"2009-07-07T00:00:00.000Z",tags:[{inline:!1,label:"Programming",permalink:"/blog/tags/programming",description:"programming"},{inline:!0,label:"algorithm",permalink:"/blog/tags/algorithm"},{inline:!0,label:"c",permalink:"/blog/tags/c"},{inline:!0,label:"sort",permalink:"/blog/tags/sort"}],readingTime:2.12,hasTruncateMarker:!0,authors:[{name:"Saverio Ferrara",title:"Software Engineer",url:"https://github.com/fsferrara",page:{permalink:"/blog/authors/fsferrara"},socials:{x:"https://x.com/fsferrara",linkedin:"https://www.linkedin.com/in/fsferrara/",github:"https://github.com/fsferrara"},imageURL:"https://github.com/fsferrara.png",key:"fsferrara"}],frontMatter:{title:"C implementation of Quicksort algorithm",date:"2009-07-07T00:00:00.000Z",authors:["fsferrara"],tags:["programming","algorithm","c","sort"]},unlisted:!1,prevItem:{title:"Disable Goku Script spam feature",permalink:"/blog/2009/disable-goku-script-spam-feature"},nextItem:{title:"Tuning Ubuntu Linux 9.04",permalink:"/blog/2009/tuning-ubuntu-linux-9-04"}},l={authorsImageUrls:[void 0]},c=[{value:"Codice C Quicksort",id:"codice-c-quicksort",level:2},{value:"Caratteristiche del Quicksort",id:"caratteristiche-del-quicksort",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Quicksort \xe8 un ottimo algoritmo di ordinamento ricorsivo in place che, come merge sort, si basa sul paradigma divide et impera. La base del suo funzionamento \xe8 l'utilizzo ricorsivo della procedura partition: preso un elemento da una struttura dati (es. array) si pongono gli elementi minori a sinistra rispetto a questo e gli elementi maggiori a destra."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Il Quicksort, termine che tradotto letteralmente in italiano indica ordinamento rapido, \xe8 l'algoritmo di ordinamento che ha, in generale, prestazioni migliori tra quelli basati su confronto; \xe8 stato sottoposto a un'analisi matematica approfondita ed estremamente precisa, tanto che le sue prestazioni sono state comprese a fondo e il suo comportamento \xe8 stato descritto in modo molto accurato."}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"I risultati ottenuti in fase di analisi sono stati verificati sperimentalmente in modo esteso e l'algoritmo di base \xe8 stato migliorato al punto da diventare il metodo ideale per un gran numero di applicazioni pratiche."}),"\n",(0,n.jsx)(t.p,{children:"tratto da wikipedia"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Per la sua estrema facilit\xe0 \xe8 stato scelto in molte librerie di linguaggi, come il C, di implementare di base una funzione che effettui l'ordinamento del Quicksort... per\xf2 il nostro professore di programmazione vuole vedere il codice sorgente :-)"}),"\n",(0,n.jsx)(t.h2,{id:"codice-c-quicksort",children:"Codice C Quicksort"}),"\n",(0,n.jsx)(t.p,{children:"Eccolo qua:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'#include <stdio.h>\n#define MAX 20\n\nstampavettore(int *vettore,int n)\n{\n int i;\n\n for(i=0 ; i<=n ; printf("%d ",vettore[i++]));\n}\n\nint riempivettore(int *vettore)\n{\n int i;\n\n i=0;\n do {\n printf("inserire l\'elemento %d dell\'array(\'-1\' per terminare): ",i+1);\n scanf("%d",vettore+i);\n } while (vettore[i++] != -1);\n return i-2;\n}\n\nvoid scambia(int *n1,int *n2)\n{\n int temp;\n\n temp = *n1;\n *n1 = *n2;\n *n2 = temp;\n}\n\nint partiziona(int *vettore, int p, int r)\n{\n int x = vettore[p];\n int i = p-1;\n int j = r+1;\n int itera = 1;\n\n do {\n for(; vettore[--j] > x ;);\n for(; vettore[++i] < x ;);\n\n if (i < j)\n {\n scambia(&vettore[i],&vettore[j]);\n }\n else\n {\n itera = 0;\n }\n } while (itera);\n\nreturn j;\n}\n\nvoid quicksort(int *vettore, int p, int r)\n{\n int q;\n\n if (p < r)\n {\n q = partiziona(vettore,p,r);\n quicksort(vettore,p,q);\n quicksort(vettore,q+1,r);\n }\n}\n\nmain()\n{\n int vettore[MAX];\n int n; /*numero di elementi*/\n\n n=riempivettore(vettore);\n\n quicksort(vettore,0,n);\n\n stampavettore(vettore,n);\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"caratteristiche-del-quicksort",children:"Caratteristiche del Quicksort"}),"\n",(0,n.jsxs)("table",{border:"0",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Struttura dati"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"Variabile"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Caso pessimo temporalmente"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["\u0398(",(0,n.jsx)("em",{children:"n"}),(0,n.jsx)("sup",{children:"2"}),")"]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Caso ottimo temporalmente"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["\u0398(",(0,n.jsx)("em",{children:"n"}),"log",(0,n.jsx)("em",{children:"n"}),")"]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Caso medio temporalmente"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["\u0398(",(0,n.jsx)("em",{children:"n"}),"log",(0,n.jsx)("em",{children:"n"}),") confronti"]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Caso pessimo spazialmente"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"Dipende dalle implementazioni"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Ottimale"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"Spesso"})})]})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var n=i(96540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);