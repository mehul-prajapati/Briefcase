#define NULL \0
typedef struct {
  stackType *next, *previous;
  int data, stackSize;
  }stackType;

void main()
{
  int howMany, choice;
  stackType *stack;

  clrscr();
  while(1)
  {
    printf("What you wanna do? select 1,2 or 3\n");
    printf("1: PUSH\n2: POP\n3: EXIT\nYou entered ");
    scanf("%d",&choice);

    switch (choice)
    {
      case 1 :
	printf("\nHow many no. you wanna PUSH ");
	scanf("%d",&howMany);
	push(stack,howMany);
	break;
      case 2 :
	printf("\nHow many no. you wanna POP ");
	scanf("%d",&howMany);
	pop(stack,howMany);
	break;
      case 3 :
	printf("\n-------------------------------------------\n");
	exit(1);
	break;
      default :
	printf("Enter from the available options ");
	break;
    }
  }
}

void push(stackType **stack,const int howMany)
{
  int i;

  /* allocate memory for string */
  for (i=0; i<=howMany; i++)
  {
    if (*stack = (stackType *) malloc((sizeof(stackType)) == NULL)
    {
      printf("Not enough memory to allocate buffer\n");
      return 0;
    }
    else
    {
      scanf("%d",(*stack)->data);
      dataCount++;

   }
 }

pop(int *stack, const int howMany)
{
  int i;
  for (i=0; i<howMany; i++)
    printf("POPed out data= %d\n", *(stack--));
    free(stack+1);

  return 0;
}
