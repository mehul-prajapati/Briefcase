#include<stdio.h>
#define MAX 30

void main()
{
  char *name;
  char *string;
  FILE  *fp;
  printf("Enter the file name: ");
  gets(name);
  if((fp= fopen (name, "r")) == 0)
  {
    printf("Unable to open file\n");
    exit (1);
  }
  fgets(string, MAX, fp);
  printf("String read is %s", string);
  getch();
}


