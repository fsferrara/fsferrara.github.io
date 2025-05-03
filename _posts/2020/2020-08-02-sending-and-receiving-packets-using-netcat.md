---
title: "Sending and receiving TCP/UDP packets using Netcat"
date: 2020-08-02
authors: [fsferrara]
tags:
  - devops
  - macos
  - unix
  - netcat
  - tcp
  - udp
  - statsd
---

This story will show you how to use Netcat to send and receive TCP/UDP packets.
We'll focus on a specific example... we'll simulate a Statsd client/server.

What is Netcat? Netcat is a featured networking utility which reads and writes data across network connections, using the TCP/IP protocol. Designed to be a reliable "back-end" tool, Netcat can be used directly with other programs and scripts to send files from a client to a server and back. At the same time, it is a feature-rich network debugging and exploration tool that can specify the network parameters while also establishing a connection to a remote host via a tunnel. 

<!-- truncate -->

Although Netcat can do many things, its main purpose and most desirable functions are to:

1. Create an initial socket to establish a connection from the server to the client.
2. Once connected, Netcat will automatically generate a second socket to transmit files from the server to the client and visa versa.

## Netcat version

There are several, and incompatible, Netcat implementations. I believe Linux has the most advanced implementation but, unfortunately, I am on MacOS Catalina 10.15.6. So I used netcat 0.7.1 installed through homebrew. Actually, MacOS already provides a netcat implementation (i.e. `/usr/bin/nc`) that I honestly don't like.

## Test your Netcat understanding as a client-server

Open two computer terminals, the first will act as the server and the second will be the client.

### Simulate the server

With Netcat, your computer can be converted into a fake server.
Focus to the server terminal, you want to start at port 8125/UDP, so issue:

```
$ netcat -ulzp 8125
```

The server is now up and listening.

### Simulate the client

In addition, we can use netcat to connect to the port (8125) recently opened.
Switch to the client terminal and send a message to 8125/UDP:

```
echo "my-app.node.timer:102522|ms" | netcat -nuc 127.0.0.1 8125
```

Now you should see the fake metric `my-app.node.timer:102522|ms` sent by the client in the output of the fake server.
