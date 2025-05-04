// function loadData(){
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function displayData(data) {
  for (const user of data) {
    console.log(user.title);
  }
}

function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function displayUsers(data) {
  for (user of data) {
    // console.log(user.name);
    let li = document.createElement("li");
    li.innerText=user.name;
    const userData = document.getElementById("user-list");
    userData.appendChild(li);
  }
}
