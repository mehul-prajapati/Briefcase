#include<ctype.h>

void main()
{
  int *i;
  int flag;
  clrscr();
  getint(i);
  printf("\nno entered is %d ", *i);
  printf("\n No ungetch done is %c",getch());
  getch();
}



int getint(int *pn)
{
  int c, sign;

  while (isspace(c= getche(pn)))
   ;
  if (!isdigit(c) && c != '+' && c != '-')
  {
    ungetch(c);
    return 0;
  }
  sign = (c == '-') ? -1: 1 ;

  if (c == '+' || c == '-')
    c =getche(pn);
  if(!isdigit(c))
  {
    ungetch(c);
    if (c == '-' || '+')
      ungetch((sign == -1) ? '-' : '+');
//
    return 0;
  }
  else
  {
    for (*pn = 0; isdigit(c); c = getche(pn))
      *pn =10 * *pn + (c - '0');
    *pn *= sign;
  }
  return c;
}