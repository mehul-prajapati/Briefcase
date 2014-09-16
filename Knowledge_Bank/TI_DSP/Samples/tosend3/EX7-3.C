/*-----------------------------------------------------------------------
Name	:	EX7-3.c
Purpose	:   Argument processing in minprintf() function
	:?
	:A
Note	:       source form K&R
Author	:	shreshtha
Date	:	11 Sep 2005
------------------------------------------------------------------------*/
#include<d:\tc\include\stdio.h>
#include<d:\tc\include\stdarg.h>
#include<d:\tc\include\conio.h>
#define MAX 100

void minprintf(char *format, ...);


void main ()
{
//  char maxinput[MAX];
  char *inputStr;
  int i = 5;
  float j = 22.235;
  char *s = "good day";
  clrscr();

  printf("Suppose int i=5, float j=22.235, char *s =\"good day\"\n");
  printf("Now use i,j,s in your printf statement\n\n");
  printf("Enter the string u wud hv written inside printf(\"...\")\n");

  gets(inputStr);

  minprintf(inputStr, i, j, s);

  getch();
}

void minprintf(char *format, ...)
{
  va_list ap;
  char *charPtr, *sval;
  int ival;
  double dval;
  unsigned uval;



  /*Make ap point to 1st unnamed arg */
  va_start(ap, format);
  for(charPtr = format ; *charPtr; charPtr++)
  {
    if (*charPtr != '%')
    {
      putchar(*charPtr);
      continue;
    }

    switch(*++charPtr)
    {
    /* same for i and d*/  
	case 'i':
	case 'd':
	ival = va_arg(ap, int);
	printf("%d", ival);
	break;

      case 'f':
	dval = va_arg(ap, double);
	printf("%f", dval);
	break;

      case 's':
	for (sval = va_arg (ap, char *); *sval; sval++)
	  putchar(*sval);
	break;

	  case 'u':
		  uval = va_arg(ap, unsigned int);
            printf("%u", uval);
            break;



	case 'g':
		dval = va_arg(ap, double);
        printf("%g", dval);
        break;

      default:
	putchar (*charPtr);
	break;
    }
  }
  va_end(ap);		/* clean up when done */
}




