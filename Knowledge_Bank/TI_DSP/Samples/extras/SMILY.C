//#include"d:\tc\bgi\egavga.bgi"
#include <graphics.h>
#include <stdlib.h>
#include <stdio.h>
#include <conio.h>

int main(void)
{
   int gdriver = DETECT, gmode, errorcode;
   int midx, midy;
   int stangle = 225, endangle = 315;
   int radiusCircle = 100;
   int radiusCurve  = 65;

   printf("\n\n\n\n\t\t\t\t\tSMILE FIRST");
   delay(5000);
   clrscr();
printf("See Computer also recognised ur smile");

   /* request auto detection */
   /* initialize graphics and local variables */
   initgraph(&gdriver, &gmode, "D:\TC\BGI\EGAVGA.BGI");

   /* read result of initialization */
   errorcode = graphresult();
   if (errorcode != grOk)  /* an error occurred */
   {
      printf("Graphics error: %s\n", grapherrormsg(errorcode));
      printf("Press any key to halt:");
      getch();
      exit(1); /* terminate with an error code */
   }

   midx = getmaxx() / 2;
   midy = getmaxy() / 2;
   setcolor(getmaxcolor());

   /* draw the circle */

   circle(midx-30, midy-30, radiusCircle-90);
   circle(midx+30, midy-30, radiusCircle-90);
   circle(midx, midy, radiusCircle);
   arc(midx, midy, stangle, endangle, radiusCurve);

   printf("Better smily nxt time :-)");
   /* clean up */
   getch();
   closegraph();
   return 0;
}

