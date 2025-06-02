.PHONY: all install serve clean update tools

all: install serve

install:
	bundle install

serve:
	bundle exec jekyll serve --incremental --baseurl=""

clean:
	rm -rf _site .jekyll-cache .sass-cache .jekyll-metadata

update:
	bundle update github-pages

tools:
	gem install bundler
