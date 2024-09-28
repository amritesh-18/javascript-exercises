const fibonacci = function(n) {
    let count
    if (typeof n !== 'number') {
        count = parseInt(n)
    } else {
        count = n;
    }

    if(n<0) return "OOPS";
    if(count == 0) return 0;

    let prev = 1;
    let next = 0;

    for(let i = 2; i<=n; i++){
        let current = prev + next;
        next = prev;
        prev = current;
    }

    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
