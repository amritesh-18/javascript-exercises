const findTheOldest = function(arr) {
    let oldest = null;

    for (const person of arr) {
        const yearOfDeath = person.yearOfDeath || new Date().getFullYear();
        const age = yearOfDeath - person.yearOfBirth;

        if (!oldest || age > (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth) {
            oldest = person;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
