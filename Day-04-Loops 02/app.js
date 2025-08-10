// write a function that searches for an element in an array and return index,
// if the element is not present then return -1

function searchesElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

let arr = [4, 2, 0, 10, 8, 30];

const output = searchesElement(arr, 49);
console.log(output);
// searchesElement(arr,10) => 3
// searchesElement(arr,49) => -1
