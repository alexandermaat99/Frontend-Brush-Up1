let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);

let number = 10;

function increaseNumber(number) {
  return ++number;
}

console.log(increaseNumber(number));
