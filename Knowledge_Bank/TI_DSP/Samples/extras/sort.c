void sort(int array[], int size) {
  int i,j,a;
  
  for (j = 1; j < size; j++) {
    a = array[j];
    for (i = j-1; i >= 0 && array[i] > a; --i) {
      array[i+1] = array[i];
    }
    array[i+1] = a;
  }
}
