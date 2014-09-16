/*-----------------------------------------------------------------------
Name	:	EX5-11.C
Purpose	:   Modify entab that replaces strings of blanck by the min no. of
		:?  tabs and blanks to achieve the same spacing.
		:A
Note	:   source form K&R
		:
Author	:	shreshtha
Date	:	11 Sep 2005
------------------------------------------------------------------------*/
#include<stdio.h>
#include<conio.h>
#include<ctype.h>

#define NULL 0
#define TABSIZE 8
#define MAXLEN 50

int atoi(char s[]);

/* User have to enter the string in command prompt */
/* c:\EX5-11b hi       how   r u  */
/* where EX5-11b is exe and input is inline command*/
void entab(int userTab);
void main(int argc, char *argv[])
{
   char inputAscii;
   int *string;
   int userTab;

   if(argc == 1)
     userTab = TABSIZE;
   else
     userTab = atoi(argv[1]);

   entab(userTab);
}

void entab(int userTab)
{
  /* Counter is not initialised here as it is not done in embd C*/
  int count = 0, outCount = 0;
  int i,leftSpace;
  int tabCnt = 0;
  int totalSpace = 0;
  char string[MAXLEN];
  char outStr[MAXLEN];
  /*User string read*/
  while ((string[count++] = getche()) != '\r')
   ;
  string[count] = '\0';
  printf("%s\n", string);

  count = 0;
  leftSpace = 0;
  while((string[count]) != NULL)
  {
    if (isspace(string[count]))
    {
      while(isspace(string[count++]))
	totalSpace++;

      --count;
      tabCnt = totalSpace / userTab;
      leftSpace = totalSpace % userTab;

      for(i=0; i<tabCnt; i++)
	outStr[outCount++] = '\t';
      for(i=0; i<leftSpace; i++)
	outStr[outCount++] =' ';
    }
    else
      outStr[outCount++] = string[count++];
  }
  outStr[outCount] = '\0';
  printf("%s", outStr);
}

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
