---
title: "Running containers with Docker"
date: 2015-04-03
authors: [fsferrara]
tags:
  - devops
  - boot2docker
  - devops
  - docker
---

**Docker** is an open platform for developers and sysadmins to build, ship, and run distributed applications. Consisting of **Docker Engine**, a portable, _lightweight runtime and packaging tool_, and **Docker Hub**, a _cloud service for sharing applications and automating workflows_, Docker enables apps to be quickly assembled from components and eliminates the friction between development, QA, and production environments. As a result, IT can ship faster and run the same app, unchanged, on laptops, data center VMs, and any cloud.

This post describes how to run Docker machines with the help of Boot2Docker.

<!-- truncate -->

## Boot2Docker

Boot2Docker is a lightweight Linux distribution made specifically to run Docker containers. It is currently designed and tuned **for development**. Using it for _any kind of production workloads at this time is highly discouraged_.

After boot2docker installation, we can download the boot2docker-vm by typing this command:
```
    saverio@mstar:boot2docker > boot2docker init
```

this will download and install into **VirtualBox** a VM.

```
    saverio@mstar:boot2docker > VBoxManage list vms
    "boot2docker-vm" {0c34b443-1f74-44c6-88cb-f8cb5fd885c9}
```

The boot2docker-vm VM is switched off. To urn it on type the command:
```
    saverio@mstar:boot2docker > boot2docker up
    Waiting for VM and Docker daemon to start...
    .........................ooooooooooooooooooooooooo
    Started.
    Writing /Users/saverio/.boot2docker/certs/boot2docker-vm/ca.pem
    Writing /Users/saverio/.boot2docker/certs/boot2docker-vm/cert.pem
    Writing /Users/saverio/.boot2docker/certs/boot2docker-vm/key.pem

    To connect the Docker client to the Docker daemon, please set:
        export DOCKER_HOST=tcp://192.168.59.103:2376
        export DOCKER_CERT_PATH=/Users/fferrara/.boot2docker/certs/boot2docker-vm
        export DOCKER_TLS_VERIFY=1
```

Boot2Docker is now up and running.

The Next step is to set up a Docker machine. [Docker Hub](https://hub.docker.com/) hosts a collection of docker machines.

Boot2Docker sets up two **network adaptors**, one using NAT to allow the VM to download images and files from the internet, and a host only network that Docker container's ports will be exposed on.

To expose a port you should use a command like this one
```
    docker run --name nginx-test -d -p 80:80 nginx
```

To start practicing with **Docker** let's ssh-ing into the running boot2docker vm.
```
    saverio@mstar:boot2docker > boot2docker ssh
                            ##        .
                      ## ## ##       ==
                   ## ## ## ##      ===
               /""""""""""""""""\___/ ===
          ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~
               \______ o          __/
                 \    \        __/
                  \____\______/
     _                 _   ____     _            _
    | |__   ___   ___ | |_|___ \ __| | ___   ___| | _____ _ __
    | '_ \ / _ \ / _ \| __| __) / _` |/ _ \ / __| |/ / _ \ '__|
    | |_) | (_) | (_) | |_ / __/ (_| | (_) | (__|   <  __/ |
    |_.__/ \___/ \___/ \__|_____\__,_|\___/ \___|_|\_\___|_|
    Boot2Docker version 1.5.0, build master : a66bce5 - Tue Feb 10 23:31:27 UTC 2015
    Docker version 1.5.0, build a8a31ef
    docker@boot2docker:~$
```

## Docker

The Docker Engine consists of two parts: a daemon, a server process that manages all the containers, and a client, which acts as a remote control for the daemon.

If you're loggeg into the boot2docker machine, you can check if the docker daemon is running.
```
    docker@boot2docker:~$ docker version
    Client version: 1.5.0
    Client API version: 1.17
    Go version (client): go1.4.1
    Git commit (client): a8a31ef
    OS/Arch (client): linux/amd64
    Server version: 1.5.0
    Server API version: 1.17
    Go version (server): go1.4.1
    Git commit (server): a8a31ef
```

This will verify that the daemon is running and that you can connect to it. If you can see the version number you know you are all set.

I found very useful the [interactive tutorial(https://www.docker.com/tryit/) because the best way to understand Docker is to try it!

### Searching for images

The easiest way to get started is to use a container image from someone else. Container images are available on the Docker Hub Registry, a cloud-based collection of applications. You can find them online at Docker Hub as well _through the Docker Engine client command line_.

To search for a container, you can use the command _docker search_. For example:
```
    docker@boot2docker:~$ docker search tutorial
    NAME                                       DESCRIPTION   STARS     OFFICIAL   AUTOMATED
    learn/tutorial                                           8
```

Searched for a "tutorial" container.

### Downloading container images

Container images can be downloaded easily using _docker pull_. For images in the Docker Hub Registry, the name you specify is constructed as /.

To download learn/tutorial container:
```
    docker@boot2docker:~$ docker pull learn/tutorial
    Pulling repository learn/tutorial
    8dbd9e392a96: Download complete
    Status: Downloaded newer image for learn/tutorial:latest
```

With a container Docker can download several layers because a docker images can consists of several layers.

### Run a container

You can think of containers as a process in a box. The box contains everything the process might need, so it has the filesystem, system libraries, shell and such, but by default none of these are running. You _start_ a container by running a process in it.

The command docker run takes a minimum of two arguments:

  1. an image name, and
  2. the command you want to execute within that image.

So, for the learn/tutorial container, it is:
```
    docker@boot2docker:~$ docker run learn/tutorial echo "hello world"
    hello world
```

With this you have just started a container and executed a program inside of it, when the program stopped, so did the container.

### Installing things

Next we are going to install a simple utility, ping, in the container. The image is based upon ubuntu, so you can run the command _apt-get install -y ping_ in the container.

Note that even though the container stops right after a command completes, the changes are not forgotten.
```
    docker@boot2docker:~$ docker run learn/tutorial apt-get install -y ping
    Reading package lists...
    Building dependency tree...
    The following NEW packages will be installed:
      iputils-ping
    0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.
    Need to get 56.1 kB of archives.
    After this operation, 143 kB of additional disk space will be used.
    Get:1 http://archive.ubuntu.com/ubuntu/ precise/main iputils-ping amd64 3:20101006-1ubuntu1 [56.1 kB]
    debconf: delaying package configuration, since apt-utils is not installed
    Fetched 56.1 kB in 0s (276 kB/s)
    Selecting previously unselected package iputils-ping.
    (Reading database ... 7545 files and directories currently installed.)
    Unpacking iputils-ping (from .../iputils-ping_3%3a20101006-1ubuntu1_amd64.deb) ...
    Setting up iputils-ping (3:20101006-1ubuntu1) ...
```

That worked! You have installed a program on top of a base image. Your changes to the filesystem have been kept, but are not yet saved.

### Save your changes

After you make changes (by running a command inside a container), you probably want to save those changes. This will enable you to start from this point later. With Docker, the process of saving the state is called **committing**. Commit basically saves the difference between the old image and the new state.

To do that there are several steps. First use _docker ps -l_ to find the ID of the container you created by installing ping.
```
    docker@boot2docker:~$ docker ps -l
    CONTAINER ID        IMAGE                   COMMAND                CREATED             STATUS                     PORTS               NAMES
    3cba51f3bedc        learn/tutorial:latest   "apt-get install -y    3 minutes ago       Exited (0) 3 minutes ago                       modest_cori
```

The id is 3cba51f3bedc.

The second step is to actually commit the changes:
```
    docker@boot2docker:~$ docker commit 3cba51f3bedc learn/ping
    86d9da396ee3c8d9d00326838999050d75bf831a016e4a6f0611edd5f62a624b
```

That worked! Please take note that Docker has returned a new ID. This ID is the image ID.

### Run your new image

You have built a complete, self-contained image with the ‘ping' utility installed named **learn/ping**. Your image can now run on any host that runs Docker.

Let's try it now with a ping to the host google.com:
```
    docker@boot2docker:~$ docker run learn/ping ping google.com
    PING google.com (216.58.210.46) 56(84) bytes of data.
    64 bytes from lhr14s23-in-f14.1e100.net (216.58.210.46): icmp_req=1 ttl=61 time=37.3 ms
    64 bytes from lhr14s23-in-f14.1e100.net (216.58.210.46): icmp_req=2 ttl=61 time=36.5 ms
    64 bytes from lhr14s23-in-f14.1e100.net (216.58.210.46): icmp_req=3 ttl=61 time=44.2 ms
    ^C
    --- google.com ping statistics ---
    9 packets transmitted, 9 received, 0% packet loss, time 8019ms
    rtt min/avg/max/mdev = 35.384/37.963/44.248/2.814 ms
```

That worked! Note that normally you can use one of Ctrl-C, Ctrl-P, or Ctrl-Q to disconnect (I don't know why on my Mac none of those three worked). The container will keep running until it will disconnect automatically.

Your image is now a running container. Using **docker ps** we can see a list of all running containers and using **docker inspect**. We can see useful information about this container.

### Push your image to the Docker Hub Registry

Now that you have verified that your image works, you can share it with others. Remember that you pulled (downloaded) the learn/tutorial image from the Registry? By pushing (uploading) images that you build, you can easily retrieve them to use on other hosts as well as share them with other users.

To do that the command **docker push** is used:
```
    docker@boot2docker:~$ docker push learn/ping
    The push refers to a repository [learn/ping] (len: 1)
    Sending image list

    Please login prior to push:
    Username:
```

Ops... it requires to be registered to Docker Hub so that's all for now.
