function removeSort(N, arr){
    // console.log(N,arr);
var arr1 = [];
var M = -Infinity;
    for (var i = 0; i < N; i++) {
        if (arr[i] >= M) {
            arr1.push(arr[i]);
            M = arr[i];
        }
    }

    console.log(arr1.join(" "));
}


function runProgram(input) {
   var input = input.trim().split("\n");
   var N = +input[0];
   var arr = input[1].trim().split(" ").map(Number);

   removeSort(N,arr);
   
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
  