function printEvenMat(n, m, mat){
    // console.log(n, m, mat);
    
    for( var r = 0; r < n; r++){
        var out = "";
        if( r % 2 == 0){
            for( var c = 0; c < m; c++){
                out = out + mat[r][c] +" ";
            }
            console.log(out);
        }
    }
    
}



function runProgram(input) {
     input = input.trim().split("\n");
   var [n,m] = input[0].trim().split(" ");
   var line =  1;
    var mat = [];

    for( var i = 0 ; i < n ; i++){
        mat.push(input[line].trim().split(" "))
        line++;
    }

    printEvenMat(n, m, mat);

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
 