/*-----------------------------------------------------------------------
Name	:	ex2-5.c
Purpose	:	function "any(s1,s2)" that returns the first LOCATION in
		:	s1 where any char from string s2 occurs or -1 else.
		:?	what if more char in s2 are in s1 "shresh" "sh"
		:A      s= 1 and h= 2 only first occurance
Note	:	There are two options available 1. see all char first occurance
		:	2. see first char in s2 first occurance
Author	:	shreshtha
Date	:	02 Sep 2005
------------------------------------------------------------------------*/

void main()
{
  char* s1;
  char* s2;
  int location;

  clrscr();
  printf("Input 1st string \n");
  scanf("%s", s1);

  printf("\nInput 2nd string\n");
  scanf("%s", s2);

  location= any(s1,s2);

  /*-----------------------when return is turned on in function "any()"
  if (location == -1)
    printf("\nno char of s1 found in s2\n ");
  else
    printf("first occurance at %d = ", location);
  */

  getche ();

}

//int any(const char* s1,const char *s2)  //if returning LOCATION
any(const char* s1,const char *s2)
{
  //i and j used for traversing 1st and 2nd string resp.
  //c is used for storing a char from second string
  int i,j;
  char c;

  for (j=0; (c= s2[j]) != '\0' ; j++)  		//it is supplying char
  {
    for (i=0; s1[i] != '\0' ; i++)			// it is testing and deleting according to char provided by upper loop
	if (s1 [i] == c)						//? use of s1[i1] != s2[i2] i.e.compare address bug
	{
	 // return (i+1);						//as per Question
	  printf("\n%c= %d", c,i+1 );           // after if for loop execs
	  break ;
	}
   }
   return 0;
}