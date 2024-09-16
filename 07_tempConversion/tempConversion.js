const convertToCelsius = function(temp) {
    
  let c= (5/9)*(temp - 32);
  if(Number.isInteger(c)){
    return c;
  }else{
    return parseFloat(c.toFixed(1));
  }
};

const convertToFahrenheit = function(temp) {
  let f= ((9/5)*temp) + 32;
  if(Number.isInteger(f)){
    return f;
  }else{
    return parseFloat(f.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
