const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];
const sorted = [];
let i = 0;

rl.on('line', line => {
  if (arr.length === 0) {
    arr.length = parseInt(line, 10);
  } else {
    arr[i] = parseInt(line, 10);
    i++;

    if (i === arr.length) {
      rl.close();
    }
  }
});

const swap = (i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const bubbleSort = () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
};

const selectionSort = () => {
  let min = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    swap(min, i);
  }
};

const insertionSort = () => {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
};

const merge = (start, middle, end) => {
  let part1 = start;
  let part2 = middle + 1;
  let index = start;

  while (part1 <= middle && part2 <= end) {
    if (arr[part1] <= arr[part2]) {
      sorted[index] = arr[part1];
      part1++;
    } else {
      sorted[index] = arr[part2];
      part2++;
    }
    index++;
  }

  if (part1 > middle) {
    for (let t = part2; t <= end; t++) {
      sorted[index] = arr[t];
      index++;
    }
  } else {
    for (let t = part1; t <= middle; t++) {
      sorted[index] = arr[t];
      index++;
    }
  }

  for (let t = start; t <= end; t++) {
    arr[t] = sorted[t];
  }
};
const mergeSort = (start, end) => {
  if (start < end) {
    const middle = Math.floor((start + end) / 2);

    mergeSort(start, middle);
    mergeSort(middle + 1, end);
    merge(start, middle, end);
  }
};

rl.on('close', () => {
  // bubbleSort();
  // selectionSort();
  // insertionSort();
  sorted.length = arr.length;
  mergeSort(0, arr.length - 1);

  const printArr = () => {
    arr.forEach(element => {
      console.log(element);
    });
  };
  printArr(arr);

  process.exit();
});
