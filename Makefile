.PHONY: all install serve clean nuke update tools

all: install serve

install:
	bundle config set path 'vendor/bundle'
	bundle install

serve:
	bundle exec jekyll serve --incremental --baseurl=""

clean:
	rm -rf _site .jekyll-cache .sass-cache .jekyll-metadata

nuke: clean
	rm -rf vendor/bundle

update:
	bundle update github-pages

tools:
	gem install bundler
