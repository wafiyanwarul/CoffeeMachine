const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

const isCoffeeMachineReady = true;

// module.exports = {coffeeStock, isCoffeeMachineReady}; 
// console.log(module)

// export default coffeeStock;

export { coffeeStock, isCoffeeMachineReady }; 
// then we can use import .... from ... (to import module in other file like 'import stock from "./state.js";')