/*-----------------------------------------------------------------------
Name	:	EX5-11.C
Purpose	:   Modify etab and dtab to accept a list of tab stops as
	:?      arguments. use default tab stops if no arguments.
	:A
Note	:   source form K&R
	:
Author	:	shreshtha
Date	:	11 Sep 2005
------------------------------------------------------------------------*/
#define TABSIZE 8
int atoi(char s[]);

void main(int argc, char *argv[])
{
   char inputAscii;
   int userTab, counter;

   if(argc == 1)
     userTab = TABSIZE;
   else
     userTab = atoi(argv[1]);

   for (inputAscii = getch();inputAscii != '\r' ;inputAscii = getch())
   {
     if (inputAscii == '\t')
     {
       for (counter = 0; counter<= userTab; counter++)
	 putch(' ');
      }
     else
       printf("%c", inputAscii);
   }

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


