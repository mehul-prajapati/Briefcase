/*-----------------------------------------------------------------------
Name	:	ex3-6.c
Purpose	:   converts a integer to string
		:?
		:A
Note	:   source form K&R
		:
Author	:	shreshtha
Date	:	03 Sep 2005
------------------------------------------------------------------------*/

itoa(int n, char s[]);
reverse(char s[]);

void main()
{
   char * string;
   int num = -1234;

   clrscr();
   itoa(num, string);				//inc value is printed for check
   printf("for string %s integer incremented value is %d", string, ++num);
   getch();
}

itoa(int n, char s[])
{
   int i, sign;
   if ((sign = n) <0 )		//change no. to positive
     n= -n;
   i=0;
   do
   {
     s[i++] = n% 10 + '0' ;	//convert integer ASCIIs to actual integers
   } while((n /=10) >0);
   if (sign < 0)			//Note that it is stored in reverse
     s[i++] = '-' ;			//store sign too
   s[i] = '\0';
   reverse(s);				//as string storage was reverse 
   return 0 ;
}

reverse(char s[])
{
  int c, i,j;

  for (i = 0, j = strlen(s) - 1 ; i<= j; i++ , j--)
  {
    c= s[i];
    s[i] = s[j];
    s[j] = c;
   }
   return 0;
}

