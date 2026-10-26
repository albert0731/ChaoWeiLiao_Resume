---
title: "atoi()  itoa()  String to Integer or Integer to String"
date: "2015-11-04"
lang: en
tags: ["C"]
excerpt: "String to Integer or Integer to String #include <stdlib.h> // for malloc #include <string.h> // for strlen int my_atoi(char *); int my_itoa(…"
legacySource: "https://chaowei0731.blogspot.com/2015/11/atoi-itoa-string-to-integer-or-integer.html"
---

## String to Integer or Integer to String

#include <stdlib.h> // for malloc
#include <string.h> // for strlen
int my\_atoi(char \*);
int my\_itoa(int);
void reverse(char \*);
int main(int argc, char const\* argv\[\])
{
    char s\[\] = "12345";
    //string to integer
    int i = my\_atoi(s);
    printf("my\_atoi %d\\n",i);

    //integer to string
    char \*a = my\_itoa(i);
    //12345
    printf("my\_itoa %s\\n",a);
    a = my\_itoa(-i);
    //-12345
    printf("my\_itoa %s\\n",a);
    return 0;
}
int my\_atoi(char \*s){
    int sum = 0;
    int pos = 0;
    if(s\[pos\]=='-')
        pos++;

    while(s\[pos\] != '\\0'){
        sum = sum\*10+s\[pos\]-'0'; //remember to minus '0'
        pos++;
    }
    if(s\[pos\]=='-')
        return 0-sum;

    return sum;
};

void reverse(char \*s){
    for(int i = 0, j = strlen(s)-1; i < j ; i++,j--){
        int c = s\[i\];
        s\[i\] = s\[j\];
        s\[j\] = c;
    }
}

int my\_itoa(int n){
 char \*s = (char\*)malloc(log10(n)+1 \* sizeof(char)); // allocate the digits of integer
    int flag = 1; // flag:1 pos, 0:nag
    if (n < 0){
        n = -n;
        flag = 0;
    }
    int pos = 0;
    while(n != 0){
        s\[pos++\] = n%10 + '0'; //remember to add '0'
        n = n/10;
    }
    if(!flag)
        s\[pos++\] = '-';
    s\[pos\] = '\\0';
    reverse(s);
    
    return s;
}
