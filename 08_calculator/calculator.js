const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  if(arr.length == 0){
    return 0;
  }
	let total = 0;
  for(let i = 0; i<arr.length; i++){
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total =1;
  for(let i = 0;i<arr.length;i++){
    total *= arr[i];
  }
  return total;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
  if(n==0) return 1;
  result = 1;
  for(let i = 1; i<=n; i++){
    result*= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
