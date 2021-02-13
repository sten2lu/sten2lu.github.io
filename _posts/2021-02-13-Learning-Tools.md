---
layout: post
title: "The Tools of Blogging"
---

Since I decided to give blogging a shot, on of the first points on my To Do List is to learn the tools at my disposal and improve my workflow.
So this is written for the case I ever forget how I did my initial setup and/or you may be interested. 


## Jekyll
Jeykyll was created by Tom Preston-Werner to create simple static HTML websites, with content hosted by GitHub pages and version-control by GitHub.
Meaning that all that is needed to create a Jekyll Website live on the internet is a GitHub account - which is completely free.
But it is not only free, another advantage is the simplicity of Jekyll which directly translates into ease of use and speed. There are no databases required and the sites are written as simple markdown files.

What Jekyll actually does is processing the Markdown files with predefined templates to static HTML files for display.
Since the HTML files are static there won't be any user interaction which may be a negative, but on the plus side there is almost no security risk involved due to the lack of interaction possibilities.

P.s. The blog you currently see is built with Jekyll.


## The Friction
Since every change in your website repository will be on your online website after a short push on GitHub it may be tempting to just do that for every change of your website - without ever testing it locally beforehand.
This is generally a VERY bad practice when coding, but it is also quite slow and may lead in this case to embarassing moments regarding ones spelling, grammar or maybe suboptimal images. 
To prevent falling into this trap it is usually the best method to minimize the friction of doing the right thing, in this case by implementing a simple way of running the website on your local machine.

Just to prevent any unwanted embarassment and maybe one could even learn something along the way. :D 

## The setup
Jekyll is a package written for the programming language Ruby, but actually it is a gem since packages are called gems in Ruby.
- Fork the [jekyll-now](https://github.com/barryclark/jekyll-now) repository on Github
- Clone your forked repository onto your local machine
- Get Ruby 
  - For macOS it is advised to use Homebrew Ruby (over preinstalled)
    - do not forget to add Homebrew Ruby to your $PATH Variable after installation
- Follow the official Jekyll Documenation [ruby 101 guide](https://jekyllrb.com/docs/ruby-101/#gemfile) 
- Go to the local repository with a terminal and execute '$bundle add webrick'
- Update the .gitignore
- TADA! we are finished

Since the blog can now be previewed locally and changes can be seen in realtime: I wish happy blogging. :D
  
<!-- - The Blog is Based on Jekyll - which is a gem for Ruby
  - Initial Setup is taken from [Barry Clarks article](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/)
- When using macOS for development:
  -  Homewbrew Ruby is to be preferred (pre-installed version gives no access to certain gems) 
     - do not forget to add Homebrew Ruby to your $PATH Variable after installation
- Follow the official Jekyll Documenation [ruby 101 guide](https://jekyllrb.com/docs/ruby-101/#gemfile) 
- TADA! we are finished -->


## Other stuff 
- [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links)

## Internal Dialog
Well that was quite a clever idea to write your second blogpost about how to speed up your blogging progress while not embarassing yourself.
Some people may say that this is cheap - and it maybe even is, but I still stand for it. :D





<!-- Next you can update your site name, avatar and other options using the _config.yml file in the root of your repository (shown below).

![_config.yml]({{ site.baseurl }}/images/config.png)

The easiest way to make your first post is to edit this one. Go into /_posts/ and update the Hello World markdown file. For more instructions head over to the [Jekyll Now repository](https://github.com/barryclark/jekyll-now) on GitHub. -->