/*-----------------------------------------------------------------------
Name	:	ex5-8.c
Purpose	:	Patch: Error checking in day_of_year and month_day
	:?
	:A
Question: 	After doing this exercise Q arises that at which level
	:	error handling be placed?
Note	:

	:
Author	:	shreshtha
Date	:	06 Sep 2005
------------------------------------------------------------------------*/

static int daytab[2][13] =
{
  {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31},
  {0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}
} ;

//this structure is required by DOS.h t supply todays date
struct date {
  int da_year;     /* current year */
  char da_day;     /* day of the month */
  char da_mon;     /* month (1 = Jan) */
}d;

//handles error
int error();

//Checks correctness od month and day
int checkMonthDay(int  leap,int month, int day);

//gives Day of the year from 0 to 356/355
int day_of_year (int year, int month, int day);

//returns date in old'n gold format DD/MM/YY if day and year are given
int month_day(int year , int yearday, int *pmonth,int *pday);



void main()
{
  int choice;
  int year;
  int date, month, yearday;
  clrscr();

  // gets todays date
  getdate(&d);

 //infinite loop only exit() can exit
 while(1)
 {

  //chpices available to user
  printf("1. DD/MM/YY to Day of Year\n");
  printf("2. Day of Year to DD/MM/YY\n");
  printf("3. Exit today\n");
  scanf ("%d", &choice);

  switch(choice)
  {
    case 1:
      printf("Enter DD MM YY\n");
      scanf("%d%d%d", &date, &month, &year);
      yearday = day_of_year(year, month, date);
      printf("If date is %d/%d/%d then its %d of the year\n\n", date, month, year, yearday);
      break;

    case 2:
      printf("Enter Day and Year\n");
      scanf("%d %d",&yearday, &year);
      month_day(year, yearday, &month, &date);
      printf("%dth day of year %d , date is %d/%d/%d\n\n", yearday, year, date, month, year);
      break;

    case 3:
      clrscr();
      printf("Bye Have a nice TODAY \n\n\n\n\t\t\t\t%d/%d/%d",d.da_day,d.da_mon, d.da_year);
      getch();
      exit (1);

    default:
      printf("Please choose the correct option 1 2 or 3");
      getch();
      break;
  }
 }
  //main();
}

//=========================================================
int day_of_year (int year , int month, int day)
{
  int i, leap;

  leap= year%4 == 0 && year%100 != 0 || year%400 ==0;

  if(checkMonthDay(leap, month, day))
  {
    for(i=1; i< month; i++)
      day += daytab[leap][i];
    return day;
   }
   return 0;
}

//================================================================
int month_day (int year,int yearday, int *pmonth, int *pday)
{
  int i, leap;

  leap= year%4 == 0 && year%100 != 0 || year%400 ==0;

  if (leap)
  {
    if (yearday>366)
    {
      printf("Day entered exceed days in this year\n\n");
      getch();
      return 0;
    }
  }
  else if(yearday > 355)
  {
    printf("Day entered exceed days in this year\n\n");
    getch();
    return 0;
  }

  for(i =1; yearday > daytab[leap][i]; i++)
    yearday-= daytab[leap][i];

  *pmonth = i;
  *pday = yearday;
  return 1;
}


//=========================================================
// this is made seperate as switch case error can be collectively
// changed
int error()
{
  printf("Error Day Entered\n");
      return 0;
}

//===========================================================

//It seems repetation here but see that every statement uses
//own leap month and day value
int checkMonthDay (int leap, int month, int day)
{
  switch (month)
  {
    case 1:
      if(day <= daytab[leap][month])
	break;
      return error();

    case 2:
      if(day <= daytab[leap][month])
	break;
      return error();

    case 3:
      if(day <= daytab[leap][month])
	break;
      return error();

    case 4:
      if(day <= daytab[leap][month])
	break;
      return error();

    case 5:
      if(day <= daytab[leap][month])
	break;
      return error();

    case 6:
      if(day <= daytab[leap][month])
	break;
      return error();

    case 7:
      if(day <= daytab[leap][month])
	break;
      return error();

    case 8:
      if(day <= daytab[leap][month])
	break;
      return error();

    case 9:
      if(day <= daytab[leap][month])
	break;
      return error();

    case 10:
      if(day <= daytab[leap][month])
	break;
      return error();

    case 11:
      if(day <= daytab[leap][month])
	break;
      return error();

    case 12:
      if(day <= daytab[leap][month])
	break;
      return error();

    default:
    {
      printf("Month entered is not correct\n");
      getch();
      return 0;
    }
  }
  return 1;
}
