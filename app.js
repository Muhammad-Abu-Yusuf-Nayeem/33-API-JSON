// function loadData(){
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

const todoUrl = "https://jsonplaceholder.typicode.com/todos";
const userUrl = "https://jsonplaceholder.typicode.com/users";

async function loadData() {
  try {
    const response = await fetch(userUrl);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error("failed to load data", error);
  }
}

function displayData(data) {
  for (user of data) {
    const li = document.createElement("li");
    li.innerText = user.name;

    document.getElementById("user-list").appendChild(li);
  }
}
