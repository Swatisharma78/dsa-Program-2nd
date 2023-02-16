//Enter code here
function runProgram(input){
    input=input.trim().split("\n");
// console.log(input);
    var size=+input[0];
    var arr=input[1].split(" ").map(Number);

// console.log(b,c);
    revArray(size,arr);
    }

    function revArray(size,arr)
    {
    var bag = "";
    for(var i =arr.length-1; i>=0; i--)
    {
    bag = bag + arr[i] + " ";
    }
    console.log(bag);
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
 