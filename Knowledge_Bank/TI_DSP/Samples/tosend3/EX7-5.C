/*-----------------------------------------------------------------------
Name	:	EX7-3.c
Purpose	:   Polish calculator
		:
		:
Note	:   Still to convert normanl infix expression to polish expression
Author	:	shreshtha
Date	:	12 Sep 2005
------------------------------------------------------------------------*/

/* User have to enter the mathematical expression in polish expression*/
/* try (1 - 2) * (4 + 5) = -9*/
/* 1 2 - 4 5 + * then press enter key*/



#include<stdio.h>
#include<stdlib.h>
#define MAXVAL 100

/* max size of operand or operaor*/
#define MAXOP 100 
/* Signal that no. was found*/
#define NUMBER '0' 

int getop(char []);
void push(double);
double pop(void);

int sp = 0;
double val[MAXVAL];

void main()
{
  int type;
  double op2;
  char s[MAXOP];
  char postExp[] ="1 2 - 4 5 + *";
  int postCnt;

  clrscr();

  while ((type = getop(s))  != '\r')
  {
    switch (type)
    {
     case NUMBER:
       push(atof(s));
       break;
     case '+':
       push(pop() + pop());
       break;

     case '*':
       push(pop() * pop());
       break;

     case '-':
       op2 = pop();
       push(pop() - op2);
       break;

     case '/':
       op2 = pop();
       if(op2 != 0.0)
	 push(pop() / op2);
       else
	 printf("Divide by 0");
       break;

     case '\n':
       printf("\t%.8g\n", pop());
       break;

     default:
       printf("Error: unknmown command %s\n", s);
       break;
    }
  }
  printf("\nAns is %f", pop());
  getch();
}

/*get last char pushed in stack*/
double pop(void)
{
  if(sp>0)
    return val[--sp];
  else
  {
    printf("error :  stack empty\n");;
    return 0.0;
  }
}

void push(double f)
{
  if (sp < MAXVAL)
    val[sp++] = f;
  else
    printf("error : stack full cant push more ya %g\n", f);
}

/* Get operand or operator */
int getop(char s[])
{
  int i, c;

  while ((s[0] = c = getche()) == ' ' || c == '\t')
   ;
  s[1] = '\0';
  if(!isdigit(c) && c != '.')
    return c;
  i = 0;
  if(isdigit(c))
   while (isdigit(s[++i] = c =getche() ))
    ;
  s[i] = '\0';
  if (c != '\r')
    ungetch(c) ;
  return NUMBER;
}
