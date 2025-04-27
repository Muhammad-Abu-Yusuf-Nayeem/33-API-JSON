// --- 1. JSON Structure Example ---
// (This is just data in JSON format, normally used in files or APIs.)

// Here we define a JavaScript object (similar to JSON structure)
const student = {
  name: "Alice",
  age: 25,
  isStudent: true,
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    city: "Dhaka",
    zip: 1230,
  },
};

// Displaying the object
console.log("JavaScript Object:", student);

// ----------------------------------------

// --- 2. JSON.parse() Example ---
// (Converting JSON text into a JavaScript object)

// Suppose we receive this JSON string (from a server, for example)
const jsonString = '{"name": "Alice", "age": 25, "isStudent": true}';

// Parsing the JSON string to a JavaScript object
const parsedObject = JSON.parse(jsonString);

// Accessing the parsed object
console.log("Parsed Object:", parsedObject);
console.log("Name:", parsedObject.name); // Output: Alice
console.log("Age:", parsedObject.age); // Output: 25

// ----------------------------------------

// --- 3. JSON.stringify() Example ---
// (Converting a JavaScript object into a JSON string)

// JavaScript object
const person = {
  name: "Bob",
  age: 30,
  profession: "Developer",
};

// Converting the object to a JSON string
const stringifiedJSON = JSON.stringify(person);

// Displaying the JSON string
console.log("Stringified JSON:", stringifiedJSON);
// Output: {"name":"Bob","age":30,"profession":"Developer"}

// ----------------------------------------

// --- Bonus: Full Circle Example ---
// JavaScript object ➔ JSON string ➔ JavaScript object

// Original object
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
};

// Step 1: Convert object to JSON string
const carJSON = JSON.stringify(car);
console.log("JSON String of car:", carJSON);

// Step 2: Convert JSON string back to JavaScript object
const carObject = JSON.parse(carJSON);
console.log("Parsed Car Object:", carObject);
console.log("Car Brand:", carObject.brand); // Output: Toyota
