---
title: "Describing media with XML and MPEG-7"
date: 2009-10-27
tags:
  - programming
  - mpeg-7
  - xml
---

  La diffusione delle connessioni a banda larga ha agevolato la diffusione di audio e video via web: un esempio eclatante è YouTube! Ma riuscire a trovare un video particolare tra la grossa quantità di dati multimediali sul web è un compito arduo: il valore del dato multimediale dipende da quanto è agevole trovarlo, gestirlo, ed accedere.


<p>
  Per gestire questa grossa quantità di dati multimediali, sia da parte degli utenti, sia da parte dei sistemi automatici, ci aiuta Mpeg-7: uno standard nato per codificare i contenuti multimediali attraverso la definizione di metadati sui dati multimediali.
</p>

<p>
  I precedenti standard Mpeg-1 (1992), Mpeg-2 (1994), e Mpeg-4 (1999) riguardano la codifica del video. Nel 2001 è stato definito Mpeg-7 che non definisce il modo di codificare un video, ma riguarda la sua metataggatura attraverso un linguaggio XML.  
 Perché 7? Mpeg-7 permette di definire metadati sui video codificati con Mpeg 1, 2, e 4. Siccome 4+2+1=7, nasce il nome Mpeg-7.
</p>

<!-- truncate -->

<p>
  Notiamo come non è stato nominato Mpeg-3, lo standard per i famosissimi mp3 :) . In realtà questo standard non esiste, ma il nome Mpeg-3 è usato per riferirsi alla parte audio di Mpeg-2.
</p>

## Metadati

<p>
  I metadati associati ad un video permettono di descrivere cosa c'è nel video. Mpeg-7 permette descrizioni sia a basso livello (caratteristiche del segnale, come il colore di un oggetto), sia ad alto livello (informazioni semantiche, come la scena di un goal in una partita di calcio).  
 Un esempio di file XML in formato Mpeg-7 contenente la descrizione di un video di una notizia è:
</p>

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
 <!--Metadati generati automaticamente dall'applicazione-->
<Mpeg7 xmlns="urn:mpeg:mpeg7:schema:2001" xmlns:mpeg7="urn:mpeg:mpeg7:schema:2001"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="urn:mpeg:mpeg7:schema:2001 Mpeg7-2001.xsd">
 <Description xsi:type="ContentEntityType">
 <MultimediaContent xsi:type="VideoType">
 <Video>
 <MediaInformation>
 <MediaProfile>
 <MediaFormat>
 <Content href="MPEG7ContentCS" />
 <FileFormat href="urn:mpeg:mpeg7:cs:FileFormatCS:2001:3">
 <Name>mpeg</Name>
 </FileFormat>
 <FileSize>17333073</FileSize>
 <VisualCoding>
 <Format colorDomain="color"
 href="urn:mpeg:mpeg7:cs:VisualCodingFormatCS:2001:1" />
 <Frame height="576" rate="8000" width="720" />
 </VisualCoding>
 </MediaFormat>
 <MediaInstance id="v20090201_video_15213221">
 <InstanceIdentifier />
 <MediaLocator>
 <MediaUri>20090201_video_15213221.mov</MediaUri>
 </MediaLocator>
 </MediaInstance>
 </MediaProfile>
 </MediaInformation>
 <CreationInformation>
 <Creation>
 <Title>Obama: presto un piano per famiglie Usa per tagliare costi
 mutui</Title>
 <Abstract>
 <FreeTextAnnotation>
 Presidente cerca arginare effetti devastante crisi economica
 </FreeTextAnnotation>
 <StructuredAnnotation>
 <When>
 <Name>1 Feb 2009</Name>
 </When>
 </StructuredAnnotation>
 </Abstract>
 <Creator>
 <Role href="urn:mpeg:mpeg7:cs:RoleCS:2001:producer">
 <Name>Red</Name>
 </Role>
 <Agent xsi:type="OrganizationType">
 <Name>Apcom</Name>
 </Agent>
 </Creator>
 <CreationCoordinates>
 <Location>
 <Name>milano</Name>
 </Location>
 <Date>
 <TimePoint>2009-02-01T15:21:32</TimePoint>
 </Date>
 </CreationCoordinates>
 <CopyrightString>TMNews</CopyrightString>
 </Creation>
 <Classification>
 <Genre href="urn:mpeg:TVAnytime_v0.1ContentCS:3.14">
 <Name>est</Name>
 </Genre>
 <MediaReview>
 <Rating>
 <RatingValue>0.0</RatingValue>
 <RatingScheme best="5" style="higherBetter" worst="0">
 <Name>Overall</Name>
 </RatingScheme>
 </Rating>
 </MediaReview>
 </Classification>
 <RelatedMaterial>
 <MediaLocator>
 <MediaUri>20090201_video_17483840.mov</MediaUri>
 </MediaLocator>
 </RelatedMaterial>
 <RelatedMaterial>
 <MediaLocator>
 <MediaUri>20090201_video_18024720.mov</MediaUri>
 </MediaLocator>
 </RelatedMaterial>
 <RelatedMaterial>
 <MediaLocator>
 <MediaUri>20090201_video_18094945.mov</MediaUri>
 </MediaLocator>
 </RelatedMaterial>
 <RelatedMaterial>
 <MediaLocator>
 <MediaUri>20090201_video_18153193.mov</MediaUri>
 </MediaLocator>
 </RelatedMaterial>
 <RelatedMaterial>
 <MediaLocator>
 <MediaUri>20090202_video_13033231.mov</MediaUri>
 </MediaLocator>
 </RelatedMaterial>
 <RelatedMaterial>
 <MediaLocator>
 <MediaUri>20090202_video_13094131.mov</MediaUri>
 </MediaLocator>
 </RelatedMaterial>
 <RelatedMaterial>
 <MediaLocator>
 <MediaUri>20090202_video_16491593.mov</MediaUri>
 </MediaLocator>
 </RelatedMaterial>
 <RelatedMaterial>
 <MediaLocator>
 <MediaUri>20090202_video_17042673.mov</MediaUri>
 </MediaLocator>
 </RelatedMaterial>
 </CreationInformation>
 <UsageInformation>
 <Availability id="onDemand">
 <InstanceRef href="MPEG7PublicationTypeCS:4" />
 <Dissemination>
 <Format href="MPEG7PublicationTypeCS:4">
 <Name>Internet</Name>
 </Format>
 <Location>
 <Region>it</Region>
 </Location>
 </Dissemination>
 </Availability>
 <UsageRecord>
 <AvailabilityRef idref="onDemand" />
 <Audience>0</Audience>
 </UsageRecord>
 </UsageInformation>
 <MediaTime>
 <MediaTimePoint>T00:00:00</MediaTimePoint>
 <MediaDuration>PT0H0M29S</MediaDuration>
 </MediaTime>
 </Video>
 </MultimediaContent>
 <MultimediaContent xsi:type="ImageType">
 <Image>
 <MediaInformation>
 <MediaProfile>
 <MediaFormat>
 <Content href="urn:mpeg:mpeg7:cs:ContentCS:2001:2">
 <Name>visual</Name>
 </Content>
 <FileFormat href="urn:mpeg:mpeg7:cs:FileFormatCS:2001:3">
 <Name>JPEG2000</Name>
 </FileFormat>
 <FileSize>12014</FileSize>
 <VisualCoding>
 <Format colorDomain="binary"
 href="urn:mpeg:mpeg7:cs:VisualCodingFormatCS:2001:1">
 <Name>JPEG2000</Name>
 </Format>
 <Frame height="288" rate="0" width="360" />
 </VisualCoding>
 </MediaFormat>
 <MediaInstance id="i20090201_video_15213221">
 <InstanceIdentifier />
 <MediaLocator>
 <MediaUri>20090201_video_15213221.jpg</MediaUri>
 </MediaLocator>
 </MediaInstance>
 </MediaProfile>
 </MediaInformation>
 <CreationInformation>
 <Creation>
 <Title>
 Foto
</Title>
 <Creator>
 <Role href="urn:mpeg:mpeg7:cs:RoleCS:AUTHOR">
 <Name>Red</Name>
 </Role>
 <Agent xsi:type="OrganizationType">
 <Name>MPEG</Name>
 </Agent>
 </Creator>
 </Creation>
 </CreationInformation>
 </Image>
 </MultimediaContent>
 </Description>
</Mpeg7>
```

<p>
  Mpeg-7 è un linguaggio XML, ossia usa XML per definire i metadati. In realtà un file Mpeg-7 non è altro che un file '.xml' associato ad uno o più oggetti multimediali. Quindi è possibile memorizzare i metadati indipendentemente dai video... ad esempio un possibile uso di Mpeg-7, è la costruzione di un database multimediale!
</p>

## Componenti di Mpeg-7

<p>
  Lo standard Mpeg-7 è composta da quattro elementi fondamentali:
</p>

  * <p>
      Description Tools
    </p>

  * <p>
      Descriptor
    </p>

  * <p>
      Description Scheme
    </p>

  * <p>
      DDL – Description Definition  
 Language
    </p>

  * <p>
      System Tool
    </p>

<p>
  I metadati di un oggetto multimediale saranno descritti usando i 'Description Tools'.  
 I 'Description Tools' a loro volta fanno uso del 'Description Definition Language' (DDL) che è una estensione di XML Schema proprio per Mpeg-7.  
 I 'System Tool' non riguardano la definizione di metadati, ma la loro rappresentazione e trasmissione. Quindi il file XML è prodotto utilizzando solo 'Description Tools' e 'DDL', e poi questo file XML può essere diffuso utilizzando le tecniche dei 'System Tools'.
</p>

### Description Definition Language (DDL)

<p>
  Il DDL è basato su XML Schema Language e ne rappresenta una sorta di estensione orientata al multimedia. In particolare XML Schema non è stato progettato per le descrizioni di contenuti audio/video e necessita quindi di tipi di dato per array e matrici, e tipo di dato per gestire il tempo (BasicTimePoint e BasicDuration).
</p>

<p>
  Ad esempio la definizione di TimeType è:
</p>

```xml
<!-- Definition of Time datatype -->
<complexType name="TimeType">
 <sequence>
 <choice>
 <element name="TimePoint" type="mpeg7:TimePointType" />
 <element name="RelTimePoint" type="mpeg7:RelTimePointType" />
 <element name="RelIncrTimePoint" type="mpeg7:RelIncrTimePointType" />
 </choice>
 <choice minOccurs="0">
 <element name="Duration" type="mpeg7:durationType" />
 <element name="IncrDuration" type="mpeg7:IncrDurationType" />
 </choice>
 </sequence>
</complexType>

<!-- Definition of TimePoint datatype -->
<simpleType name="TimePointType">
 <restriction base="mpeg7:basicTimePointType">
 <pattern
 value="(\-?\d+(\-\d{2}(\-\d{2})?)?)?(T\d{2}(:\d{2}(:\d{2} (:\d+)?)?)?)?(F\d+)?(\-|\+\d{2}:\d{2})?" />
 </restriction>
</simpleType>

<!-- Definition of duration datatype -->
<simpleType name="durationType">
 <restriction base="mpeg7:basicDurationType">
 <pattern
 value="\-?P(\d+D)?(T(\d+H)?(\d+M)
 ?(\d+S)?(\d+N)?)?( \d+F)?((\-|\+)\d{2}:\d{2}Z)?" />
 </restriction>
</simpleType>
```

<p>
  Usando queste definizioni di tipo contenute nella DDL, siamo in grado di descrivere il fatto che un certo filmato rappresenta un evento iniziato il 16 ottobre 2002 alle ore 17:00 in un paese con GTM+1, e dura 10 giorni, con questo codice:
</p>

```xml
<Time>
  <TimePoint>2002-10-16T17:00+01:00</TimePoint>
  <Duration>P10D</Duration>
</Time>
```

<p>
  Ovviamente il DDL, oltre ai tipi qui introdotti (TimeType, TimePointType, e durationType), contiene molte altre definizioni che per brevità non tratteremo.
</p>

### Description Tools

<p>
  I Description Tools comprendono 'Descriptor' e 'Descriptor Schemes' che preferisco non distinguere e trattarli insieme, raggruppandoli in base alle loro funzionalità:
</p>

  * <p>
      **Schema and Basic Elements**:  
 forniscono tutti i tipi di dato utilizzati nelle descrizioni, e la  
 loro corrispondenza con i tag utilizzati in Mpeg-7;
    </p>

  * <p>
      **Content Description**:  
 rappresentazione dell'informazione audio/video sia a livello  
 strutturale (basso livello), sia a livello semantico (alto livello);
    </p>

  * <p>
      **Content Management**:  
 permette di descrivere caratteristiche come creazione, formato, ed  
 uso del materiale multimediale;
    </p>

  * <p>
      **Content Organization**:  
 Permette di gestire collezioni di materiale multimediale: si possono  
 usare questi tool per implementare una base di dati XML di  
 informazioni su materiale multimediale;
    </p>

  * <p>
      **Navigation and Access**:  
 aiutano l'accessibilità al file multimediale;
    </p>

  * <p>
      **User Interaction**:  
 permettono di memorizzare le preferenze dell'utente.
    </p>

Con i Description Tools siamo in grado di produrre due tipi di descrizioni Mpeg-7 valide: le "Complete Descriptions" che descrivono interamente un materiale multimediale come un video (l'esempio di file xml Mpeg-7 di questo articolo corrisponde ad una Complete Description perchè descrive completamente il video), e le "Descriptions Units" che non sono descrizioni intere ma dei componenti che possono far parte di una Complete Description.

## Conclusioni

<p>
  Non si è trattata la parte dei System Tools, inoltre della parte dei Description Tool si è data una semplice descrizione generale. I Description Tool sono la parte più corposa dello standard Mpeg-7, e studiarli tutti può richiedere tempo. Si suggerisce a tal proposito di utilizzare i documenti ufficiali dello standard o l'utilissima guida di Chiariglione all'indirizzo http://www.chiariglione.org/mpeg/ .
</p>
