---
title: "GIT explained for Subversion users"
date: 2013-11-03
tags:
  - programming
  - git
  - subversion
  - svn
  - versioning
---
`This guide shows the most common procedures usually performed by SVN users, but using GIT.  

Why this guide should be better than the others already on-line? There isn't a particular reason ;) . I'm now a SVN user and I'm just migrating to GIT, so I'm going to find a way to perform with GIT all the operations that I usually do with Subversion: this will be useful for Subversion users who want to start using GIT quickly.`

<!-- truncate -->

Git is a distributed revision control (DVCS) and source code management (SCM) system with an emphasis on speed. As a distributed VCS, every Git working directory is a full-fledged repository with complete history and full version tracking capabilities, not dependent on network access or a central server.

This is the most substantial difference with SVN where there is a central repository. With subversion, the developers working in a team used continuously exchange their code. This is deeply different with GIT because there is no a main central repository; so developer should use a given remote repository, and use it as the central one.

No more talk, I don't like to talk: let's start with GIT by examples.

We have two developers, obviously their user-names are Alice and Bob.

## GIT - Create a repository

Alice wants to create a new project named "lemon". She simply creates an empty directory and then launch the command 'git init':

```shell
[~/alice]$ mkdir lemon
[~/alice]$ cd lemon
[~/alice/lemon]$ git init
Initialized empty Git repository in /Users/fferrara/alice/lemon/.git/
[master][~/alice/lemon]$

```

That's all! Alice has now a brand new repository locally (note that this is more than a working copy). The main branch is called "master". The shell prompt has the capability to detect and print the name of the current branch (this is the zsh shell default behaviour).

## GIT - Your first commit

Let's prepare our first file commit. Lemon has one simple file 'hello.js' containing the source code.

```javascript
var prompt = require('prompt');

prompt.start();

prompt.get(['fruit'], function(err, result) {

    if (result) {
        console.log('Hey fruit ' + result.fruit);
        if ('lemon' == result.fruit) {
            console.log('I like yellow things :) ');
        };
    }
});
```

Also we have a package.json configuration file.

```javascript
{
  "dependencies": {
    "prompt": "0.2.11"
  }
}

```

As many of you know, in this type of application, we have to ignore the node_modules directory. So we have to create the .gitignore file containing the ignore-list.

```shell
*[master][~/alice/lemon]$ echo "node_modules" > .gitignore

```

To see the status of our branch, you should use the command 'git status'

```shell
*[master][~/alice/lemon]$ git status
# On branch master
#
# Initial commit
#
# Untracked files:
#   (use "git add ..." to include in what will be committed)
#
#   .gitignore
#   hello.js
#   package.json
nothing added to commit but untracked files present (use "git add" to track)

```

The file for now are all in the 'untracked' status, that is the first state. To track these files we have to add them to the repository index.

```shell
*[master][~/alice/lemon]$ git add .gitignore package.json hello.js

```

Check the status again

```shell
*[master][~/alice/lemon]$ git status
# On branch master
#
# Initial commit
#
# Changes to be committed:
#   (use "git rm --cached ..." to unstage)
#
#   new file:   .gitignore
#   new file:   hello.js
#   new file:   package.json
#

```

The added files are now ready to be committed (aka tracked-file). The commit command resembles that of SVN.

```shell
*[master][~/alice/lemon]$ git commit -m "my first git commit"
[master (root-commit) 7046414] my first git commit
 3 files changed, 19 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 hello.js
 create mode 100644 package.json

```

Note that the number '7046414' is equivalent of the SVN revision number. Actually it is a commit hash and in this context is truncated to the first 7 characters. To see the entire commit identified we can print the commit log.

Use the 'git log' command to see this:

```shell
commit 7046414d2c9d3407f421987449c92877718248f9
Author: alice
Date:   Fri Nov 1 16:44:31 2013 +0100
     my first git commit
(END)

```

## GIT - Share your commit with the team

What about the remote repository? Actually GIT doesn't need a main remote repository, but can track several distributed repositories.

For this example I'm borrowing to Alice this remote https://github.com/fsferrara/lemon.git repository. She should set this uri in her local repository, and then verify with the command 'git remote -v'.

```shell
[master][~/alice/lemon]$ git remote -v
[master][~/alice/lemon]$ git remote add origin https://github.com/fsferrara/lemon.git
[master][~/alice/lemon]$ git remote -v
origin  https://github.com/fsferrara/lemon.git (fetch)
origin  https://github.com/fsferrara/lemon.git (push)

```

Nice... a remote (by default called 'origin') to share our branch!

Yes, you've got it right. With GIT we always share branches. Alice now have to push her master branch to the origin repository.

```shell
[master][~/alice/lemon]$ git push -u origin master
Counting objects: 5, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 514 bytes, done.
Total 5 (delta 0), reused 0 (delta 0)
To https://github.com/fsferrara/lemon.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.

```

In a team, were developer used to often share their code with SVN, this operation should be performed after every commit.

Only the first time we share a branch we should use the -u flag, in order to set the upstream. In a nutshell an upstream is a tracking reference, in order to set Alice's master branch to track the remote master branch (we can refer to it as origin/master or remotes/origin/master).

The 'git branch -a' command prints out the entire lists of branches.

```shell
[master][~/alice/lemon]$ git branch -a
* master
  remotes/origin/master

```

## GIT - Create a branch

Now Alice want to write down a killer feature... maybe it can be a custom message not only for lemons, but also for all kinds of citrus fruit. The first thing to do is to create a branch...

```shell
[master][~/alice/lemon]$ git branch citrus
[master][~/alice/lemon]$ git branch -a
  citrus
* master
  remotes/origin/master

```

The branch citrus is created only locally. That means that the origin (aka remote repository) doesn't have this branch. Alice can share this branch with others by pushing it to origin.

```shell
[master][~/alice/lemon]$ git push -u origin citrus
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/fsferrara/lemon.git
 * [new branch]      citrus -> citrus
Branch citrus set up to track remote branch citrus from origin.
[master][~/alice/lemon]$ git branch -a
  citrus
* master
  remotes/origin/citrus
  remotes/origin/master

```

## GIT - Switch to a branch

But Alice can't start working because is still using the master branch. The 'git checkout' command is launched to change the current branch.

Yes poor SVN users... with GIT the checkout command doesn't means 'create a brand new working copy', but has now a new meaning: now checkout is used to switch branch or revert a modified file or directory.

Let's start by simply change the current branch:

```shell
[master][~/alice/lemon]$ git checkout citrus
Switched to branch 'citrus'
[citrus][~/alice/lemon]$ git branch -a
* citrus
  master
  remotes/origin/citrus
  remotes/origin/master

```

## GIT - Clone an existing repository

Bob, a team mate of Alice, awakens, and start working at the project lemon. The first thing is to clone an existing repository by using the given uri.

```shell
[~/bob]$ git clone https://github.com/fsferrara/lemon.git lemon
Cloning into 'lemon'...
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 5 (delta 0), reused 5 (delta 0)
Unpacking objects: 100% (5/5), done.
[~/bob]$ cd lemon
[master][~/bob/lemon]$ git branch -a
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/citrus
  remotes/origin/master

```

## GIT - Share a commit on an existing file

Ops... there is a minor bug! The 'hello' string doesn't contains the point. Bob choose to treat it as a hot bugfix, and to commit this change directly on the master branch.

He first edit the hello.js file, and then:

```shell
*[master][~/bob/lemon]$ git status
# On branch master
# Changes not staged for commit:
#   (use "git add ..." to update what will be committed)
#   (use "git checkout -- ..." to discard changes in working directory)
#
#   modified:   hello.js
#
no changes added to commit (use "git add" and/or "git commit -a")
*[master][~/bob/lemon]$ git add hello.js
*[master][~/bob/lemon]$ git commit -m "hot bugfix"
[master c6538cc] hot bugfix
 1 file changed, 1 insertion(+), 1 deletion(-)
[master][~/bob/lemon]$ git push origin master
Counting objects: 5, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 346 bytes, done.
Total 3 (delta 1), reused 0 (delta 0)
To https://github.com/fsferrara/lemon.git
   7046414..c6538cc  master -> master
[master][~/bob/lemon]$

```

## GIT - Create a tag

Bob want to freeze the current master version to a given tag. We're familiar with tags since we currently are SVN users :) but in the GIT case there isn't a folder that contains all the tag. Tags are treated like commits, and refers to a snapshot of the source code.

The 'git tag' command is used here. After the tag is created, there is need to push it in order to share it with the team.

```shell
[master][~/bob/lemon]$ git tag -l
[master][~/bob/lemon]$ git tag -a v0.1.0 -m "Released on `date`"
[master][~/bob/lemon]$ git tag -l
v0.1.0
[master][~/bob/lemon]$ git push --tags origin master
Counting objects: 1, done.
Writing objects: 100% (1/1), 184 bytes, done.
Total 1 (delta 0), reused 0 (delta 0)
To https://github.com/fsferrara/lemon.git
 * [new tag]         v0.1.0 -> v0.1.0

```

## GIT - Check if a branch is rebased

Alice is working on branch 'citrus' and in the meanwhile Bob committed a fix on the master branch. How Alice can check if the branch she is currently working on has to be rebased? The first thing to do is to 'fetch' updates from origin.

```shell
[citrus][~/alice/lemon]$ git fetch
remote: Counting objects: 6, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 1), reused 4 (delta 1)
Unpacking objects: 100% (4/4), done.
From https://github.com/fsferrara/lemon
   7046414..c6538cc  master     -> origin/master
 * [new tag]         v0.1.0     -> v0.1.0

```

Now Alice's repository has information about Bob's commits and tags. In order to know if the current branch is rebased with master Alice can use the 'git cherry' command. Another option are the more powerful commands:

gitk citrus..origin/master

git log citrus..origin/master

The range notation "citrus..master" means "show everything that is included in master but is not included in citrus".

```shell
[citrus][~/alice/lemon]$ git cherry citrus origin/master
+ c6538cc3b3fed65bd5c9cfe708961f1f5f2e1616
```

## GIT - Rebase a branch with master

Expected surprise! There is a commit (c6538cc3b3fed65bd5c9cfe708961f1f5f2e1616) not included in the current branch. Now is very important to note all the branches present in Alice's repository:

```shell
[citrus][~/alice/lemon]$ git branch -a
* citrus
  master
  remotes/origin/citrus
  remotes/origin/master

```

There are two local branches (citrus and master), and two remote tracked branches (origin/citrus and origin/master). At the moment origin/master is updated, but master isn't updated yet. That's because 'git fetch' only download new information but doesn't perform any merge operation.

The choice is to work with remote branches, or update local branches and work with locals. Alice choose to work with the remote ones.

```shell
[citrus][~/alice/lemon]$ git rebase origin/master citrus
First, rewinding head to replay your work on top of it...
Fast-forwarded citrus to origin/master.
[citrus][~/alice/lemon]$ git status
# On branch citrus
# Your branch is ahead of 'origin/citrus' by 1 commit.
#
nothing to commit (working directory clean)
[citrus][~/alice/lemon]$ git push origin citrus
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/fsferrara/lemon.git
   7046414..c6538cc  citrus -> citrus
[citrus][~/alice/lemon]$ git status
# On branch citrus
nothing to commit (working directory clean)

```

Examining the log (with git log or gitk) we can see that now citrus and origin/citrus branches have exactly the commit c6538cc3b3fed65bd5c9cfe708961f1f5f2e1616 in their log. That means that this commit is now in common with the master branch.

## GIT - Reintegrate a branch

Alice worked hard on her branch, and a the end commits the killer feature.

```shell
[citrus][~/alice/lemon]$ vim hello.js
*[citrus][~/alice/lemon]$ git add hello.js
*[citrus][~/alice/lemon]$ git commit -m "Add the killer feature"
[citrus b306b5c] Add the killer feature
 1 file changed, 3 insertions(+)
[citrus][~/alice/lemon]$ git push origin citrus
Counting objects: 5, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 447 bytes, done.
Total 3 (delta 1), reused 0 (delta 0)
To https://github.com/fsferrara/lemon.git
   c6538cc..b306b5c  citrus -> citrus

```

Ops... she forgot something :( . Another commit is necessary:

```shell
[citrus][~/alice/lemon]$ vim hello.js
*[citrus][~/alice/lemon]$ git add hello.js
*[citrus][~/alice/lemon]$ git commit -m "This actually add the killer feature"
[citrus ae073c3] This actually add the killer feature
 1 file changed, 3 insertions(+)
[citrus][~/alice/lemon]$ git push origin citrus
Counting objects: 5, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 370 bytes, done.
Total 3 (delta 1), reused 0 (delta 0)
To https://github.com/fsferrara/lemon.git
   b306b5c..ae073c3  citrus -> citrus

```

Bob wants now to integrate Alice's commits in the master branch. So the first thing to do is to fetch the updates.

```shell
[master][~/bob/lemon]$ git fetch
remote: Counting objects: 8, done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 6 (delta 2), reused 5 (delta 1)
Unpacking objects: 100% (6/6), done.
From https://github.com/fsferrara/lemon
   7046414..ae073c3  citrus     -> origin/citrus

```

Now Bob has to merge all the Alice's commit in the master branch. The following command 'squash' these commits into one commit, and add the change-set to the GIT index:

```shell
[master][~/bob/lemon]$ git merge --squash origin/citrus
Updating c6538cc..ae073c3
Fast-forward
Squash commit -- not updating HEAD
 hello.js | 6 ++++++
 1 file changed, 6 insertions(+)

```

The working branch of Bob now has all the changes introduced by Alice. To see the difference Bob should use the command 'git diff -staged'.

Finally to reintegrate the branch:

```shell
*[master][~/bob/lemon]$ git commit -m "Reintegrate branch citrus into master"
[master cd84dc7] Reintegrate branch citrus into master
 1 file changed, 6 insertions(+)
[master][~/bob/lemon]$ git push origin master
Counting objects: 5, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 538 bytes, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/fsferrara/lemon.git
   c6538cc..cd84dc7  master -> master

```

## GIT - Delete a branch

At the end Bob can delete the branch he previously integrated on master. The 'git branch -d' command is used.

```shell
[master][~/bob/lemon]$ git branch -d citrus
warning: deleting branch 'citrus' that has been merged to
 'refs/remotes/origin/citrus', but not yet merged to HEAD.
Deleted branch citrus (was ae073c3).
[master][~/bob/lemon]$ git push --delete origin citrus
To https://github.com/fsferrara/lemon.git
 - [deleted]         citrus

```

Note that the command 'git branch -d' ensures that the changes in the citrus branch are already in the current branch. If not, you should use the option -D instead.

## What's next...

Time is over :/ . Next operation I usually perform with SVN are:

  * GIT - Return to a revision
  * GIT - Return to a tag
  * GIT - Reverse merge
  * GIT - Undo a wrong commit (or a list... remeber the order)
  * GIT - Create a diff-file and perform a patch
  * GIT - Stash
  * GIT - Export

Asap I'll write about these operation. In the meanwhile I suggest you these manual page: 'man gittutorial' and the very interesting 'man gittutorial-2'

Goodbye and happy versioning :)
