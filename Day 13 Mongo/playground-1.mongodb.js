/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the sales collection.
db.getCollection('Birthdays').insertMany([
  { "name": "Lakshya", "dob": "22/07/2003" },
  { "name": "John", "dob": "10/05/1995" },
  { "name": "Emily", "dob": "28/11/1987" },
  { "name": "Michael", "dob": "03/09/2000" },
  { "name": "Sarah", "dob": "15/04/1992" },
  { "name": "David", "dob": "19/08/1983" },
  { "name": "Sophia", "dob": "07/12/1998" },
  { "name": "Jacob", "dob": "25/06/1979" },
  { "name": "Emma", "dob": "14/02/1990" },
  { "name": "Olivia", "dob": "30/10/1985" }

]);


// Print a message to the output window.
console.log(`DOne bdays`);
