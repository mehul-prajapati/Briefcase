
#include <dos.h>
void ruk (int);

int main(void)
{
   sound(2200);
   ruk(10);

   return 0;
}
void ruk(int i)
{
  int j;
  for (; j<i; j++)
    delay (1000);
}


