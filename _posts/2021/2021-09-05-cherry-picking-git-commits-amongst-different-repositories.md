---
title: "Cherry-picking git commits amongst different repositories"
date: 2021-09-05
authors: [fsferrara]
tags:
  - programming
  - git
---
I am trying how the `git cherry-pick` commands works and, in the specific, I am wondering if it is suitable to copy commits amongst two different repositories that are sharing only the first part of the git log history. Let's start by creating two new repositories named *repo_A* and *repo_B*.

<!-- truncate -->

```
➜ cherry-pick-tutorial mkdir repo_{A,B}; ls | parallel 'cd {}; git init; cd ..'
Initialized empty Git repository in ~/cherry-pick-tutorial/repo_A/.git/
Initialized empty Git repository in ~/cherry-pick-tutorial/repo_B/.git/
```

I am now going to store the "About the Teeth of Sharks" poem (by John Ciardi) in the *repo_A* repository, but I'll do that triggering one commit for each line.

> 1. The thing about a shark is—teeth,
> 2. One row above, one row beneath.
> 3. Now take a close look. Do you find
> 4. It has another row behind?
> 5. Still closer—here, I'll hold your hat:
> 6. Has it a third row behind that?
> 7. Now look in and...Look out! Oh my,
> 8. I'll never know now! Well, goodbye.


## Start building repo_A

This is the initial repository named *repo_A*. Let's perform 2 commits into this one with the first two lines. The result would be this log history

```
* 9e9e702 (HEAD -> master) second poem line
* cd71a64 first poem line
```

## Push everything from repo_A to repo_B

We would like to push every commit done in *repo_A* into *repo_B*. So, cd into the *repo_B* folder and trigger: `git config receive.denyCurrentBranch updateInstead`. This will allow us to perform the following push operation from the *repo_A* folder:

```
➜  repo_A git:(master) git push --mirror ../repo_B/.git

Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (6/6), 520 bytes | 520.00 KiB/s, done.
Total 6 (delta 1), reused 0 (delta 0), pack-reused 0
To ../repo_B/.git
 * [new branch]      master -> master
```

Now, if you check the *repo_B* git log history, You'll notice that the destination repository have the same commits and each of them has the same commit hash.

To easily remember which is the latest *repo_A* git commit hash included in *repo_B*, I suggest creating a tag pointing to `9e9e702`. This can be done with `git tag -a -m "repo_B started here" first_sync 9e9e702ff99845a1a0543ed84d1fb9503014cd65`.
An alternative would be to use the `git cherry` command which I am not covering in this post.


## Continue building repo_A

Let's keep up with the good work on the first repository and commit an additional line:

```
* 828d233 (HEAD -> master) third poem line
* 9e9e702 (tag: first_sync) second poem line
* cd71a64 first poem line
```

## Cherry-pick one single commit from repo_A to repo_B

Ok, here we are. Now we can perform the cherry-picking operation. First of all, we would like to set *repo_A* to be a remote of *repo_B*. So, cd into the *repo_B* folder and trigger `git remote add repo_a ../repo_A/.git`. Now `repo_a` is the remote name for the *repo_A* repository. Please, remember to `git fetch repo_a` before starting using it.

```
➜  repo_B git:(master) git remote -v                       
repo_a	../repo_A/.git (fetch)
repo_a	../repo_A/.git (push)
```

Then, we can cherry-pick `828d233` from *repo_A* in this way:

```
➜  repo_B git:(master) git cherry-pick 828d233ee36d640638e8b3c0a1e49c2acb42bec2
[master 2a542c9] third poem line
 Date: Sat Sep 4 12:02:28 2021 +0200
 1 file changed, 2 insertions(+), 1 deletion(-)
```

The *repo_B* log history has now the additional commit:

```
* 2a542c9 (HEAD -> master) third poem line
| * 828d233 (repo_a/master) third poem line
|/  
* 9e9e702 (tag: first_sync) second poem line
* cd71a64 first poem line
```

Please, note how the commit hash for the third poem line is changing after the cherry-pick. This means that we are cherry-picking the commit content into a new commit stored in the *repo_B*.

For our convenience, let's annotate the *repo_A* commit we just picked by creating a tag pointing to `828d233`. This can be done with: `repo_A git:(master) git tag -a -m "I picked this commit" second_sync 828d233ee36d640638e8b3c0a1e49c2acb42bec2`.

## Finishing our poem

Let's finish the poem in *repo_A* by adding the remaining lines. The result will be to Now we have this repo_A log history:

```
* 4a6a6c3 (HEAD -> master) eighth poem line
* 5ff117f seventh poem line
* 1409116 sixth poem line
* ea766cc fifth poem line
* dd7fc45 fourth poem line
* 828d233 (tag: second_sync) third poem line
| * 2a542c9 (repo_b/master) third poem line
|/  
* 9e9e702 (tag: first_sync) second poem line
* cd71a64 first poem line
```

# Copy all the remaining commits

You should be a master in cherry-picking now! Go ahead and cherry pick from `dd7fc45` to `4a6a6c3`:

```
➜  repo_B git:(master) git cherry-pick dd7fc45d5da43a8711ea1f340b3266aebe3e14bc^..4a6a6c34422cbce23f11a0e61104608de357a170
[master 1c322a5] fourth poem line
 Date: Sat Sep 4 12:03:18 2021 +0200
 1 file changed, 2 insertions(+), 1 deletion(-)
[master 5bbaf6c] fifth poem line
 Date: Sat Sep 4 12:37:08 2021 +0200
 1 file changed, 2 insertions(+), 1 deletion(-)
[master 2ec9936] sixth poem line
 Date: Sat Sep 4 12:37:34 2021 +0200
 1 file changed, 2 insertions(+), 1 deletion(-)
[master 4be4369] seventh poem line
 Date: Sat Sep 4 12:37:50 2021 +0200
 1 file changed, 2 insertions(+), 1 deletion(-)
[master 1ab66d5] eighth poem line
 Date: Sat Sep 4 12:38:19 2021 +0200
 1 file changed, 2 insertions(+), 1 deletion(-)
```

What? Four new commits in one single git command? Yes.

The basic form to cherry-pick a range of commits is `git cherry-pick 828d233..4a6a6c3`. The first hash in the range is the oldest commit and the last hash in the range is the newest commit. The confusion with this form of the cherry-pick merge is that the first hash listed in the range is not included in the commit. That's why I opted for the form: `git cherry-pick dd7fc45^..4a6a6c3` that includes the `dd7fc45` commit and seems more intuitive to me.

This is the resulting *repo_B* log history:

```
* 1ab66d5 (HEAD -> master) eighth poem line
* 4be4369 seventh poem line
* 2ec9936 sixth poem line
* 5bbaf6c fifth poem line
* 1c322a5 fourth poem line
* 2a542c9 third poem line
| * 4a6a6c3 (repo_a/master) eighth poem line
| * 5ff117f seventh poem line
| * 1409116 sixth poem line
| * ea766cc fifth poem line
| * dd7fc45 fourth poem line
| * 828d233 (tag: second_sync) third poem line
|/  
* 9e9e702 (tag: first_sync) second poem line
* cd71a64 first poem line
```

As a final note, what I did here was to merely copy **every** commit. Most probably, I would have reached the same result with a common `git merge` operation. The cherry-pick command would come in handy when you want to selectively select the commits to port over another branch.
