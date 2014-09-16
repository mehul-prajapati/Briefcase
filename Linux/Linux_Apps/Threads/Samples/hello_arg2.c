/*
  A polyglot version of the Hello World program using Pthreads.
  The threads are passed a structure containing three arguments.
  Compile with 'gcc -O3 -pthread hello_arg2.c -o hello_arg2'
*/


#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#define NUM_THREADS	10

/* Strings for the Hello World messages */
char *messages[NUM_THREADS];

/* Structure of argument values to pass to a thread */
struct thread_data {
  int	thread_id;
  int  sum;
  char *message;
};

/* Allocate an array of argument value structures */
struct thread_data thread_data_array[NUM_THREADS];


/* This is the routine that the threads execute */
void *PrintHello(void *threadarg) {
  int myid, sum;
  char *hello_msg;
  struct thread_data *my_data;
  
  sleep(1);
  my_data = (struct thread_data *) threadarg;
  myid = my_data->thread_id;
  sum = my_data->sum;
  hello_msg = my_data->message;
  printf("Thread %d: %s  Sum=%d\n", myid, hello_msg, sum);
  pthread_exit(NULL);
}

int main(int argc, char *argv[]) {
  pthread_t threads[NUM_THREADS];
  int rc, i, sum;
  
  sum=0;
  messages[0] = "English: Hello World!";
  messages[1] = "French: Bonjour, le monde!";
  messages[2] = "Spanish: Hola al mundo";
  messages[3] = "Klingon: Nuq neH!";
  messages[4] = "German: Guten Tag, Welt!"; 
  messages[5] = "Russian: Zdravstvytye, mir!";
  messages[6] = "Japan: Sekai e konnichiwa!";
  messages[7] = "Latin: Orbis, te saluto!";
  messages[8] = "Finnish: Terve, maailma!";
  messages[9] = "Swedish: Hall�, v�rld";
  
  for(i=0; i<NUM_THREADS; i++) {
    /* Initialize arguments to a thread */
    sum = sum + i;
    thread_data_array[i].thread_id = i;
    thread_data_array[i].sum = sum;
    thread_data_array[i].message = messages[i];
    /* Create a thread */
    rc = pthread_create(&threads[i], NULL, PrintHello, &thread_data_array[i]);
    /* printf("Creating thread %d\n", i); */
    if (rc) {
      printf("ERROR; return code from pthread_create() is %d\n", rc);
      exit(-1);
    }
  }
  pthread_exit(NULL);
}
