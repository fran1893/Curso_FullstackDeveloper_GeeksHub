// Create a function that prints your name on the screen for 1 second after being called.

const nameUser = 'Francisco Diaz';
const h1 = document.getElementById('objective');

const printName = ()=>{
    h1.innerHTML = nameUser;
}

setTimeout(printName,1000);