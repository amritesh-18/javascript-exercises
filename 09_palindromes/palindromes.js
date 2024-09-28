const palindromes = function (str) {
    const condition = "abcdefghijklmnopqrstuvwxyz0123456789";
    const newStr = str.toLowerCase()
                  .split('')
                  .filter((char) => condition.includes(char))
                  .join('');

    return newStr === newStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
