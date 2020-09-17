/*You will probably not have to take destructuring to such a level as this but this is for you to really wrap your brains around the mechanics.
EVERY EXERCISE SHOULD USE DESTRUCTURING*/


let arr = [
   ['name', 'jon'],
   ['age', 20],
   ['eyes', 'blue'],
   ];
 //Create an object out of the arr above then using destructuring, declare variables using the object keys.

//  const newObj = Object.assign({}, arr);
const newObj = Object.fromEntries(arr);
 newObj;
 const objKeys = Object.keys(newObj)
 const [nameKey, ageKey, eyesKey] = objKeys;
 objKeys;
 console.log(nameKey, ageKey, eyesKey);

   
 
 
let arr2 = [1,2,3,4,5,6]
  //a. Set 3 variables names: the third index should be called 'three', the fourth item 'four' and the rest of the items thereafter 'rest'
  //b. Swap the third and fourth item variable values

  let [,,three, fourth, ...rest] = arr2;
  [fourth, three] = [three, fourth]
  console.log(three, fourth, rest)
