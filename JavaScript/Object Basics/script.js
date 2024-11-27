////////////////////////////////////////////////////////////////////////////
////                   Reassign object data type variables             ////
//////////////////////////////////////////////////////////////////////////

let animal = { species: "dog" };
let dog = animal;

// reassigning animal variable with a completely new object
animal = { species: "cat" };

console.log(animal); // { species: "cat" }
console.log(dog); // { species: "dog" }

////////////////////////////////////////////////////////////////////////////
////                          Map Method                               ////
//////////////////////////////////////////////////////////////////////////

function addOne(num) {
    return num + 1;
  }
  const arr1 = [1, 2, 3, 4, 5];
  const mappedArr1 = arr1.map(addOne);
  console.log(mappedArr1); // Outputs [2, 3, 4, 5, 6]

// The original array has not been changed!
console.log(arr1); // Outputs [1, 2, 3, 4, 5]

const arr2 = [1, 2, 3, 4, 5];
const mappedArr2 = arr2.map((num) => num + 1);  // In line function
console.log(mappedArr2); // Outputs [2, 3, 4, 5, 6]

////////////////////////////////////////////////////////////////////////////
////                       Filter Method                               ////
//////////////////////////////////////////////////////////////////////////

//Instead of transforming the values in the array, 
//it returns the original values of the array, but only IF the callback function returns true

function isOdd(num) {
    return num % 2 !== 0;
  }
const arr3 = [1, 2, 3, 4, 5];
const oddNum = arr3.filter(isOdd);
console.log(oddNum); // Outputs [1, 3, 5];
console.log(arr3); // Outputs [1, 2, 3, 4, 5], original array is not affected
  
////////////////////////////////////////////////////////////////////////////
////                       Reduce Method                               ////
//////////////////////////////////////////////////////////////////////////

const arr4 = [1, 2, 3, 4, 5];
const productOfAllNum = arr4.reduce((total, currentItem) => {
  return total * currentItem;
}, 1); // Initializes currentItem=1, second argument of reduce
console.log(productOfAllNum); // Outputs 120;
console.log(arr4); // Outputs [1, 2, 3, 4, 5]

/////////////////////////////////////////////////////////////////////////////////////////////////

function sumOfTripledEvens1(array) {                     //Logic function
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
  }
  
//Alternative with methods

const array = [1,2,3,4,5,6];
function sumOfTripledEvens2(array) {
    return array.filter((num) => (num%2===0)).map((num) => (num*3)).reduce((agg, curr) => (agg+curr));
}
console.log(sumOfTripledEvens1(array));
console.log(sumOfTripledEvens2(array));
