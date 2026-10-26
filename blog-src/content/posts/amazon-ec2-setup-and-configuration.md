---
title: "Amazon EC2 setup and Configuration 建立及設定"
date: "2015-11-09"
lang: en
tags: ["Amazon","Big Data","EC2"]
excerpt: "Amazon Elastic Compute Cloud (Amazon EC2) Registration 註冊 AWS Link 註冊網址 https://aws.amazon.com/free/ Pro 優點: Free for first year 第一年免費 Step:…"
legacySource: "https://chaowei0731.blogspot.com/2015/11/amazon-ec2-setup-and-configuration.html"
coverImage: "__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-01.png"
---

## Amazon Elastic Compute Cloud (Amazon EC2) Registration 註冊

AWS Link 註冊網址 [https://aws.amazon.com/free/](https://aws.amazon.com/free/)  
Pro 優點: Free for first year 第一年免費  
  
Step:  

1.  Login Credentials and Contact Information 註冊基本資料
2.  Payment Method (Must have credit card) 付款方式必須有信用卡
3.  Identity Verification (Enter verify code via phone) 透過電話輸入認證碼確認身份
4.  Confirmation (Enter verify code via Email)  Email驗證

  

## GitHub Education Pack 

GitHub Education Pack will give you $50~$110 USD promotion for AWS  
GitHub教育方案有$50~$110 USD額外優惠  

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-01.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwntMy8t3U5ujPnpOTNbMw-9h43YYVEY9IZ1JfBDW5DpJDfnsuL-C8eUucWe1ZOejQtvL6bkGczT8yrlI8aHi5F_lsH4jRhs3s_Qx5zvUyFhjpiyxXdvXf9g-rflgmgtv2WiKLjxpCx23g/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+21.38.42.png)

  
[https://education.github.com/pack/](https://education.github.com/pack/)  
  
Remember to enter your school email address.  
AWS Account ID is different then your Amazon login ID,It's a 12-digit ID.  
You can find your ID here  "AWS -> My Account -> Account Settings"  
  
下圖要注意的是Email必須留學校信箱  
AWS Account ID不是登入AWS的ID 是12位數的英文  
AWS -> My Account -> Account Settings 可以在這邊找到  
  

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-02.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaDG6JzOOHp6Rv5w1e7F6kBH29xP_ovk27t9Y0HTvNxwue8mCG5EZ3Jxnnc6cq9zyDFNpFtxMG33Fly6Q2fhnPUCrhx3rCkj4uaLtky_cr5klLD5OfQXzJ-F-9NIXmGblyK-cIeo47khxh/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+21.35.41.png)

  

  

## 01\. Launch Instance 啟動實體

Go to [https://console.aws.amazon.com/](https://console.aws.amazon.com/)

Click "EC2" from compute catalog

  

Click "Launch Instance"

  

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-03.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5dFZGx5X6YvmBsGPqHDFXwrTZRAxkTSJfeVxzqzL2A-12C_rHFX8EUOwBVVuuHUb81SvuH_IkAOyubo0MYT_jd9le8O5H5nAQ5bDRWuj7lvYKX6ayLcUK7oN2k0pRFFKQ3IyllcY1zpPT/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+22.13.40.png)

  

You can choose the Instance location from toolbar.

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-04.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8r6onbJ5m6fb8oskJguGeswER7_MCpErvKsn2S8JzUC0QSPPPPtI5-FYrn-C5UHU6uKZ-cUecqo0-0iEEGzid3-h-8zCzrqVgOfdjhrUFlv2jx8q1FU8Ohj65zAlgr54BszKXOFaAYKwU/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+22.17.44.png)

## [](https://www.blogger.com/null)02. Choose an Amazon Machine Image (AMI) 選擇系統映象檔

You can click the left box "Free Tier Only"

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-05.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihgj_IXVAprwyA3jlr8BxyODUwNKFjntek1W_RkqWd69FXb06kydKjPdNNf7vxVXxQCkTUAKauwRatASMFj-l1aQe65IK3ewxDd3NnDwTkTUPYFUExyZ7-CRTTU8eyXTI7_5mVaUasAz3I/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+22.14.56.png)

  

  

  

## 03. Choose Instance Type 選擇實例類型

t2.micro is the only one for free tier.

Click on "Next: Configure Instance Details"

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-06.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj54OJHWIS_uP-twJtEpRcfmhxVuXmyvRovT1Me9b0aCs8cA-vzmoZTkmwy2rqrYzNvJLBa0tsKwB4fkzdqGrZmMOepJjmDjLhyphenhyphenihrDiW8Q_65zSZg3YxJ5GUtigDezXkE0Rv83FxpxkqWt/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+22.20.43.png)

  

## 04. Configure Instance Details 設定實體細節

It's OK to use default value, but I will recommend to click on "Enable termination protection"

  

Click "Next: Add Storage"

  

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-07.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjg2ujFU4g0TPAU-a_LpDPkcHDPeisj0Wr3f3TZ4n3C1ncLE9_eGIpoz5dUuWJXtHnvZCGRGzX3Fcm1aqLlaNxIm1MatuphWejmstUWm1NdX_nKkSpN78et1z02Wk-5qBOI-H8pAkHC3nKW/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+22.23.48.png)

  

  

  

## 05\. Add Storage 新增硬碟空間

Free tier eligible customers can get up to 30 GB of EBS General Purpose (SSD) or Magnetic storage.

-   SSD - there is IOPS(I/O per sec) limits for SSD
-   Magnetic storage - No IOPS limits

Click "Next: Tag Instance" when finish setting

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-08.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZwV1nFNwCm0S6HtZkKpcvT_Q-d9Tj5ySTRIGVsH1epv7eLx_KMbKW-6JlnH7vE35pKV_nKA9zHK_mOnIPn0wR894bf6sKfTmMQP8bmN-2b00RHiZCX99goIsT7gGAGNWMVfmZs00ovXzz/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+22.28.01.png)

  

## 06. Tag Instance

Tag helps you identify among many instances, it's OK to skip this step.

Click "Next: Configure Security Group"

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-09.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZv7DtbAed2Bhz_mUmctIkaL0y5dQalyed2U7Dj3YC7PUN88DqdX8sMArt4pfa9fO0WrkCj4CFQIH7JOYPI-lSjCYeOEL_hUev9w0ZgBJQQHj95aL1fubW-LWHM35_3qQ-68mD9KxsS5CX/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+22.34.36.png)

  

## 07. Configure Security Group

-   SSH Port 22 - for telnet
-   HTTP Port 80 - for web page
-   SMTPS Port 465 - for mail server

Click "Review and Launch"  

  

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-10.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5dm1SRHueewSwTDgTdSO7n5q7ITo5LM7_Yvrc8o_EScjJXJCTfM4AaQUtJdYGx1TBSotuI0XY1eIeQDkwpRHoGX15MKlY017f28RzxWR8dH8Vl6MeonIoPd6FbBdQaR5wqdN4npbdmSv5/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+22.37.41.png)

## 08. Review Instance and Launch

Check everything is Ok then press Launch

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-11.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeLbUdJbwWIgU5w_pZxH9nXons4CpWZuPUIBfLF-ARXkNtrdvcptvuwBrPbPTijMPkrtID92Bt9N7mEnUiy1g_uJ9xoQH78bJgnp4-ANTFppFsdKbvC1KjJGZ_RIbUb9Hxz3rFCjZ7yn96/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+23.03.54.png)

## [](https://www.blogger.com/null)09\. Key Pair

"Create a new key pair"

Set a name and Download this Key.  
This is the password for SSH telnet connection.

Click "Launch Instances"

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-12.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEis-PlPVkLVNbX2hLyJo29sFUMchHGctqEqFTsfhHI7u8tsG79QZfW8tw8QxuMi_uz7n0YuMh4ktxVs7yHToCkswSwzKy6wT8jUlm2PnVNLd6ZfZJIOHvrE-NJEN5O_VN4sS2o1JCMWwlMM/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+23.06.17.png)

  

## 10\. Finish Instance Launch

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-13.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhByyFnjTelHift6q6R0qUMQMo79wzyARuuB6o00EewBmTGXsZyQz5cvq7J8yEN2lwqildbuTuQ81JlIjmlR8qKQW_F4Qgre6VPWH7bLp-I36SEtyHKXMgQtfyIWstbQIjxjRlU7uDCNQxj/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+23.08.17.png)

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-14.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhz1VvSaAOLiQNgUGvx5zFp_61E8z6Q8Pl0WXnFzwUt4RdpUGdDamKkpLF0UdzJLJxS0FmFSttyl9vNpZpdAneSAQ-GzA6KEtCCfq2cLJhA7-m2shq4fMUNRQbL-TjpKQkLi8DsY3GFw5JJ/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+23.08.49.png)

  

## 11. Allocate IP Address

Click "Elastic IPs" from left panel.

Click "Allocate New Address"

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-15.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglCNYnrRY4A2MCKuMV14u-slo4qJYcoDZgeqfdGggmczR-pmxCJ5YjBYBwCvhi3TQWHFCCaKlBmL1ywp-bykxpvowtahjIFn2JQQ9aOMIzlgZyRieLEFxFb7XbYUSlK3IhpZ1NY41uiuPx/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+23.14.57.png)

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-16.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoWBj9jRaV62WV82_hgp6g_Mld3ZRYSNhSQGgPN9A7bWb1-xYjjGgF-sNdxTkZZO25gvandEsGhjG2dCO8ocAzeiLZd7-lO9YlgZz-3ZAO7IO9hjopyatW0gNWAqfjhbLWxOuq9sx2roBF/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+23.18.40.png)

  

## 12\. Associate IP address to Instance

Click "Associate Address" from Action button.

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-17.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinDLw_W6RQvOAfpMKxOlS1EHtJ6SN0j1Y8oBVqFdeKa5HmU6oklAGikJz7p4Bxsx5-X_ewFzkrVS-SyDz5T8tPVRc2MtGzv651yCglxn44CjHzp-wN-UtrFO-cHtZ5ff2oXWnunPbtPF0N/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+23.20.35.png)

[![](__BASE__assets/images/legacy/amazon-ec2-setup-and-configuration/img-18.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsl8Upcr4YaELQzNLj7Gfp-PZTK0FgTeTm1m36RbRB_kHlMxeHShZMlMQtQGAgFrl9_hDrdRaCDyVMXa0eBVCKSt3yJmRkqcmcSX5PEYuwm0uSy8keTiwpLHJoElmFkN0-dxJsMYDUZbzg/s1600/%25E8%259E%25A2%25E5%25B9%2595%25E6%2588%25AA%25E5%259C%2596+2015-11-09+23.23.53.png)

  

  

### Now you can telnet to your Instance by this IP address!
