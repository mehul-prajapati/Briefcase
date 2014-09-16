/*-----------------------------------------------------------------------
Name	:	ex4-12.c
Purpose	:   store as char array for a given integer using recursion
		:?
		:A
Note	:
		:
Author	:	shreshtha
Revision:
Date 	:	04 Sep 2005
------------------------------------------------------------------------*/
void itoa(int num, char *s);

void main()
{
  int num;
  char numChar[7];
  clrscr();
  printf("Number = ");
  scanf("%d", &num);
  printf("\n");
  itoa(num,numChar);
  printf("Number %d in char is %s",num, numChar);
  getch();
}
void itoa(int num, char *s)
{
  static int i = 0;
  if (num<0)
  {
    s[i]='-';
    num = -num;		///make num positive now
  }
  if (num/10)
    itoa(num/10, s);

  s[i]= (num % 10 + '0');
  s[i+1]='\0';
  i = i+1;
}
