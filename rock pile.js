function runProgram(input){
    input=input.trim().split('\n')
    
    let tc=input[0];
    
    let line=1;
    
    for(let i=0;i<tc;i++)
    {
        let n=input[line++]
        
        let str=input[line++].trim()
        
        console.log(masai123(str,n))
    }
    
    
    function masai123(str,n)
    {
        let stk=[]
        
      for(let i=0;i<n;i++)
      {
          if(str[i]=="+")
          {
              stk.push(str[i])
          }
          else{
              stk.pop()
          }
      }
      
      return stk.length
        
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