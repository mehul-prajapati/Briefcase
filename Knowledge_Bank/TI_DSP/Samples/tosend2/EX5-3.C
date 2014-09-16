#define NULL 0
void strcatPtr (char *dest,char *source);

void main()
{
  char *dest, *source;
  clrscr();
  dest[0] = NULL;
  printf("\nEnter base string (for e.g. SHRE)\n");
  scanf("%s", dest);
  printf("\nEnter things to append (for e.g.SHTHA)\n");
  scanf("%s", source);
  strcatPtr(dest,source);
  printf("\nnew dest is %s(MYNAME)", dest);
  getch();
}

void strcatPtr(char *dest, char *source)
{
  int countDest = 0, countSource =0 ;
  while (*(dest + countDest) != '\0')
    countDest++;
  while (*(dest + countDest++) = (*(source + countSource++)));
}



