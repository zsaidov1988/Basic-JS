let arrayList = []; // Empty Array
let countItems = 7; // Count of elements of array
let max = 20; // Max value for Random function
let min = 10; // Min value for Random function
let conditionForEvery = 12; // Condition for Every function (item > conditionForEvery)
let conditionForSome = 18; // Condition for Some function (item > conditionForSome)

// Generate Array elements by using Math.random function
for (let i = 0; i < countItems; i++) {
  arrayList.push(Math.floor(Math.random() * (max - min + 1)) + min);
}

console.log("Math.random funksiyasi yordamida hosil qilingan, " + countItems + " elementdan iborat massiv:");
console.log(arrayList); // Print Whole Array
console.log("\n");

console.log(`item > ${conditionForEvery} sharti qo'yilgan every funksiyasi natijalari:`);
console.log("every funksiyasi yordamida: " + arrayList.every(function (item) {
  return item > conditionForEvery;
}));

let resultEvery = true;
for (let item of arrayList) {
  resultEvery = resultEvery && (item > conditionForEvery)
  if (!resultEvery) {
    break;
  }
}
console.log("every funksiyasi yordamisiz: " + resultEvery);

console.log("\n");
console.log(`item > ${conditionForSome} sharti qo'yilgan some funksiyasi natijalari:`);
console.log("some funksiyasi yordamida: " + arrayList.some(function (item) {
  return item > conditionForSome;
}));

let resultSome = false;
for (let item of arrayList) {
  resultSome = resultSome || (item > conditionForSome)
  if (resultSome) {
    break;
  }
}
console.log("some funksiyasi yordamisiz: " + resultSome);

