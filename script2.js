// A

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"},
    {name: "Superman", alter_ego: "Clark Kent"},
    {name: "Spiderman", alter_ego: "Peter Parker"}
]
    
function findSpiderman(superheroes) {
    return superheroes.name === "Spiderman";
}
    
console.log(superheroes.find(findSpiderman));

// B

const doubleArrayValues = [1, 2, 3];
doubleArrayValues.forEach(doubleIt)

function doubleIt(item, index, arr) {
    arr[index] = item * 2;
}

console.log(doubleArrayValues);

// C

// const containsNumberBiggerThan10 = [1, 4, 3, 6, 9, 7, 11];
const containsNumberBiggerThan10 = [1, 2, 1, 2, 1, 2];

const isItTrue = containsNumberBiggerThan10.some((item) => {
    return item >= 10
})

console.log("C: " + isItTrue);

// D

const isItalyInTheGreat7 = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];

const isThisTrue = isItalyInTheGreat7.some((item) => {
    return item === 'Italy'
})

console.log("D: " + isThisTrue);

// E

const tenfoldArrayValues = [1, 4, 3, 6, 9, 7, 11];
tenfoldArrayValues.forEach(tenIt)

function tenIt(item, index, arr) {
    arr[index] = item * 10;
}

console.log(tenfoldArrayValues);

// F

const isBelow100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];

const isItTrue2 = isBelow100.every((item) => {
    return item > 100
})

console.log("F: " + isItTrue2)

// G

const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const initialValue = 0;
const sumWithInitial = bigSum.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);

console.log(sumWithInitial);