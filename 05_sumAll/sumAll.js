const sumAll = function(num1,num2) {
    
    if(num1<0||num2 <0||Number.isInteger(num1)!=true||Number.isInteger(num2)!=true){
        return "ERROR";
    }
    let result=0;
    if(num1<num2){
        for(let i=num1;i<=num2;i++){
        result+=i;}
    } else if (num1>num2) {
        for(let i=num1;i>=num2;i--){
        result+=i;}
    }
    
    return result;
};

// Do not edit below this line
module.exports = sumAll;
