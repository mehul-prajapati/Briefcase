#define NULL 0
void strcatPtr (char *dest,char *source);

void main()
{
  char *dest, *source;
  clrscr();
  dest[0] = NULL;
  printf("\nEnter base string (for e.g. BirthDay)\n");
  scanf("%s", dest);
  printf("\nEnter things to append (for e.g. cake)\n");
  scanf("%s", source);
  strcatPtr(dest,source);
  printf("\n \t\"happy Bday Mam\n\t\"happy Bday Mam\"\n\t\"happy Bday Mam\"\"\n\n\n \t\"Now our  %s?", dest);
  getch();
}

void strcatPtr(char *dest, char *source)
{
  int countDest = 0, countSource =0 ;
  while (*(dest + countDest) != '\0')
    countDest++;
  while (*(dest + countDest++) = (*(source + countSource++)))
    ;
}



