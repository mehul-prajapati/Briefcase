/*-----------------------------------------------------------------------
Name	:	ex3-2.c
Purpose	:   Converts characters like newline and tab in to visible
		:   escape sequences like \n \t
		:?
		:A
Note	:   Enter key is CR not Newline (run getascii.c)
	:
Author	:	shreshtha
Date	:	03 Sep 2005
------------------------------------------------------------------------*/


void main()
{
  int escSeq;
  char escChar;
  clrscr();
  printf("enter a escape sequence \n");
  escSeq = getche();
  escape(&escChar, &escSeq);
  printf("\nThe escape sequence u typed is \\%c", escChar);
  getch();
}

escape(char* s, int* t)
{
  switch (*t)
    {
      case '\a':
	*s = 'a';
	break;
      case '\b':
	*s = 'b';
	break;
      case '\f':
	*s = 'f';
	break;
      case '\n':
	*s = 'n';
	break;
      case '\r':
	*s = 'r';
	break;
      case '\t':
	*s = 't';
	break;
      case '\\':
	*s = '\\';
	break;
      default:
	*s = 'Z';
	break;
    }
   return 0;
}


