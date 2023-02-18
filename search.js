let arr = [];

function findit(ak, array, count) {
  let [m, n] = ak;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= m && array[i] <= n) count++;
  }
  arr.push(count);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let count = 0;
  let array = input[1].trim().split(" ").map(Number);
  for (let i = 3; i < input.length; i++) {
    findit(input[i].trim().split(" ").map(Number), array, count);
  }
  console.log(arr.join(" "));
}
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
 