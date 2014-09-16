In any system(say h/w sys) size of stack is fixed and and is not encroched
it is only meant for stack

It is not possible to know what stacksize h/w would have so there should
be some dynamic allocation in C code so that at time of porting maxSize
can be changed accordingly

Stack is empty when top = -1