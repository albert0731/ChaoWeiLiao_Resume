---
title: "Telnet to AWS EC2 instance"
date: "2015-11-09"
lang: en
tags: ["Amazon","Big Data","EC2"]
excerpt: "Amazon EC2 setup and Configuration 建立及設定 Start telnet by Terminal I use Terminal on Mac OS for following example Telnet command : ssh -i ~/P…"
legacySource: "https://chaowei0731.blogspot.com/2015/11/telnet-to-aws-ec2-instance.html"
coverImage: "__BASE__assets/images/legacy/telnet-to-aws-ec2-instance/img-01.png"
---

[Amazon EC2 setup and Configuration 建立及設定](http://chaowei0731.blogspot.com/2015/11/amazon-ec2-setup-and-configuration.html)

  

## Start telnet by Terminal

I use Terminal on Mac OS for following example

  

Telnet command :

ssh -i ~/Path/Name\_Of\_Key.pem username@IP\_Address

> /Path/Name\_Of\_Key.pem : Location of "[the Key file](http://chaowei0731.blogspot.com/2015/11/amazon-ec2-setup-and-configuration.html#KeyPair)"  
>  username depend on "[which Amazon Machine Image you use](http://chaowei0731.blogspot.com/2015/11/amazon-ec2-setup-and-configuration.html#AMI)"  
> Amazon Linux - username : ec2-user  
> Ubuntu Server - username : ubuntu

  

[![](__BASE__assets/images/legacy/telnet-to-aws-ec2-instance/img-01.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzwzxzx3U8oItx8RQROJ2BRKTnwkc-fuDphaGKVlwSXmAFbxSrE51xTpQijSqRLAZQklhGwz5u00hWThKPajWOmBDGfS-ze3E9HZJ9v12OLzCc4FVJXuehObyAFZ7u49GdhIjo5bN6xbzm/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-10+00.01.45.png)

  
  
Don't worry if you can't remember, just check your AWS management page  
Click "Instances" -> "Actions" -> "Connect"  
It will show you the command you need.  
You can copy the Example, just change the PEM file path.  

[![](__BASE__assets/images/legacy/telnet-to-aws-ec2-instance/img-02.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdCvqC15w7C8CNZouh8H5PPnyoSWj_KSg6iyLruxbymYeEeDBYrMhjJZijGxWOuR3glEZZPbhZBSHDqofgtmBb8nlx3ITAr7Cn0weENguf8BjWQ_7DKoZ1jxheTAguUDFA0SDYF27lRFI2/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-10+00.21.48.png)

  

## Unprotected Private Key File

If "WARNING: UNPROTECTED PRIVATE KEY FILE!" pops up?

It's because the permission of PEM file didn't restrict to user only.

[![](__BASE__assets/images/legacy/telnet-to-aws-ec2-instance/img-03.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRp4Odj62Ul5b3e84gWQvgomJ-J3cq-qrfevh9U3rVC2xj34Ejyw-BivIGCNQBRct3-xw-uC9ZCW7WAFH-QudhUDSMgh9RS3dvmvOrjYiZTgbRnmsc4EERSthnewp-FzvfU9-gxkXFCYvC/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-10+00.28.18.png)

  
  
use follow command to change PEM file permission.  
  

chmod 400 ~/Path/Name\_Of\_Key.pem

  

## Connect

Are you sure you want to continue connecting (yes/no)?

Type "yes"

[![](__BASE__assets/images/legacy/telnet-to-aws-ec2-instance/img-04.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNakfLWKX-hrBBbj2H9tFP-em0IRPTzb7zTUL2hWsbz84wzUELnxVSM0ywKqawQjykSwuXuO2-9m21B1a8JiAf7kcd5uROuU_7PIt5_sjFqiXPj9bF3NoSMEH87qBiaFzWboVQ-3qo3zda/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-10+00.36.23.png)

  
  
Congratulations!! You connected to your own cloud server :P  

[![](__BASE__assets/images/legacy/telnet-to-aws-ec2-instance/img-05.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg56ATspphYchwxMmuOGMBSIvnsAaSJnv_HZEAUIT8nsTLH2WrIFCX5XAjzwYbKsIIn8AXbnJnJfLvN_SSmB-RSCMfXrfJwEG1xwGbqp_caXJNSDX8Z5YitLqptY-VBheEUAo_f7TtYYF1L/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-10+00.37.22.png)

  
  
  
  

## Troubleshooting 

If you reinstall your instance, this Warning pops up.

  

WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!

[![](__BASE__assets/images/legacy/telnet-to-aws-ec2-instance/img-06.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXapQPrRDjROF-ofK6rA0L4lK2FXLOiRYEhpL7iqDipHewNrn_XrKcT0ng2WXldvxZNKWUECCtbBMNfdNW8VWvdOja-0KThHK3q5L75BSlCvHyqAbGkbwoeoKX3yd97g8ksa_BXOkDMF2H/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-10+01.17.49.png)

Terminal will generate a certification After first SSH,

The local host(your computer) didn't know you reinstall the server

You have to reset the SSH certification by following command

> ssh-keygen -R <host IP>
