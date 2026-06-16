function togglePassword() {
 let p = document.getElementById("password");
 if (p.type === "password")
   p.type = "text";
 else
   p.type = "password";
}
function toggleLoginPassword() {
 let p = document.getElementById("loginPass");
 if (p.type === "password")
   p.type = "text";
 else
   p.type = "password";
}
function signup() {
 let username = document.getElementById("username").value;
 let password = document.getElementById("password").value;
 let students =
 JSON.parse(localStorage.getItem("students")) || [];
 students.push({
   username: username,
   password: password
 });
 localStorage.setItem(
   "students",
   JSON.stringify(students)
 );
 alert("Signup Successful");
}
function login() {
 alert("Login Successful");
}
window.onload = function () {
 let count =
 document.getElementById("studentCount");
 if(count){
 let students =
 JSON.parse(localStorage.getItem("students")) || [];
 count.innerText = students.length;
 }
}