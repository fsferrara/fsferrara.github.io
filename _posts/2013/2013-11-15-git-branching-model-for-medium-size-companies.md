---
title: "A GIT branching model for medium-size companies"
date: 2013-11-15
tags:
  - programming
  - branching-model
  - collaboration
  - devops
  - git
  - teams
categories:
  - programming
---
This article explains how a medium size company, which has several teams, can adopt GIT for the source code management. As a software configuration management, GIT serves two different functions. The first one is the management support for controlling changes to software products, and the second one is merely development support for coordinating file changes among product developers. In particular here I want to talk about the branching model.

<!-- truncate -->

The following branching model is for a single product, whereas only the last product version is maintained (i.e. a web site or a mobile app). Additionally this branching model support an agile process model, where a new product version is released (hopefully) at the end of each team sprint.

This proposal is based on the "branch-by-purpose" model (@see [The Importance of Branching Models in SCM](http://svn.haxx.se/users/archive-2007-10/att-0101/SCMBranchingModels.pdf)), but it also provide a branch for the next release.

Main actors here are:

  * **Developers**, one or more developer teams
  * **Release manager**, or a release team
  * **System administrator**, or a sysadm team

This branching model is inspired by the work of [Vincent Driessen](http://nvie.com/about/).

## Branches organization

A good branching model for medium-size technology department should absolutely have these characteristics:

  * Parallel Development
  * Collaboration
  * Release Staging
  * Support for emergency fixes (hotfix)

The proposed branching model has three branches, each with an infinite life. System administrators will always use the 'master' branch: everything is happy and deployable in master. Developers should always use the 'develop' branch, and all teams share this branch to commit their features. Also developers can't commit anything in the master branch, the release manager is in charge of this operation. The release manager has its own branch 'candidate' in order to integrate in it the team's patches, test these patches, promote versions, and then commit stable versions in the 'master' branch. The original work [GitFlow](http://nvie.com/posts/a-successful-git-branching-model/) does not have the 'candidate' branch, but uses a new branch for each release. I, instead, prefer to have the integration branch always with the same name: this can be useful in the future for the dependencies management.

## Creating the three branches

Once created the repository with the master branch, you can create 'candidate' and 'develop' branches.

```shell
[~/git]$ git clone https://github.com/fsferrara/lemon.git
Cloning into 'lemon'...
remote: Counting objects: 12, done.
remote: Compressing objects: 100% (11/11), done.
remote: Total 12 (delta 2), reused 10 (delta 0)
Unpacking objects: 100% (12/12), done.
[~/git]$ cd lemon

[master][~/git/lemon]$ git branch -a
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/master

[master][~/git/lemon]$ git branch candidate master
[master][~/git/lemon]$ git branch develop candidate

[master][~/git/lemon]$ git push origin candidate
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/fsferrara/lemon.git
 * [new branch]      candidate -> candidate

[master][~/git/lemon]$ git push origin develop
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/fsferrara/lemon.git
 * [new branch]      develop -> develop
```

Now we have these three branches:

```
   develop        candidate        master
      +               +               +
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      |               |               |
      v               v               v

```

## The features

Any new feature should be developed in a separate branch. So, a developer that is on 'develop' branch...

```shell
[master][~/git/lemon]$ git checkout develop
Switched to branch 'develop'
[develop][~/git/lemon]$ git branch -a
  candidate
* develop
  master
  remotes/origin/HEAD -> origin/master
  remotes/origin/candidate
  remotes/origin/develop
  remotes/origin/master
```

...must start a feature branch, and share it with its team:

```shell
[develop][~/git/lemon]$ git checkout -b myteam/amazing_feature
Switched to a new branch 'myteam/amazing_feature'

[myteam/amazing_feature][~/git/lemon]$ git push origin myteam/amazing_feature
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/fsferrara/lemon.git
 * [new branch]      myteam/amazing_feature -> myteam/amazing_feature
```

Rebasing keeps our code working, merging easy, and history clean. Developer should maintain this branch always rebased with remote branches 'origin/devel' and 'origin/myteam/amazing_feature', by doing these operations:

```shell
[myteam/amazing_feature][~/git/lemon]$ git fetch origin
[develop][~/git/lemon]$ git rebase origin/develop
Current branch develop is up to date.
[develop][~/git/lemon]$ git rebase origin/myteam/amazing_feature
Current branch develop is up to date.
```

The branch 'myteam/amazing_feature' contains all the feature commits. These commit should not be done directly on the 'develop' branch because anything committed to this branch can be delivered on-line without any notice. Once the feature is done, the feature branch is reintegrated in the 'develop' branch.

```
   feature         develop
                      +
                      |
      +               |
      |               O
      | _____________/|
      |/              |
      O               |
      |               |
      O               |
      |               |
      O               |
      |\_____________ |
      |              \|
      |               O
      v               |
                      |
                      |
                      |
                      |
                      v

```

At this point a "merge request" can be created also to manage the code review process. To finish a feature, perform these operations:

```shell
[myteam/amazing_feature][~/git/lemon]$ git fetch
[myteam/amazing_feature][~/git/lemon]$ git rebase -i origin/develop
Successfully rebased and updated refs/heads/myteam/amazing_feature.

[master][~/git/lemon]$ git checkout develop
Switched to branch 'develop'

[develop][~/git/lemon]$ git fetch
[develop][~/git/lemon]$ git merge origin/develop
Already up-to-date.

[develop][~/git/lemon]$ git merge --no-ff myteam/amazing_feature
Merge made by the 'recursive' strategy.
 hello.js | 4 ++--
 1 file changed, 2 insertions(+), 2 deletions(-)

[develop][~/git/lemon]$ git push origin develop
Counting objects: 1, done.
Writing objects: 100% (1/1), 241 bytes, done.
Total 1 (delta 0), reused 0 (delta 0)
To https://github.com/fsferrara/lemon.git
   cd84dc7..ee499c9  develop -> develop
```

The option "-no-ff" preserves feature history and easy full-feature reverts merge. Now we can delete the feature branch:

```shell
[develop][~/git/lemon]$ git branch -d myteam/amazing_feature
Deleted branch myteam/amazing_feature (was a30b140).

[develop][~/git/lemon]$ git push --delete origin myteam/amazing_feature
To https://github.com/fsferrara/lemon.git
 - [deleted]         myteam/amazing_feature
```

## Integration phase and release

At any time the release engineer can merge the new content of 'devel' and start an integration phase, as this picture show:

```
   develop        candidate        master
      +               +               +
      |               |               |
      |               |               |
      O               |               |
      |\_____________ |               |
      |              \|               |
      |               O code chill    |
      |               |               |
      |               |               |
      |               O               |
      | _____________/| bugfixes      |
      |/              O               |
      O _____________/|               |
      |/              |               |
      O               O code freeze   |
      |               |\_____________ |
      |               |              \|
      |               |               O tag
      |               |               |
      |               |               |
      |               |               |
      v               v               v

```

The integration starts with the _code chill_ phase, that is the phase in which only small bugfixes are allowed. Personally I hate these bugfixes, and I prefer to perform all kind of tests directly on 'devel' branch: for me the integration phase should be only the final check. Once the code is ready to be deployed in production, we have the reintegration with 'master'. At this point the release engineer can create the tag directly on master. Optionally the tag to be created can point before to the head of 'candidate' branch and then can be updated to point to 'master'.

## Deploying and emergency fixes

Everything is happy and up-to-date in master: the system administrator can use tags created by the release engineer to deploy a specific version of the product. This support the deploy of the latest version and also the roll-back to a previous version. Once reintegrated the branch 'candidate' into 'master', a new tag is created following these steps:

```shell
[master][~/git/lemon]$ git tag -a 1.2.3 -m "Promoted on `date`"
[master][~/git/lemon]$ git tag -l
1.2.3

[master][~/git/lemon]$ git push --tags
Counting objects: 1, done.
Writing objects: 100% (1/1), 182 bytes, done.
Total 1 (delta 0), reused 0 (delta 0)
To https://github.com/fsferrara/lemon.git
 * [new tag]         1.2.3 -> 1.2.3

[master][~/git/lemon]$ git ls-remote --tags origin
83fd280e796bc4134c2e7b31106b9f8ed85ecf2c    refs/tags/1.2.3
cd84dc74b39607706e8f1b110411b4a508c6f3e8    refs/tags/1.2.3^{}
```

If for testing purpose you already created the tag 1.2.3 pointing the 'candidate' branch, now you can move this tag by using the option "-f".

Also the emergency bug fixes (hotfix) are supported by this model, as shown in this picture:

```
   master          hotfix
      +
      |
      |               +
  tag O v1.2.3        |
      |\_____________ |
      |              \|
      |               O
      |               |
      |               O
      |               |
      |               O
      | _____________/|
      |/              |
  tag O v1.2.4        |
      |               |
      |               v
      |
      v

```

## Useful configuration

Autosetup rebase so that pulls operations rebase by default

```shell
git config --global branch.autosetuprebase always
```

## DOs and DON'Ts

No DO or DON'T is sacred. You'll obviously run into exceptions, and develop your own way of doing things. However, these are guidelines I've found useful.

### DOs

  * _do_ master must always be deployable.
  * _do_ all changes are made through feature branches
  * _do_ use a "merge request" (aka "pull request") to manage code-reviews
  * _do_ rebase to avoid/resolve conflicts before to merge
  * _do_ keep master in working order
  * _do_ rebase your feature branches often
  * _do_ tag releases
  * _do_ learn to rebase and merge

### DON'Ts

  * _don't_ fork
  * _don't_ merge broken code.
  * _don't_ commit onto master directly.
  * _don't_ hotfix onto master! use a specific hotfix branch.
  * _don't_ rebase master.
  * _don't_ merge with conflicts. Handle conflicts upon rebasing.
