/*-----------------------------------------------------------------------
Name	:	ex3-4.c
Purpose	:   converts a string in to integer
	:?
	:A
Note	:   source form K&R
		:	Check ASCII conversion from getascii.exe
Author	:	shreshtha
Date	:	03 Sep 2005
------------------------------------------------------------------------*/

#include<ctype.h>

int atoi(char s[])
{
  int i, n, sign;
  for (i = 0; isspace(s[i]); i++)	//leave all blank spaces
    ;
  sign = (s[i]== '-') ? -1 : 1;		//check for sign	
  if (s[i] == '+' || s[i] == '-')	//check sign + or - then increment index for next storage 
    i++;
  for (n=0; isdigit(s[i]); i++)
    n = 10 * n +(s[i] - '0');		//add ASCII of 0 to shift ASCII of integer to integers
  return sign * n;					//-1 * num = -num i.e. multiply num with its sign
}

void main()
{
  char *string = "-1234";
  int  num;

  clrscr();
  num = atoi(string);
  printf("string is %s and integer is %d", string , num);
  getch();
}

