// --- Fetching data from JSON Placeholder ---

// The API endpoint
const apiURL = "https://jsonplaceholder.typicode.com/posts";

// Using fetch() to get data
fetch(apiURL)
  .then((response) => {
    // The response needs to be converted into JSON
    return response.json();
  })
  .then((data) => {
    // Now 'data' is a JavaScript array of posts
    console.log("Fetched Data:", data);

    // Example: printing the title of the first post
    console.log("First Post Title:", data[0].title);
  })
  .catch((error) => {
    // Handling any errors
    console.error("Error fetching data:", error);
  });
