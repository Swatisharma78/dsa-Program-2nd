//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var [N,M] =input[0].trim().split(" ").map(Number);
    var arr=[];
    for ( var i=1;i<=N;i++)
    {
    arr.push(input[i].trim().split(" ").map(Number));
    }
    rowMaximum(N,M,arr);
    }
    function rowMaximum(N,M,arr){
       let max=[]
       for(var i=0; i<N; i++){
           max.push(Math.max(...arr[i]))
       }
       console.log(max.join(" "))
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
     