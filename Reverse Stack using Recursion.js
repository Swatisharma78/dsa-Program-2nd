function revStack(str, curr){
    if(curr < 0){
        return ;
    }

    console.log(str[curr]);

   return revStack(str,curr-1);
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var arr = [];

//    var line = 0;

   for(var i = 0; i < input.length; i++){
       if( input[i] != "-1"){
           arr.push(input[i]);
       }else{
           break;
       }
   }

//    console.log(arr);

   
   var str = arr;
    var curr = str.length - 1;
   revStack(str,curr);
   
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
   