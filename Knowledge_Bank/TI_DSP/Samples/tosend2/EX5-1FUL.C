/*-----------------------------------------------------------------------
Name	:	ex5-1.c
Purpose	:	getint treats a + or - not followed by a digit as a valid
	:	representation of zero. it is fixed here  and such characters
	:	are pused back.
	:
ungetch	:       Pushes a character back to the keyboard
	:	ungetch pushes the character ch back to the console, causing
	:	ch to be the next character read.
-->	:   	ungetch fails if it is called more than once before the
	:	next read.
	:?	if -\n is done then \n is pushed back but before next read
	:       - cannot be pushed back.
	:A 	a flag is set that there is one more ungetch to be done
	:	is returned to main()
	:?	what to do is 7g is entered whether to take as 7 or none
	:A	take 7 as integer and ungetch g
Author	:	shreshtha
Date	:	06 Sep 2005
------------------------------------------------------------------------*/
#include<ctype.h>

//VALID CHARs are '-', '+', and numbers (0 to 9)

void main()
{
  int *i;
  int *flag;
  char lastChar;
  clrscr();
  //then fn has returnd one char and other char is sign of flag
  //use returned int after converting to char (char coz thats why fn returned)

  lastChar = getint(i, flag);
  if(*flag)
   {
      printf("\nLast char returned is %c\n", lastChar);
      printf("Integer returned is %d\n", *i);
   }
  else
  {
    printf("\nLast char returned is \'%c\'", lastChar);
    printf("\n\nBut no int entered by user\n\n");
  }

  printf("\nNow ungetch done in main() is %c",getch());
  getch();
}

int getint(int *pn, int *flag)
{
  int c, sign;

  //this while loop escapes whites but FORWARDS a valid -,+ or number
  //to next statement
  while (isspace(c= getche()))
   ;

  //it checks the valid char forwarded by previous statement
  if (!isdigit(c) && c != '+' && c != '-')
  {
    //if not valid return char for others to read
    ungetch(c);
    return 0;
  }

  //if it is valid char and - then sign= -1 else 1
  sign = (c == '-') ? -1: 1 ;

  //read next char if last was '-' otherwise store the num received
  if (c == '+' || c == '-')
    //extra getche() for minus e.g. -34 so to read 3 after '-'
    //but no extra read is needed if only 34 is entered
    c =getche();

  //PATCH : this checks that after '-' or '+' is there another
  //      : valid character or not , if not return it.
  if(!isdigit(c))
  {
   // What if "-j" is read , u shd unget '-' and 'j' both
   // but there comes the limitation "-->" i.e. no 2 ungetch

    ungetch(c);
//    printf("\tinside patch %c",c);
    if (c == '-' || '+')
      //as consecutive ungetch cant be done so char is returned
      //for main() to handle it . It is either '+' or '-'
      c = ((sign == -1) ? '-' : '+');

    //if here i return c then how to tell that "no valid
    //integer was entered and dont use *pn"
    //Ans: Another flag must b included as pointer for validity
    //c has to be returned as no two ungetch
    *flag = 0;
  }
  else
  {
    for (*pn = 0; isdigit(c); c = getche())
      *pn =10 * *pn + (c - '0');
    *pn *= sign;
    *flag = 1;
  }

  //return Last wrng char read which broke for loop
  return c;
}