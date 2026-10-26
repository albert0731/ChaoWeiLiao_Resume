---
title: "Install Spark and Scala on Ubuntu"
date: "2015-11-10"
lang: en
tags: ["Amazon","Big Data","EC2","Scala","Spark"]
excerpt: "Previous \"Telnet to AWS EC2 instance\" Following are demonstration on AWS EC2 Ubuntu. Install Java sudo apt-add-repository ppa:webupd8team/ja…"
legacySource: "https://chaowei0731.blogspot.com/2015/11/install-spark-and-scala-on-ubuntu.html"
coverImage: "__BASE__assets/images/legacy/install-spark-and-scala-on-ubuntu/img-01.png"
---

## [Previous "Telnet to AWS EC2 instance"](http://chaowei0731.blogspot.com/2015/11/telnet-to-aws-ec2-instance.html)

  

Following are demonstration on AWS EC2 Ubuntu.

  

## Install Java

sudo apt-add-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer

## Install Git 

sudo apt-get install git

## Download Spark

This link is Spark 1.4.1 Pre-build for hadoop 2.6

Link might be change. 

Please check [http://spark.apache.org/downloads.html](http://spark.apache.org/downloads.html) , if following link missing.

wget http://d3kbcqa49mib13.cloudfront.net/spark-1.4.1-bin-hadoop2.6.tgz
tar -xzf spark-1.4.1-bin-hadoop2.6.tgz

## Install Scala

This demo use Scala version 2.10.4  

wget  http://www.scala-lang.org/files/archive/scala-2.10.4.tgz
tar -xzf scala-2.10.4.tgz
sudo apt-get install scala

##  Environment setup

Check your path of Spark, Scala and Java first, then

vi ~/.bashrc

Attache following  

\# export environment variable
export SPARK\_HOME=/home/YourUserName/spark-1.4.1-bin-hadoop2.6
export SCALA\_HOME=/home/YourUserName/scala-2.10.4
export JAVA\_HOME=/usr/lib/jvm/java-8-oracle
export PATH=$SCALA\_HOME/bin:$SPARK\_HOME/bin:$JAVA\_HOME/bin:$PATH

Reload bashrc  

cd
. .bashrc
scala -version
#Scala should update to 2.10.4

## Result

spark-shell 

  
  

[![](__BASE__assets/images/legacy/install-spark-and-scala-on-ubuntu/img-01.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguRZPn-GqyGJ0i4zYG6WpDtrgIDI99bZpuVu4WDKg-NoGqFAzINwAf7cDsZk8IfuuTYyvSs5h8C_Hq_obPBWkrpjrxt4wyByXoLY6osqSxwPytrHP2YEcbKjmQRUWE0VvSC1ItWZxVIZuc/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-10+02.45.15.png)
