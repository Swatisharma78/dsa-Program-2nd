function stringToArray(el) {
    return el.split(" ").map(Number);
}

function rotateBy90(arr) {
    for (var i = 0; i < arr.length; i++) {
        var result = "";
        for (var j = arr.length - 1; j >= 0; j--)
            result += arr[j][i] + " ";
        console.log(result);
    }
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    var index = 1;

    while (t-- > 0) {
        var rows = Number(newInput[index]);
        var arr_lines = newInput.slice(index + 1, index + 1 + rows);
        var arr = arr_lines.map(stringToArray);

        rotateBy90(arr);


        index = index + 1 + rows;
        rows = Number(newInput[index]);
    }



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
   