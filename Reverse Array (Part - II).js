//Enter code here
function runProgram(input){ 
    input = input.trim().split("\n")
    
    var [s,k] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    
    ReverseArrayPart2(arr,s,k)
    }
function ReverseArrayPart2(arr,s,k){
    var one =k
    
    var two = s-1
    
    while(one<two)
    {
        var sam = arr[one]
        
        arr[one] = arr[two]
        
        arr[two]= sam
        
        one++
        
        two--
    }
    console.log(arr.join(" "))
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
