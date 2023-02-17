function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(' ').map(Number)
      }
    let row=input[0]
    input.shift()
  
    for(let i=row-1;i>=0;i--)
    {
        let str=""
       for(let j=0;j<row;j++)
       {
           str+=input[j][i]+" "
       }
       console.log(str)
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
   