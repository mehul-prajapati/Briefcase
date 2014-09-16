void printd(int num);
void main()
{
  int num = 1234;
  clrscr();
  printd(num);
  getch();
}
void printd(int num)
{
  if (num/10)
    printd(num/10);
  putchar(num % 10 + '0');
}