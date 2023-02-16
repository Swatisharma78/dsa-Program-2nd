//Enter code here
function runProgram(input) {
    
    input = input.split("\n")
   
   let tc =+input[0];
   let line =1;
   
   for(var i =0;i<tc;i++){
        var [p,q,r,s] = input[line++].trim().split(" ").map(Number)
   
   RestoringThreeNumbers(p,q,r,s)
       
   }    
}


 const RestoringThreeNumbers=(p,q,r,s)=>{
     
    
     let a = s-r;
     let b = s-q;
     let c = s-p;
     
     console.log(a,b,c)
     
   
     
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
   