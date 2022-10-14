let Fibonacci = (numb) => {
  if (numb < 1) {
    return numb;
  } else {
    return Fibonacci(numb - 1) + Fibonacci(numb - 2);
  }
  console.log(wow);
};

console.log(Fibonacci(8));

let fizzBuzz = (i) => {
  let array = [];
  if (i % 5 == 0) {
    array.push(i);
  }

  if (i % 3 == 0) {
    array.push(i);
  }

  if ((i % 5 == 0) & (i % 3 == 0)) {
    array.push(i);
  }

  return array;
};
