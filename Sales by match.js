function runProgram(input){
    input = input.split("\n");
    let tc = +input[0] ;  
    let array = input[1].trim().split(" ").map(Number);
   console.log(matching(tc,array))
    }
    
 
function matching (tc, array){
    let stk ={} ; let a = 0 ;  let y = ''
    for(let i=0;i<tc;i++){
        
        if(stk[array[i]]===undefined)
        {
        stk[array[i]] =1
        }else{
        stk[array[i]]++
    }
}
    let ways=0 ;let many = 0
    for(let key in stk){
    if(stk[key] >=2)
    {
        let x = Math.floor(stk[key]/2)
        ways+=x
    }
    }
return ways
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
 