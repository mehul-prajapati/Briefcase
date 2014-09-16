/*-----------------------------------------------------------------------
Name	:	ex4-5.c
Purpose	:   Give access to some math functions
	:?
	:A
Note	:	
	:
Author	:	shreshtha
Revision:	
Date 	:	04 Sep 2005
------------------------------------------------------------------------*/
#include<math.h>
#define PI 3.147 

int main()
{

 double num;
 int x;
 int choice;

  clrscr();
  
  while(1)
  {
    printf("\n1: Sine\n2: Cosine\n3: Exponential\n4: Power\n5: EXIT\nYour choice = ");
    scanf("%d",&choice);

    switch (choice)
    {
      case 1 :
		printf("\n Number = ");
		scanf("%lf",&num);
	printf("\nIts sinusoidal is sin(%lf)= %lf",num,sin(num*(PI/180.0)));
		break;
		
      case 2 :
	    printf("\n Number = ");
		scanf("%lf",&num);
	printf("\nIts Cosine is cos(%lf)= %lf",num,cos(num*(PI/180.0)));
		break;


      case 3 :
	    printf("\n Number = ");
		scanf("%lf",&num);
	printf("\nIts Exponential is exp(%lf)= %lf",num,exp(num));
		break;

	  case 4 :
	    printf("\n Number = ");
		scanf("%lf",&num);
	printf("\n Enter the value of the power integer value =");
	scanf("%d",&x);
	printf("\nIts Power is pow(%lf,%d)= %lf",num,x,pow(num,x));
		break;

      case 5 :
	exit(1);
	break;


      default :
	printf("Enter from the available options\n");
	break;

    }
  }
}


