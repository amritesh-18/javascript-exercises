const removeFromArray = function(arr,...args) {
    
    const newArr=[];
    arr.forEach((value)=>{
        if(!args.includes(value)){
            newArr.push(value);
        }
    })
    return newArr;
};
// Do not edit below this line
module.exports = removeFromArray;
