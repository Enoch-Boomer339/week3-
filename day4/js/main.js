// let name = prompt("Enter your name: ");
// if(name.length > 4){
//     document.write("Hello, " + name);
// }

// else{
//     document.write("Invalid entry, please get out of here.");
// }

// let age = prompt("Enter your age: "); 
// if(age > 18){
//     document.write("You are old enough to drive.");
// }

// else if(age >= 50){
//     document.write("Your own don too much oga sir");
// }

// else{
//     document.write("You are not old enough to drive.");
// }

// function greeting(name){
//     return "Hello, " + name;
// }

// let greet = greeting("Ed Boomer");
// document.write(greeting(greet);

function showLogin(){
    document.getElementById("register-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
}

function showRegister(){
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("register-form").classList.remove("hidden");
}