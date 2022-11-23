// A

const words = ["nice", "awesome", "amazing"];

const addTheWordCool = function(array){
    words.push("cool");
    console.log("A: " + words);
}

addTheWordCool();

// B

const fruit = ['apples', 'pears', 'lemons'];

console.log("B: " + fruit.length);

// C

const benelux = ["Belgium", "Netherlands", "Luxembourg"];
const first = benelux[0];

console.log("C: " + first);

// D

const animals = ["Hare", "Guinea pig", "Chicken", "Turtle"];
const last = animals[animals.length - 1];

console.log("D: " + last);

// E

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = function(array) {
    const newArray = presidents.slice(1);
    console.log("E: " + newArray);
}

const impeachTrumpSplice = function(array) {
    const newArray2 = presidents.splice(0, 1);
    console.log("E: " + presidents);
}

impeachTrumpSlice();
impeachTrumpSplice();

// F

const words2 = ['Winc', 'Academy', 'is', 'fun', ';-}'];

console.log("F: " + words2.join(' '));

// G

const array1 = [1,2,3];
const array2 = [4,5,6];

const combined = array1.concat(array2);

console.log("G: " + combined);