// //! Q NO 1 //

// // // Declare and initialize an empty multidimensional array
// // const multiDimArray = [];

// // // You can add arrays to it as needed
// // multiDimArray.push([]);
// // multiDimArray.push([]);
// // multiDimArray[0].push(1, 2, 3);
// // multiDimArray[1].push(4, 5, 6);

// // console.log(multiDimArray); // Output: [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

// // ! Q NO 2 //

// // // Declare and initialize a 3x3 matrix
// // var matrix = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// //   ];
  
// //   // Access elements in the matrix
// //   console.log(matrix[0][0]); // Output: 1
// //   console.log(matrix[1][2]); // Output: 6
  
// // ! Q NO 3 //

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
  
// // ! Q NO 4 // 

// // Prompt the user for the number and length of the multiplication table
// const tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
// const tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// // Check if the input is a valid number
// if (isNaN(tableNumber) || isNaN(tableLength)) {
//   console.log("Please enter valid numbers.");
// } else {
//   // Print the multiplication table
//   console.log(`Multiplication table for ${tableNumber} up to ${tableLength} rows:`);
//   for (let i = 1; i <= tableLength; i++) {
//     const result = tableNumber * i;
//     console.log(`${tableNumber} x ${i} = ${result}`);
//   }
// }

// // ! Q NO 5 //

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// // ! Q NO 6 // 

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Number Series</title>
// </head>
// <body>
//   <h2>Counting:</h2>
//   <p id="counting"></p>

//   <h2>Reverse counting:</h2>
//   <p id="reverseCounting"></p>

//   <h2>Even:</h2>
//   <p id="even"></p>

//   <h2>Odd:</h2>
//   <p id="odd"></p>

//   <h2>Series:</h2>
//   <p id="series"></p>

//   <script>
//     // Counting
//     let countingOutput = "";
//     for (let i = 1; i <= 15; i++) {
//       countingOutput += i + ", ";
//     }
//     document.getElementById("counting").textContent = countingOutput.slice(0, -2); // Remove the last comma

//     // Reverse counting
//     let reverseCountingOutput = "";
//     for (let i = 10; i >= 1; i--) {
//       reverseCountingOutput += i + ", ";
//     }
//     document.getElementById("reverseCounting").textContent = reverseCountingOutput.slice(0, -2);

//     // Even
//     let evenOutput = "";
//     for (let i = 0; i <= 20; i += 2) {
//       evenOutput += i + ", ";
//     }
//     document.getElementById("even").textContent = evenOutput.slice(0, -2);

//     // Odd
//     let oddOutput = "";
//     for (let i = 1; i <= 19; i += 2) {
//       oddOutput += i + ", ";
//     }
//     document.getElementById("odd").textContent = oddOutput.slice(0, -2);

//     // Series
//     let seriesOutput = "";
//     for (let i = 1; i <= 10; i++) {
//       seriesOutput += 2 * i + "k, ";
//     }
//     document.getElementById("series").textContent = seriesOutput.slice(0, -2);
//   </script>
// </body>
// </html>

// // ! Q NO 7 //

// // Define the array
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Function to search for an item in the array
// function searchItem(item) {
//   // Convert the user input to lowercase for case-insensitive search
//   const lowerCaseItem = item.toLowerCase();

//   // Check if the item is in the array
//   if (A.includes(lowerCaseItem)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Get user input
// const userInput = prompt("Enter an item to search:");

// // Check if the item is found and display the result
// if (userInput) {
//   const itemFound = searchItem(userInput.toLowerCase());

//   if (itemFound) {
//     alert(`"${userInput}" is found in the list.`);
//   } else {
//     alert(`"${userInput}" is not found in the list.`);
//   }
// } else {
//   alert("Invalid input or user canceled the operation.");
// }

// // ! Q NO 8 // 

// // Given array
// const A = [24, 53, 78, 91, 12];

// // Initialize a variable to store the largest number
// let largestNumber = A[0];

// // Iterate through the array
// for (let i = 1; i < A.length; i++) {
//   // Check if the current element is larger than the largestNumber
//   if (A[i] > largestNumber) {
//     largestNumber = A[i];
//   }
// }

// // Print the largest number
// console.log("The largest number in the array is: " + largestNumber);

// // ! Q NO 9 //

// // Given array
// const A = [24, 53, 78, 91, 12];

// // Initialize the smallest number with the first element of the array
// let smallest = A[0];

// // Iterate through the array starting from the second element (index 1)
// for (let i = 1; i < A.length; i++) {
//     // If the current element is smaller than the current smallest, update the smallest
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// // Output the smallest number
// console.log("The smallest number in the array is: " + smallest);

// // ! Q NO 10 //

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }
  
