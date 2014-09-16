
/*-----------------------------------------------------------------------
Name	:	ex2-4.c
Purpose	:	function "squeeze(s1,s2)" that deletes each char in s1
		:	matches any char in the string s2.
Author	:	shreshtha
Date	:	02 Sep 2005
------------------------------------------------------------------------*/


void main(void)
{
  char* s1;
  char* s2;

  clrscr();
  printf("Input 1st string lesss than 09 char\n");
  scanf("%s", s1);

  printf("\nInput 2nd string lesss than 09 char\n");
  scanf("%s", s2);

  squeeze(s1,s2);

  printf("\n\ns1 = %s \n s2 = %s", s1 , s2);
  getche ();

  }

squeeze(char* s1,char* s2)
{
  //i and j used for traversing 1st and 2nd string resp.
  //c is used for storing a char from second string
  int i1,i2,j;
  char c;

  for (j=0; (c= s2[j]) != '\0' ; j++)  	   //it is supplying char
  {
    for (i1=i2=0; s1[i1] != '\0' ; i1++)     // it is testing and deleting according to char provided by upper loop
	if (s1 [i1] != c)            	     // dont use s1[i1] != s2[i2] i.e.compare address bug
	  s1[i2++] = s1[i1];
    s1[i2] = '\0';
   }
 return 0;
}