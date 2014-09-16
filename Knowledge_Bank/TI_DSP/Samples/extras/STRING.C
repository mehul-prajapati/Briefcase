void main()
{
  char *charPtr;
  printf("address is %u\n", charPtr);
  charPtr++;
  printf("address is %u\n", charPtr);

  gets(charPtr);
/* Its working
  *charPtr = getche();
  *(++charPtr) = getche();
  *(++charPtr) = getche();
  *(++charPtr) = '\0';
  charPtr--;
  charPtr--;
  charPtr--;
  charPtr--;
  */
  printf("string is %s\n", charPtr);
  getch();
}
