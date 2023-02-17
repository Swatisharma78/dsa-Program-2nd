//Enter code here
function runProgram(input){
    input = input.trim().split("\n")
    var n =+input[0]
    var str = input[1].trim().split("")
    var str1 = input[2].trim().split("")
    var c1=0
    var c2=0
    for (var i =0; i<n; i++)
    {
        if (str[i]=="r" && str1[i]=="p")
        {
            c2++
        }
        else if (str[i]=="s" && str1[i]=="r")
        {
            c2++
        }
         else if (str[i]=="p" && str1[i]=="s")
         {
            c2++
        }
        else if (str[i] ==str1[i])
        {
            continue;
        }
        else{
            c1++
        }
        
    }
    if(c1>c2)
    {
        console.log("First")
    }
    else if (c1==c2) 
    {
       console.log("Draw") 
    }
    else
    {
        console.log("Second")
    }
    }
    
    if (process.env.USERNAME === "swatisharma") {
        runProgram(``);
    } 
    else {
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
          process.exit(0) ;
        });
    }