---
title: "Main Features of a Linux System with a Kernel Updated to Version 2.6.X"
date: 2006-11-17
tags:
  - talks
categories:
  - talks
---


![Showcase](../linux-2_6-features.png)

I had the pleasure of presenting a seminar on one of the most pivotal releases in Linux history: Kernel 2.6. Tailored for tech enthusiasts, developers, and students alike, the talk walked through the major transformations introduced in this kernel version.

We explored the new kernel features, from hyperthreading support and enhanced scalability to powerful new features like Futexes, Asynchronous I/O, and POSIX ACLs. We covered multi-platform compatibility, deeper insight into `/proc` and `/sys` virtual filesystems, support for extended file attributes, and a wide array of device drivers and multimedia support.

In the latter half of the presentation, we zoomed in on the process of custom kernel compilation. I demonstrated, step by step, how to:
- Download and extract the kernel source
- Create a configuration with tools `make xconfig` or `make menuconfig`
- Compile the kernel and modules (i.e. `make bzImage`, `make modules`, `make modules_install`)
- Install and set up bootloaders (LILO or GRUB)
- Reboot into the newly built environment


[💾 slides](../linux-2_6-features.pdf)
