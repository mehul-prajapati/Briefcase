#include<stdio.h>

void main()
{
  FILE *fp1,*fp2;
  char *filename;
  char c;
  char *buf;
  unsigned long filesize;
  unsigned long initialPos, finalPos;

  printf("Enter the file name\n");
  gets(filename);
  if((fp1= fopen (filename, "r")) == 0)
  {
    printf("Unable to open file\n");
    getch();
    exit (1);
  }
  if((fp2= fopen ("Destfile.txt", "a+")) == 0)
  {
    printf("Unable to open file new file\n");
    getch();
    exit (1);
  }

  fseek(fp1, SEEK_SET, SEEK_CUR);
  initialPos = ftell(fp1);
  while(fgetc(fp1) != EOF)
  ;
//  fseek(fp, 0, SEEK_END);
  finalPos = ftell(fp1);
  filesize = finalPos - initialPos;
  fseek(fp1, 0, SEEK_SET);

  fread (buf, sizeof(char), 10, fp1);
  printf("Buf read is %s",buf);

  fwrite(buf, sizeof(char), 5 , fp2);
  printf("Size of file is %u",filesize);
  getch();
  fclose(fp1);
  fclose(fp1);
}

