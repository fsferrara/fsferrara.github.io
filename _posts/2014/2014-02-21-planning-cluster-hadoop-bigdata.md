---
title: "Planning a Cluster for Hadoop BigData"
date: 2014-02-21
authors: [fsferrara]
tags:
  - system administration
  - big-data
  - data
  - hadoop
  - warehouse
---
This post is about how to plan, for the first time, a cluster for Apache Hadoop and HBase. Hadoop, together with its friends, enable us to elaborate a large amount of data in a cheaply way: by large I mean data large about 100 gigabytes and above.

Hadoop implements the MapReduce framework, that is a way to take a query (or Job) over a dataset, divide it in several queries (or Tasks), and the run these queries in parallel over multiple node of a cluster. Nothing new until now, this looks like the divide-et-impera paradigm: the innovation lies in the fact that the cluster node that is in charge of executing a task has already the data on which process the query. So we are not moving data in order to elaborate them, but we're assigning task on the right cluster node that already has the data!

<!-- truncate -->

To distribute data across the cluster nodes, Hadoop has its own file system: HDFS (Hadoop Distributed File System), which can handle about 30PB (Petabyte) of data.

The drawback is that HDFS does not provide a way to have a random access to the data.

In order to have a Random access to the data, you can use HBase, a NoSQL and column-oriented database that run on top of HDFS. Unlike direct access to HDFS, HBase can handle about 1PB (Petabyte) of data, and the performances are 4-5 times slower.

Therefore Apache Hadoop is a software framework that supports large-scale distributed data analysis on commodity servers. It is critical to accurately predict the workloads for the tasks to be run. Hadoop and HBase workloads vary a lot based on the effective use, and for this reason it is really hard to correctly estimate the workloads and the amount of storage. In order to make these estimations correctly, a suitable technique is to start with a pilot project, measure the workloads, and then scale the pilot environment in order to fulfil other needs.

## Software components in an Hadoop Cluster

There are several components in the Hadoop environment, some are:

  * **HDFS**
      * **NameNode**: is a _master_ node for HDFS file system.

        Actually it doesn't contains data and manage its slaves called DataNode
      * **DataNode**: is a _slave_ node for HDFS file system.
      * **Secondary NameNode**: it is not required, but it is suggested to have a backup node for the main NameNode.
  * **MapReduce**
      * **JobTracker**: is a _master_ node for MapReduce framework.
      * **TaskTracker**: is a _slave_ node for MapReduce framework.
  * **HBase**
      * **HBase Master**: is a _master_ node for HBase.
      * **RegionServer**: is a _slave_ node for HBase.
      * **Zookeeper**: is a separate component required by HBase, used to manage the cluster.

We can rearrange these components by separating masters from slaves.

  * **Masters**
      * HDFS NameNode
      * MapReduce JobTracker
      * HBase Master
  * **Slaves**
      * HDFS DataNode
      * MapReduce TaskTracker
      * HBase RegionServer

Masters should be on a reliable cluster node: they should be always available. Slaves, instead, are frequently decommissioned for maintenance. For this reason it it highly recommended to always separate masters from slaves and, additionally, task workloads executed on the slaves should not impact the master nodes.

It is extremely important to deploy together DataNodes, TaskTrackers, and RegionServers, in order to achieve an optimal data locality (this is the principle underlying the MapReduce framework). We will call **SlaveNode** a cluster node with a DataNode, a TaskTracker, and a RegionServer.

## A typical Apache Hadoop Cluster

Typically, a medium size Hadoop cluster consists in a set of rack-servers (actually it is possible to use blade servers, but this article use rack servers as example): let's say that we have four half-size rack cabinets each is 22U tall. The first rack cabinet should be dedicated only to accommodate nodes that are always available such as NameNode (primary and secondary), JobTracker, and HBase Master. The other two rack cabinets should contain only SlaveNodes.

All nodes in a rack should be interconnected with a 1 GbE (Gigabit Ethernet) switch, and these three rack-level switch should be interconnected with a cluster level switch which is typically faster (for example a 10 GbE switch).

This is only a starting point! The remaining hardware choices may vary a lot... I can recommend you to read the Cluster Planning Guide of [Hortonworks](http://hortonworks.com).

## Install an Apache Hadoop Distribution

Apache Hadoop and all its friends can be installed manually on a Linux distribution by following the official [guide](https://hadoop.apache.org/docs/current2/index.html), but it is strongly suggested to instal an Hadoop distribution: At the moment the commercial [Cloudera CDH](http://www.cloudera.com) seems to be a good choise. It is a Linux distribution based on the stable CentOS (Red Hat) and it has pre-installed all the utilities used in an Hadoop cluster.

Another distribution, 100% open source and freely downloadable, is [Hortonworks Data Platform](http://hortonworks.com): this distribution is lightweight and can be used with Microsoft Windows too.

There are many other Apache Hadoop distributions, for example [IBM Appliances](http://www.ibm.com/big-data/us/en/) and [Microsoft HDInsight Service](http://www.windowsazure.com/en-us/services/hdinsight/): you only have to choose and try.
