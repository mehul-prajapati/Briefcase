#include<string.h>
#include<stdio.h>
int getline(char *,int);
void main()
{
  char *str;

  clrscr();
  getline(str, 30);
  printf("%s\n", str);
  getch();
}