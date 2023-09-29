// ! Q NO 1 //

// // // Prompt the user for their first name and store it in a variable
// // var firstName = prompt("Enter your first name:");

// // // Prompt the user for their last name and store it in a variable
// // var lastName = prompt("Enter your last name:");

// // // Combine the first name and last name into a fullName variable
// // var fullName = firstName + " " + lastName;

// // // Greet the user using their full name
// // alert("Hello, " + fullName + "! Welcome!");

// // // // ! Q NO 2 //

// // <!DOCTYPE html>
// // <html>
// // <head>
// //     <title>Mobile Phone Model Length</title>
// // </head>
// // <body>
// //     <h1>Favorite Mobile Phone Model</h1>
// //     <p>Enter your favorite mobile phone model:</p>
// //     <input type="text" id="modelInput">
// //     <button onclick="calculateLength()">Calculate Length</button>
// //     <p id="result"></p>

// //     <script>
// //         function calculateLength() {
// //             // Get the user input from the input field
// //             var userInput = document.getElementById("modelInput").value;

// //             // Calculate the length of the user input
// //             var length = userInput.length;

// //             // Display the length in the result paragraph
// //             document.getElementById("result").innerHTML = "Length of your input: " + length;
// //         }
// //     </script>
// // </body>
// // </html>

// // // // ! Q NO 3 //

// // <!DOCTYPE html>
// // <html>
// // <head>
// //     <title>Find Index of "n" in "Pakistani"</title>
// // </head>
// // <body>
// //     <h1>Find Index of "n" in "Pakistani"</h1>

// //     <script>
// //         // Define the word
// //         var word = "Pakistani";

// //         // Find the index of "n" in the word
// //         var index = word.indexOf("n");

// //         // Display the result in the browser
// //         document.write("The index of 'n' in the word 'Pakistani' is: " + index);
// //     </script>
// // </body>
// // </html>

// // // // ! Q NO 4 //

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Find Last Index of 'l'</title>
// </head>
// <body>
//     <script>
//         // Define the input word
//         var word = "Hello World";

//         // Use the lastIndexOf() method to find the last index of 'l'
//         var lastIndex = word.lastIndexOf('l');

//         // Display the result in the browser
//         document.write("The last index of 'l' in the word '" + word + "' is: " + lastIndex);
//     </script>
// </body>
// </html>

// // // // ! Q NO 5 //

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Character at 3rd Index</title>
// </head>
// <body>
//     <script>
//         // The word to be used
//         var word = "Pakistani";

//         // Check if the word is long enough to have a character at the 3rd index
//         if (word.length >= 4) {
//             // Get the character at the 3rd index (indexing starts from 0)
//             var character = word.charAt(3);

//             // Display the result in the browser
//             document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);
//         } else {
//             // Handle the case where the word is too short
//             document.write("The word 'Pakistani' is too short to have a character at the 3rd index.");
//         }
//     </script>
// </body>
// </html>

// // // // ! Q NO 6 //

// // Prompt the user for their first name and store it in a variable
// var firstName = prompt("Enter your first name:");

// // Prompt the user for their last name and store it in a variable
// var lastName = prompt("Enter your last name:");

// // Merge the first and last names into a fullName variable using the concat() method
// var fullName = firstName.concat(" ", lastName);

// // Greet the user using their full name
// alert("Hello, " + fullName + "! Welcome to our website.");
// ! Q NO 7 //

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Substring Replacement</title>
// </head>
// <body>
//     <p>Original Word: Hyderabad</p>
//     <p>Modified Word: <span id="result"></span></p>

//     <script>
//         // Get the original word
//         var originalWord = "Hyderabad";

//         // Replace "Hyder" with "Islam"
//         var modifiedWord = originalWord.replace("Hyder", "Islam");

//         // Display the result in the browser
//         document.getElementById("result").textContent = modifiedWord;
//     </script>
// </body>
// </html>

// ! Q NO 8 //

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// // Use the replace method with a regular expression to replace all occurrences of "and" with "&"
// var modifiedMessage = message.replace(/and/g, "&");

// // Display the modified message in your browser
// document.write(modifiedMessage);

// // // // // ! Q NO 9 //

// // Convert the string to a number using parseInt
// var stringNumber = "472";
// var number = parseInt(stringNumber);

// // Display the value and type in the browser console
// console.log("Value: " + number); // Value: 472
// console.log("Type: " + typeof number); // Type: number

// // // // // ! Q NO 10 //

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Convert to Uppercase</title>
// </head>
// <body>
//     <h1>Convert Text to Uppercase</h1>
//     <input type="text" id="textInput" placeholder="Enter text...">
//     <button onclick="convertToUppercase()">Convert</button>
//     <p id="output"></p>

//     <script>
//         function convertToUppercase() {
//             // Get the user input
//             var userInput = document.getElementById("textInput").value;

//             // Convert to uppercase
//             var uppercaseText = userInput.toUpperCase();

//             // Display the result
//             document.getElementById("output").textContent = uppercaseText;
//         }
//     </script>
// </body>
// </html>

// // ! Q NO 11 //

// // Function to convert a string to title case
// function toTitleCase(inputString) {
//     // Split the input string into words
//     let words = inputString.split(' ');

//     // Iterate through each word and capitalize the first letter
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//     }

//     // Join the words back into a single string
//     return words.join(' ');
// }

// // Get user input
// const userInput = prompt("Enter a sentence:");

// // Check if the user input is not empty
// if (userInput !== null && userInput !== "") {
//     // Convert the input to title case
//     const titleCaseString = toTitleCase(userInput);

//     // Display the title case string
//     console.log("Title Case: " + titleCaseString);
// } else {
//     console.log("No input provided. Please enter a sentence.");
// }

// // ! Q NO 12 //

// var num = 35.36;

// // Convert the number to a string
// var numString = num.toString();

// // Remove the dot (.) from the string
// var numWithoutDot = numString.replace(".", "");

// // Display the result in the browser
// document.write(numWithoutDot);

// // ! Q NO 13 //

// // Function to check if a string contains any special symbols
// function containsSpecialSymbol(username) {
//     const specialSymbols = ['@', '.', ',', '!'];
  
//     for (let i = 0; i < username.length; i++) {
//       const charCode = username.charCodeAt(i);
//       if (specialSymbols.includes(username[i])) {
//         return true;
//       }
//     }
  
//     return false;
//   }
  
//   // Get user input
//   const username = prompt('Enter your username:');
  
//   // Check if the username contains any special symbols
//   if (containsSpecialSymbol(username)) {
//     alert('Please enter a valid username without special symbols [@ . , !]');
//   } else {
//     alert('Username is valid!');
//   }
  
// // ! Q NO 14 //

// // Sample array
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Function to perform case-insensitive search
// function searchItem(item) {
//   // Convert the item and array elements to lowercase for case-insensitive comparison
//   const lowercaseItem = item.toLowerCase();
//   const lowercaseArray = A.map((element) => element.toLowerCase());

//   // Check if the lowercase item exists in the lowercase array
//   const found = lowercaseArray.includes(lowercaseItem);

//   return found;
// }

// // Prompt the user for input
// const userInput = prompt("Enter an item to search for:");

// // Check if the item is found and inform the user
// if (userInput !== null) {
//   const found = searchItem(userInput);

//   if (found) {
//     alert(`"${userInput}" is found in the list.`);
//   } else {
//     alert(`"${userInput}" is not found in the list.`);
//   }
// }

// // ! Q NO 15 //

// function isValidPassword(password) {
//     // Check if the password is at least 6 characters long
//     if (password.length < 6) {
//       return false;
//     }
  
//     // Check if the password contains alphabets and numbers
//     const hasAlphabet = /[a-zA-Z]/.test(password);
//     const hasNumber = /[0-9]/.test(password);
  
//     // Check if the password starts with an alphabet
//     const startsWithAlphabet = /^[a-zA-Z]/.test(password);
  
//     // Return true if all conditions are met
//     return hasAlphabet && hasNumber && startsWithAlphabet;
//   }
  
//   function getPasswordFromUser() {
//     let password = prompt("Enter a password:");
  
//     while (!isValidPassword(password)) {
//       password = prompt("Please enter a valid password (at least 6 characters with alphabets and numbers, and not starting with a number):");
//     }
  
//     console.log("Password is valid!");
//   }
  
//   getPasswordFromUser();
  
// // ! Q NO 16 //

// var university = "University of Karachi";
// var universityArray = university.split(" ");

// // Display the elements of the array in the browser
// document.write("<p>Array elements:</p>");
// document.write("<ul>");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write("<li>" + universityArray[i] + "</li>");
// }
// document.write("</ul>");

// // ! Q NO 17 //

// // Prompt the user for input
// const userInput = prompt("Enter a string:");

// // Check if the user provided any input
// if (userInput !== null) {
//   // Check if the input string is not empty
//   if (userInput.length > 0) {
//     // Get the last character of the input string
//     const lastCharacter = userInput.charAt(userInput.length - 1);
    
//     // Display the last character
//     alert(`The last character is: ${lastCharacter}`);
//   } else {
//     alert("You didn't enter any text.");
//   }
// } else {
//   alert("You canceled the input.");
// }

// // ! Q NO 18 //

// // Input string
// var inputString = "The quick brown fox jumps over the lazy dog";

// // Convert the input string to lowercase to make it case-insensitive
// inputString = inputString.toLowerCase();

// // Split the string into words using whitespace as a delimiter
// var words = inputString.split(' ');

// // Initialize a variable to store the count
// var count = 0;

// // Iterate through the words and count occurrences of "the"
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === "the") {
//     count++;
//   }
// }

// // Output the result
// console.log("The word 'the' appears " + count + " times in the given string.");
