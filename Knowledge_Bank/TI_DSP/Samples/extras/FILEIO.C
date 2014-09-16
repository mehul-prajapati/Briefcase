#include<stdio.h>
#include<conio.h>
#include<ctype.h>
void main()
{
  //this structure is required by DOS.h t supply todays date
  struct date
  {
    int da_year;     /* current year */
    char da_day;     /* day of the month */
    char da_mon;     /* month (1 = Jan) */
  }d;

 // int BUFFERSIZE = 50;
//  int today[7];
  char *string = "/*abcd*/e\\\"fghijk";
//  char *readstr;
  int c;
  FILE *fp;

  clrscr();
//  tod.da_day,d.da_mon, d.da_year
  if((fp= fopen ("file.io", "a+")) == 0)
  {
    printf("Unable to open file\n");
    exit (1);
  }
  fclose(fp);

  if((fp= fopen ("file.io", "r+")) == 0)
  {
    printf("Unable to open file\n");
    exit (1);
  }
  fputs(string,fp );
  fseek(fp,-17,SEEK_CUR);

  while ((c = getc(fp)) != EOF)
  ;

  c = getc(fp);
  printf("char read is %c and %d\n", c, c);

  c = getc(fp);
  printf("char read is %c and %d\n", c, c);

  c = getc(fp);
  printf("char read is %c and %d\n", c, c);

  c = getc(fp);
  printf("char read is %c and %d\n", c, c);
  c = getc(fp);
  printf("char read is %c and %d\n", c, c);
  c = getc(fp);
  printf("char read is %c and %d\n", c, c);
//  fseek(fp,-1, SEEK_CUR);        //"abcde\"fghijk"
  c = getc(fp);
  printf("char 3 pos pre is  %c and %d\n", c,c);
/*
  fgets(readstr, BUFFERSIZE, fp);
  printf("%s",readstr);

  fprintf(fp,"%s",string);
  printf("going to read file\n");
  getch();
  fseek(fp,- sizeof(char)*5,SEEK_CUR);
//  fseek(fp, sizeof(char)*5,SEEK_CUR);
  fgets(readstr, BUFFERSIZE, fp);
  printf("%s",readstr);
*/
  fclose(fp);

  getch();
}

