/*-----------------------------------------------------------------------
Name	:	ex6-1.c
Purpose	:   To modify getword to check for #, _, ", /*, //
		:?	what does _ i.e. underscore do
		:A  I am skipping words starting from _
		:?	Whats the use of returning first char etc. from getchar
		:A	I am returning 1 for true word read and 0 for no word
Note	:
	:
Author	:	shreshtha
Date	:	07 Sep 2005
------------------------------------------------------------------------*/
#include<stdio.h>
#include"d:\tc\source\EX6-1.h"
//Although sizeof cant b used with #if as it ll cause parse error
//But it can b used here as it is not evaluated by preprocessor
#define NKEYS (sizeof keytab / sizeof (struct key))

//Its better way to do this coz sec. param auto changes
#define MKEYS (sizeof nokeytab / nokeytab[0])
//Defines max no of words in file to b processed
#define MAXWORD 100


void main()
{
  int n;
  char word[MAXWORD];
  FILE *fp;

  if((fp= fopen ("lex.xex", "r")) == 0)
    printf("Unable to open file\n");
//  fgets(readstr, BUFFERSIZE, fp);

  //It gets word, searches word in keytab, increment word count if present
  while (getword (word, MAXWORD, fp) != EOF)
    if (isalpha(word[0]))
      if ((n = binsearch(word,keytab,NKEYS)) >= 0)
	keytab[n].count++;

  //for printing what gathered tokens and their counts
  for (n = 0; n< NKEYS; n++)
    if (keytab[n].count > 0)
      printf("%4d %s\n",keytab[n].count, keytab[n].word);
}

//===========================================================================
int binsearch(char *word, struct key tab[], int n)
{
  int cond;
  int low, high, mid;

  low  = 0;
  high = n - 1;

  while (low <= high)
  {
    mid = (low + high) / 2;
    
    if ((cond = strcmp(word, tab[mid].word)) < 0)
      high = mid - 1;
    else if (cond > 0)
      low = mid + 1;
    else
     
      return mid;
   }
  
   return -1;
}




int getword(char *word, int lim, FILE *fnfp)
{
 
  int getch(void);
  void ungetch();
  char *w = word;
  char c;
  int assemble;


  do
  {       
	  c = fgetc(fnfp);
	  if (c == EOF)
		  exit(0);
	  else if (isalpha(c))
		  assemble = 1;
	  else if (isspace(c))			
	  {
		  while (isspace (c = fgetc(fnfp)))
			  ;
		  fseek(fnfp, -1, SEEK_CUR);
	  }
	  else
		  assemble = checkChar (c, fnfp);

  }
  while(assemble);

  for (; --lim > 0; w++)
    if (!isalnum(*w = fgetc(fnfp)))
    {

      fseek(fnfp, -1, SEEK_CUR);
	
      break;
    }
  *w = '\0';
  return word[0];
}



int checkChar(char c, FILE *chkfp)
{
  int i, choice;
  int flag;
  switch(c)
  {
   
    case '#' :
      while(fgetc(chkfp)!= '\n')
       ;
      break;

  
    case '_' :
      while(!isspace(fgetc(chkfp)))
       ;
	  fseek(chkfp, -1, SEEK_CUR);
      break;



    case '/' :
		if ((c = fgetc(chkfp)) == '/')
		{
			while( (c = fgetc(chkfp))!= '\n' || c == EOF )
				;
			if(c == EOF)
				exit(1);
			break;

      }


     else if ( c == '*')
		 do
		 {
			 while ((c = fgetc(chkfp)) != '*' || c != EOF)
				 ;
			 if (c == EOF )
			 {
				 printf("End of FIle\n");
				 exit (0);
			 }
			 else if (c == '*')
			 {
				 if ((c = fgetc(chkfp)) == '/' )
					 flag = 1;
				 else
				 {
					 flag = 0;
					 fseek(chkfp, -1 , SEEK_CUR);
					 c = fgetc(chkfp);
				 }
			 }
		 }
		 while (flag == 0);
		 break;
		 

    case '"' :
		while( ((c= fgetc(chkfp)) != '"') || (c != EOF) || (c != '\n'))
			;
		flag =0;		 
		if (c == '\n')		
			break;		
		else if (c == EOF)		
		{
			printf("End of file\n");		
			exit(0);		
		}
		     		
		do
		{
			if(c == '"')
			{
				fseek(chkfp, -1, SEEK_CUR);
				if((c = fgetc(chkfp)) == '\\')
				{
					flag = 0;
					fseek(chkfp, 1, SEEK_CUR);
				}
				else
					flag = 1;
				c = fgetc(chkfp);
			}
		}
		while(flag == 0);
		break;


      default :
		  if(isalpha(c))
			  return 1;
		  else
			  return 0;

  }
  return 0;

}

