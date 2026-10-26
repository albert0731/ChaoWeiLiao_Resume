---
title: "Connect and upload files to AWS EC2 by FTP"
date: "2015-11-10"
lang: en
tags: ["Amazon","EC2"]
excerpt: "Connect to AWS EC2 by FileZilla Following example using FileZilla 3.140 for Mac OS Add Key to FileZilla FileZilla or (Edit) or (Preferences)…"
legacySource: "https://chaowei0731.blogspot.com/2015/11/connect-and-upload-files-to-aws-ec2-by.html"
coverImage: "__BASE__assets/images/legacy/connect-and-upload-files-to-aws-ec2-by/img-01.png"
---

## Connect to AWS EC2 by FileZilla 

Following example using FileZilla 3.140 for Mac OS  
  

## Add Key to FileZilla

1.  FileZilla or (Edit) or (Preferences) -> Settings -> Connection -> SFTP
2.  Click "Add key file"
3.  Select [your Key saved before](http://chaowei0731.blogspot.com/2015/11/amazon-ec2-setup-and-configuration.html#KeyPair)
    
    [](http://chaowei0731.blogspot.com/2015/11/amazon-ec2-setup-and-configuration.html#KeyPair)[![](__BASE__assets/images/legacy/connect-and-upload-files-to-aws-ec2-by/img-01.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjp-09lcCguANT8naiaSIUAF0NRPxu3hoJLfbI1zdXm6dX6lNbCpgDhdrTyFz30PP13-wzCSbxANJXlLnbf6PWM3KAqmjeP0oWy08kjFXEW4zj6OnT3wBkmDsv6W3dE0Gh70isB6nvX2NZu/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-11+00.55.58.png)
    
4.  File -> Site Manager.
5.  Add a new site with the following parameters:

-   **Host :** Your IP Address of EC2 instance
-   **Protocol :** SFTP
-   **Logon Type :** Normal
-   **User :** For Amazon Linux "ec2-user", 

-   For Ubuntu "ubuntu". 
-   [Check your AWS management page if not sure.](http://chaowei0731.blogspot.com/2015/11/telnet-to-aws-ec2-instance.html)

-   **Password:** Leave it there
    
    [![](__BASE__assets/images/legacy/connect-and-upload-files-to-aws-ec2-by/img-02.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjV1Fhfz-2jZ14wMUnySTVz2c6lAqCoXka5Uj0d4rsCEOlEdvSXYSVHpUg5iCK5IdvpFHYRvlIvRJKXWcgm_p6OLWA5x_ILVpTM3VOfFZpdU08htyuOjd3A0PZQ2PhQLmRVp4plxmfPclAA/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-11+01.03.38.png)
    

6\. Click "Always..." and OK 

[![](__BASE__assets/images/legacy/connect-and-upload-files-to-aws-ec2-by/img-03.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkg5GmLVxltkZGEsTM2Ua9x_LBjMC8Du-ad9NR8czR8rkQNlzpl0EKUOQT6MoXgGyYIc-S7B5szm1L0pR0aheLgwcEAf-zGgzQ-mIHZa1RiknEdwZrX3FRVWHnUNWftYNGPLtcB62wVLDG/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-11+01.04.31.png)
