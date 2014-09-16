/*-----------------------------------------------------------------------
Name	:	ex4-4.c
Purpose	:   Print the top of the stack, duplicate top, Swap top of the stack
	:?
	:A
Note	:	FREE(ptr) is not implemented here
		:	Stack is empty when top = -1
		:
I think :   In any system(say h/w sys) size of stack is fixed and and is not
		:	encroched it is only meant for stack
		:
		:	It is not possible to know what stacksize h/w would have so there 
		:	should be some dynamic allocation in C code so that at time of 
		:	porting maxSize can be changed accordingly
		:	
Author	:	shreshtha
Revision:	Structure based Stack is delayed and ll b done later
Date 	:	04 Sep 2005
------------------------------------------------------------------------*/
#define NULL 0

typedef int stackElement;		//as char long any thing can be in stack here int

typedef struct {
  stackElement *contents;		//content is allocated mem once (to b rectfied using individual mallloc i.e. using doubly Link list)
  int top;
  int maxSize;
}stackType;

void stackInit (stackType *stackPtr, int maxSize);		//Stack initialization ,malloc is used here
void stackDelete (stackType *stackPtr);
void stackPush (stackType *stackPtr, stackElement element);
stackElement stackPop (stackType * stackPtr);

void stackPrint(stackType *stackPtr);
void stackDuplicate(stackType *stackPtr);
void stackSwap(stackType *stackPtr);

int stackIsEmpty (stackType *stackPtr);
int stackIsFull (stackType *stackPtr);


void main()
{
  int choice;
  int stackSize;
  int howMany;	
  char yesNo;
  stackElement element;
  stackType stackInst1;			// It is stack instance no. 1 (there can be multiple stack in use)

  clrscr();
  printf("Size of stack = ");
  scanf("%d", &stackSize);
  stackInit (&stackInst1,stackSize);

  //Extra features provided have to b grouped later i.e. 3,4,5 in other menu 

  while(1)
  {
    printf("\n1: PUSH\n2: POP\n3: Print Data\n4: Duplicate\n5: Swap data\n6: Del Stack\n7: EXIT\nYour choice = ");
    scanf("%d",&choice);

    switch (choice)
    {
      case 1 :
	printf("\nU wanna PUSH number = ");
	scanf("%d",&element);
	stackPush(&stackInst1,element);
	break;

      case 2 :
	element = stackPop(&stackInst1);
	if(!element)				//Bug: wt if 0 is element
	  ;
	else
	  printf("\nNumber at Top of the stack was = %d\n", element);
	break;

      case 3 :
	stackPrint(&stackInst1);
	break;

      case 4 :
	stackDuplicate(&stackInst1);
	break;

      case 5 :
	stackSwap(&stackInst1);
	break;


      case 6 :
	printf("Are you sure you wanna delete whole stack? y/n\n");
	yesNo=getche();
	if (yesNo == 'y')
	{
	   stackDelete(&stackInst1);	// clear before new stack initialization
	   main();
	}
	else
	  printf("\n");
	break;

      case 7 :
	printf("\n-------------------------------------------\n");
	stackDelete(&stackInst1);		// clear before exiting
	exit(1);
	break;


      default :
	printf("Enter from the available options\n");
	break;

    }
  }
}

void stackInit (stackType *stackPtr, int maxSize)
{
  stackElement *newContents;

  //check for mem availablity

  if ((newContents = (stackElement *) malloc(sizeof(stackElement) * maxSize)) == NULL)
    {
      printf("Not enough memory to allocate buffer\n");
      exit(1);
    }
  else
  {
    stackPtr->contents = newContents;	//allocate pointer having mem to content
    *(stackPtr->contents) = NULL;		// init by value 0
    stackPtr->maxSize = maxSize;		//ll remain till deleted
    stackPtr->top = -1;					//stack is empty
  }
}

void stackDelete (stackType *stackPtr)
{
  free (stackPtr->contents);		//Free allocaed memory of array

  stackPtr->contents = NULL;
  stackPtr->maxSize = 0;
  stackPtr->top = -1;
}


void stackPush (stackType *stackPtr, stackElement element)
{
  int isFull;
  int index;

  isFull = stackIsFull(stackPtr);
  if (isFull)
  {
    printf("Stack is Full cant Push element\n");
  }
  else
  {
    stackPtr->top = stackPtr->top + 1;		//element should b stored to next location
    index = stackPtr->top;					//get index for top element in stack
    stackPtr->contents[index] = element;
  }
}

stackElement stackPop (stackType * stackPtr)
{
  int isEmpty;
  int index;

  isEmpty = stackIsEmpty(stackPtr);
  if (isEmpty)
  {
    printf("Stack is Empty cant Pop element\n");
    return 0;
  }
  else
  {
    index = stackPtr->top;
    stackPtr->top = stackPtr->top - 1;
    return stackPtr->contents[index];
  }
}

void stackPrint(stackType *stackPtr)
{
  int index;
  int isEmpty;
  stackElement element;

  isEmpty = stackIsEmpty(stackPtr);
  if(isEmpty)
    printf("No element in stack\n");
  else
  {
    index = stackPtr->top;
    element = stackPtr->contents[index];
    printf("Top element is %d\n\n", element);
  }

}

void stackDuplicate(stackType *stackPtr)
{
  int index;
  int isEmpty, isFull;
  stackElement element;

  isEmpty = stackIsEmpty(stackPtr);
  if(isEmpty)
    printf("No element in stack to duplicate\n");
  else
  {
    isFull = stackIsFull(stackPtr);
    if (isFull)
      printf("Stack is Full cant duplicate element\n");


    stackPtr->top = stackPtr->top + 1;		//element should b stored to next location
    index = stackPtr->top;
    stackPtr->contents[index] = stackPtr->contents[index -1];
  }
}

void stackSwap(stackType *stackPtr)
{
  int index;
  int isEmpty, isFull;
  stackElement element;

  isEmpty = stackPtr->top;
  if(isEmpty < 1)
    printf("Not enough elements in stack to swap\n");
  else
  {
    index = stackPtr->top;
    element = stackPtr->contents[index];
    stackPtr->contents[index] = stackPtr->contents[index -1];
    stackPtr->contents[index -1]=element;
  }
}


int stackIsFull (stackType *stackPtr)
{
  int isFull;
  if (stackPtr->top >= (stackPtr->maxSize - 1))
    isFull = 1;
  else
    isFull = 0;

  return isFull;
}
int stackIsEmpty (stackType *stackPtr)
{
  int isEmpty;
  if (stackPtr->top < 0)
    isEmpty = 1;
  else
    isEmpty = 0;

  return isEmpty;
}



/*
#define NULL \0

void main()
{
//  int *stackPointer = '\0';
  int *stack = '\0';
  int choice, howMany;

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

void push(int **stack,const int howMany)
{
  int i;

  /* allocate memory for string */
/*
  for (i=0; i<=howMany; i++)

  {
    if ((*stack = (int *) malloc((sizeof(int)) == NULL)
    {
      printf("Not enough memory to allocate buffer\n");
      return 0;
    }
    else
      scanf("%d",**(++stack));
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
  */



















