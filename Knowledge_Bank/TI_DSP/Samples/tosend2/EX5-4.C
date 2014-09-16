/*-----------------------------------------------------------------------
Name	:	ex5-4.c
Purpose	:	strend fn. searches one string in other
	:	return 1 if present
Note	:       There is no need to check for NULL and '\n' or
	:	srch str is smaller than other or not (yes there is some
	:	extra statement exec which can be saved)
Author	:	shreshtha
Date	:	05 Sep 2005
------------------------------------------------------------------------*/

#define NULL 0

// dest contains what you want to search
// source contains the string in which you wanna search

int strend(char *dest,char *source);

void main()
{
  char *source, *dest;
  int flag;

  clrscr();
  printf("\nwhat u wanna search \n");
  scanf("%s", dest);
  printf("\nEnter things to search \n");
  scanf("%s", source);
  if(flag = strend(dest,source))
    printf("\nstring \"%s\" is present in \"%s\" at its end", dest,source);
  else
      printf("\nstring \"%s\" is not present in \"%s\" at its end", dest,source);
  getch();
}
int strend(char *dest, char *source)
{
  int count, dLen, sLen;
  if ( (*(dest)) == NULL  ||  (*(dest)) == '\n' || (*(source)) == NULL  ||  (*(source)) == '\n')
    return 0;
  //let strings point to their end elements

  dLen = strlen (dest) - 1;
  sLen = strlen (source) -1;

  for(; *(dest + dLen) == *(source + sLen); dLen--, sLen--)
    if (dLen == 0)
      return 1;
  return 0;
}