function customFind(array) {
  let newarr = [];
  for (let i = 0; i < array.length; i++) {
    if ((array[i] = 5)) {
      newarr.push(array[i]);
      break;
    }
  }
  return newarr;
}
console.log(customFind([2, 4, 5, 7, 5, 9]));

function customSome(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      return true;
    }
  }
  return false;
}
console.log(customSome([1, 4, 7, 19]));

const array = [5, 4, 6, 7];
function customEvery(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i]) == false) {
      return false;
    }
  }
  return true;
}
console.log(
  customEvery(array, (item) => {
    return item > 5;
  })
);

function customFilter(array) {
  let newarr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      newarr.push(array[i]);
    }
  }
  return newarr;
}
console.log(customFilter([, 4, 5, 6, 7, 8]));
