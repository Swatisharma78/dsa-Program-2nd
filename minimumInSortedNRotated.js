const findMin = (array, n) => {
  let low = 0,
    high = n - 1,
    res = 0;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] > array[mid + 1]) {
      return array[mid + 1];
    }
    if (array[mid] < array[mid - 1]) return array[mid];
    if (array[mid] > array[0]) {
      low = mid + 1;
    } else {
      res = array[mid - 1];
      high = mid - 1;
    }
  }
  return res;
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let n = +input[0],
    array = input[1].trim().split(" ").map(Number);
  console.log(findMin(array, n));
};

if (process.env.USER === "swatisharma") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
 