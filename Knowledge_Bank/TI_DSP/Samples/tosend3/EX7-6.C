/*-----------------------------------------------------------------------
Name	:	EX7-6.C
Purpose	:   Program to compare two files printing the first line
		:	where they differ
		:A
Note	:   	c 4 str in
		:	First create your files to compare
Author	:	shreshtha
Date	:	11 Sep 2005
------------------------------------------------------------------------*/
#include<stdlib.h>
#include<stdio.h>
#define NULL 0
/*Maximum character to be read per read from file used in fgets*/
#define MAX 50

void main()
{
  int match = 1;
  int status1, status2;
  FILE *fp1, *fp2;
  char *filename1,*filename2;
  char *string1, *string2;

  clrscr();
  printf("Enter the names of file u wanna comapare\n");
  printf("First file name: ");
  gets(filename1);
  printf("Second file name: ");
  gets(filename2);

  /*Check for validity of files*/
  if(( ((fp1= fopen (filename1, "r")) == NULL)  || ((fp2= fopen (filename2, "r") )  == NULL ) ))
  {
    printf("Unable to open file %s or %s\n",filename1, filename2);
    getch();
    exit (1);
  }

  /*Here match can b replaced with both statements*/
  while(match)
    {
      /*If EOF is detected fgets returns 0 or NULL*/
      status2 = fgets(string2,MAX,fp2);
      status1 = fgets(string1,MAX,fp1);


      if ((status1 == NULL) || (status2 == NULL) )
	match = 0;

      /*If strings read do not match*/
      if((strcmp(string1,string2)))
      {
	printf("-----------------NO MATCH-----------------\n");
	printf("\nThe string where file differ is \n ");
	printf("In file1 string is: %s \n ",string1);
	printf("But in file2 its:  %s\n ", string2);
	fclose(fp1);
	fclose(fp2);
	getch();
	exit(1);
      }
    }

  printf("Both files are identical\n");
  getch();
}







