
const storedUserArray = localStorage.getItem('users');
const users = storedUserArray ? JSON.parse(storedUserArray) : [];
console.log(users);
function checkLogin(selectField,username, password) {
   const user = users.find((user) => user.selectField === selectField && user.username === username && user.password === password);
   if (user) {
       window.location.href = "../Dashboard/Dashboard.html"; 
   } else {
       alert("Invalid username or password. Please try again.");
   }
}

document.querySelector('#login').addEventListener("click",function(event){
   event.preventDefault();
   const selectField = document.querySelector('#select-user').value;
   const username = document.querySelector('#user').value;
   const password = document.querySelector('#pass').value;
   
   checkLogin(selectField,username, password);

});