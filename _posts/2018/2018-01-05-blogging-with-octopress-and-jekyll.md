---
title: "Blogging with Octopress and Jekyll"
date: 2018-01-05
authors: [fsferrara]
tags:
  - blog
  - ruby
  - jekyll
  - octopress
  - hexo
---

Nowadays, most blogs are powered by _Wordpress_. I am a Wordpress users too and I have to admit it is really a great for blogs.  
As others CMS, Wordpress requires a database and PHP in order to process the **dynamic** pages server-side.
_Jekyll_ is a static site generator. With it I can generate all my blog pages in on my computer and then publish the entire website on a static hosting server.

<!-- truncate -->

**Update** - Actually I used Octopress for few days. Then I moved to a very similar static site generator: [Hexo](https://hexo.io/). Hexo is easier to use and quite compatible with the Jekyll blog format. Additionally, Hexo runs with nodejs :-)  
Have a look at the [source code with instructions](https://github.com/fsferrara/blog).

## Prepare the Jekyll environment

The first drawback is that you need to set-up a local dev environment in order to be able to generate a static website on your machine. For Jekyll/Octopress you need several tool: git, ruby with bundler, and a javascript runtime.

### git

I bet you already know what git is.

### ruby

Ruby is an open source programming language. In order to install it locally, the are convenient ways such as [rbenv](http://rbenv.org/) or [rvm](https://rvm.io/).
Make sure to install at least ruby 1.9.3 in order to be compatible with _Octopress_ 3.0 and check with:

```
> ruby --version
ruby 2.4.3p205 (2017-12-14 revision 61247) [x86_64-darwin16]
```

### A javascript runtime

My favourite javascript runtime is [nodejs](https://nodejs.org/). A convenient way to install it is [nvm](https://github.com/creationix/nvm). After the installation you can check it with:

```
> node --version
v6.11.2
```

### Bundler

Ruby libraries are, almost always, distributed in form of ruby-gems (in short _gems_).  
**Bundler** provides a consistent environment for ruby projects by tracking and installing the exact gems and versions that are needed. All the _gems_ dependencies are declared in the **Gemfile** and jekyll websites usually have a Gemfile for the dependencies.

Bundler is a gem itself and to install it (globally in your ruby environment) just type:

```
gem install bundler
```

Note: if you are using an old version of _rbenv_, then you'll need to run `rbenv rehash` in order to be able to start using _bundler_.

## Start a new website

For my first experience with _Jekyll_ I am going with _Octopress_ (a blogging framework based on Jekyll). It is basically Jekyll with a new graphic theme and additional plugins.
To start clone the Octopress source code `git clone git://github.com/imathis/octopress.git octopress` and then:

```
> cd octopress/
[git:master]> bundle install
```

With `bundle install` we are downloading all the gems needed to generate the website locally.  
A very special gem is _rake_, a _Make-like_ task-runner implemented in ruby. It is used in Octopress to simplify some development task that are usually performed manually when using a plain Jekyll installation.
For example, I used `bundle exec rake setup_github_pages` to publish my local website to github-pages. This task created a _source_ branch for the local _Octopress_ installation and setup a _master_ branch in the *_deploy* subfolder.

 pushed the local octopress installation to the _source_ branch of my github repository.

### Setup an Octopress theme

In order to use the default theme, just type:

```
[git:source *]> bundle exec rake install
## Copying classic theme into ./source and ./sass
mkdir -p source
cp -r .themes/classic/source/. source
mkdir -p sass
cp -r .themes/classic/sass/. sass
mkdir -p source/_posts
mkdir -p public
```

The _classic_ theme has been copied in the _source_ and _sass_ directories.
Also the _public_ folder has been created: it will host my generated pages.

### Generate the static website

Using _rake_, just issue:

```
[git:source *]> bundle exec rake generate
## Generating Site with Jekyll
directory source/stylesheets
    write source/stylesheets/screen.css
Configuration file: /opt/home/github/fsferrara/octopress/_config.yml
            Source: source
       Destination: public
      Generating...
                    done.
 Auto-regeneration: disabled. Use --watch to enable.
```

### Generate the static website

Always using _rake_, just issue `bundle exec rake deploy`.

### Commit the website source

This is the Jekyll feature I like most: I can version the source code of the website :-)
For the first commit:

```
[git:source *]> git add .
[git:source +]> git commit -m "my first octopress commit"
[git:source]> git push origin source
```

Since I am using github as hosting solution, I have a *source* branch containing the source code of the blog, and a *master* branch (linked to the *_deploy* subfolder) containing the generated website.

### Restoring the local website on a new computer

Or at least, restoring the local website on the same computer with a new os installation.  
The steps are:

```
> git clone https://github.com/fsferrara/fsferrara.github.io.git
> cd fsferrara.github.io
[git:master]> git checkout source
[git:source]> git remote add octopress git://github.com/imathis/octopress.git
[git:source]> git clone https://github.com/fsferrara/fsferrara.github.io.git _deploy
[git:source]> bundle install
[git:source]> bundle exec rake generate
[git:source]> bundle exec rake deploy
```

The procedure is quite the same, except the fact I had to clone the *master* branch in the *_deploy* subfolder because I am using github-pages.

## My first post with Octopress

My first post is exactly this one you are now reading. As per Jekyll convention it is named in a format like `YYYY-MM-DD-post-title.markdown` and it is placed in the *source/_posts* directory.
Anyway, the *new_post* rake task simplify the operation of adding a new post. I could have run this:

```
[git:source]> bundler exec rake new_post["Blogging with Octopress and Jekyll"]
mkdir -p source/_posts
Creating new post: source/_posts/2018-01-05-blogging-with-octopress-and-jekyll.markdown
```

to have the new post file in the *source/_posts* folder. Additionally, the post file is created with the standard **Front Matter**:

```
[git:source]> cat source/_posts/2018-01-05-blogging-with-octopress-and-jekyll.markdown
---
layout: post
title: "Blogging with Octopress and Jekyll"
date: 2018-01-05 23:01:08 +0100
comments: true
categories:
---
```

*Front matter* is where Jekyll starts to get really cool. Any file that contains a [YAML front matter](https://jekyllrb.com/docs/frontmatter/) block will be processed by Jekyll as a special file. This block adds meta-data to the file sush as permalink, categories, tags, and so on.

## The about page

Similar to the post creation, the rake task *new_page* helps to create new pages.  
For the usual *about* page: `bundle exec rake new_page["about"]`. Here are [more information about Octopress pages](http://octopress.org/docs/blogging/).

The *about* page usually has a link in the main menu. To add such a link, modify the file `source/_includes/custom/navigation.html` to add a new entry.

## Preview the changes locally before publishing

Jekyll is able to generate and serve the static website locally. Octopress offers the rake task `bundle exec rake preview` that starts a web server locally listening at *http://localhost:4000/*.
This task will also watch for local changes and apply them immediately to the local preview.
