const f1 = (arg1 = 2, arg2 = 1) => {
  return arg1 + arg2;
};

f1(); //arg1 = 2, arg2 = 1
f1(1); //arg1 = 1, arg2 = 1
f1(1, 2); //arg1 = 1, arg2 = 2
