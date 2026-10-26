---
title: "First Spark Program on EC2"
date: "2015-11-10"
lang: en
tags: ["Amazon","Big Data","EC2","Python","Scala","Spark"]
excerpt: "First Scala Program on EC2 1. Upload our test file \"review.csv\" via FTP (This file include the score from 1~5 for some restaurant ) 2. Telne…"
legacySource: "https://chaowei0731.blogspot.com/2015/11/first-spark-program-on-ec2.html"
---

## First Scala Program on EC2

1\. [Upload our test file "review.csv" via FTP](http://chaowei0731.blogspot.com/2015/11/connect-and-upload-files-to-aws-ec2-by.html)

    (This file include the score from 1~5 for some restaurant )

  

2\. [Telnet to EC2 instance](http://chaowei0731.blogspot.com/2015/11/telnet-to-aws-ec2-instance.html)

  

3\. spark-shell

  

4\. testing code  
    This code will count the average score and list top 10.

val lines = sc.textFile("review.csv")
val rew\_rates =lines.map(l => l.split("\\\\^")).map(l => (l(2), l(3).toFloat))
val sum\_rew\_rates = rew\_rates.mapValues(x => (x, 1)).reduceByKey((x, y) => (x.\_1 + y.\_1,x.\_2 + y.\_2))
val avg\_rew\_rates = sum\_rew\_rates.map(x=>(x.\_1,x.\_2.\_1/x.\_2.\_2))
val pre\_output = avg\_rew\_rates.sortByKey()
val output = pre\_output.sortBy(x=>x.\_2,false)
output.take(10)

## First Python Program on EC2

1\. [Upload our test file "review.csv" via FTP](http://chaowei0731.blogspot.com/2015/11/connect-and-upload-files-to-aws-ec2-by.html)

    (This file include the score from 1~5 for some restaurant )

  

2\. [Telnet to EC2 instance](http://chaowei0731.blogspot.com/2015/11/telnet-to-aws-ec2-instance.html)

  

3\. pyspark

  

4\. testing code  
    This code will count the average score and list top 10.

file=sc.textFile("review.csv")
file\_map = file.map(lambda x: x.split('^')).map(lambda x: (str(x\[2\]),float(str(x\[3\])))) 
sum = file\_map.mapValues(lambda x: (x, 1)).reduceByKey(lambda x,y: (x\[0\] + y\[0\],x\[1\] + y\[1\]))
avg = sum.map(lambda x:(x\[0\],x\[1\]\[0\]/x\[1\]\[1\]) )
output = avg.sortByKey()
output.takeOrdered(10, lambda x: 5.0 - x\[1\])
output.take(10)
