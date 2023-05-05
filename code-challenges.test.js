// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibSeq", () => {
  it("eturns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fibSeq(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibSeq(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })
  // FAIL  ./code-challenges.test.js
  // fibSeq
  //   ✕ eturns an array that length containing the numbers of the Fibonacci sequence

  // ● fibSeq › eturns an array that length containing the numbers of the Fibonacci sequence

  //   ReferenceError: fibSeq is not defined
// })

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
// PseudoCode:
// Input: A number
// Output: returns an array that length containing the numbers of the Fibonacci sequence.
// Create function called fibSeq


const fibSeq = (num) =>
  Array.from({ length: num }).reduce(
    (accum, _, index) =>
      index < 2
        ? [...accum, 1]
        : [...accum, accum[index - 1] + accum[index - 2]], []
  )


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("leastGreat", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest.", () => {
    expect(leastGreat(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(leastGreat(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
// 22 |   // FAIL  ./code-challenges.test.js

//       at Object.expect (code-challenges.test.js:19:5)

//   ● leastGreat › takes in an object and returns an array of the values sorted from least to greatest.

//     ReferenceError: leastGreat is not defined

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
// PseudoCode
// Input: Object
// Output: an array of the objects values sorted least to greatest
// Create a function named leastGreat

const leastGreat = (object) => {
  newArr =[]
  return newArr = Object.values(object).sort((a,b) => a-b)
    }

// PASS  ./code-challenges.test.js
// leastGreat
//  ✓ takes in an object and returns an array of the values sorted from least to greatest. (1 ms)
  

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumSum", () => {
  it("takes in an array and returns an array of the accumulating sum.", () => {
    expect(accumSum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accumSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accumSum(accountTransactions3)).toEqual([])
  })
})
// FAIL  ./code-challenges.test.js
// accumSum
//   ✕ takes in an array and returns an array of the accumulating sum. (1 ms)

// ● accumSum › takes in an array and returns an array of the accumulating sum.

//   ReferenceError: accumSum is not defined


const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
// PseudoCode: 
// Input: An array
// Output: An array of the accumulating sum
// Create a function called accumSum


const accumSum = (arr) => {
  return arr.map((sum => value => sum += value)(0))
}

// PASS  ./code-challenges.test.js
// accumSum
//   ✓ takes in an array and returns an array of the accumulating sum. (1 ms)