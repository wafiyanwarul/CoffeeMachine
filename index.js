// destructuring objects while import module
import { coffeeStock as stock, isCoffeeMachineReady } from './state.js'; // if want to change variable name

console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");


console.log(stock);
console.log(isCoffeeMachineReady);

const makeCoffee = (type, miligrams) => {
    if (stock[type] >= miligrams) {
        console.log('\nCoffee successfully made!');
    } else {
        console.log('\nCoffee seeds are empty!');
    }
}

makeCoffee('robusta', 75);

// use a value from imported module as a local variable
const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(stock);
