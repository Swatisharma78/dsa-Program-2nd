function rotateBy180(N, matrix){

    //write code here 
    
    for(var i=N-1; i>=0; i--)
    {
    var bag="";
    for(var j=N-1; j>=0; j--)
    {
    bag+=matrix[i][j]+" "; 
    }
    console.log(bag);
    }
    
   }
   
   