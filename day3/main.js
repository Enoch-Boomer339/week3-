function printHi(){
    document.write("Hi, there!<br>");
}

printHi();
for (let i=1; i<=5; i++){
    printHi();
}

let sum =()=> {
    let a = 5;
    let b = 6;
    let c =a + b;
    return c;
}

let finalResult1 = sum();
console.log(finalResult1);

let mult =() => {
    let x = 3;
    let y = 6;
    let z = x * y;
    return z;
}

let finalResult2 = mult();
console.log(finalResult2);