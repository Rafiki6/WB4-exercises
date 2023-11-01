function getMyLastMeal(list){
    let sum = 0;
    for( let i = 0; i < list.length; i++){
        sum += list[i].price;
    }

    return sum
}

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];


const totalPrice = getMyLastMeal(lunch).toFixed(2);
const tipPaid = (totalPrice * 0.18).toFixed(2);
const taxPaid = (totalPrice * 0.08).toFixed(2);
const subTotal = parseFloat(totalPrice)+parseFloat(tipPaid) + parseFloat(taxPaid) ;

console.log("Total cost of my last meal: $" +totalPrice );
console.log("Tip cost of my last meal: $" +tipPaid );
console.log("Tax cost of my last meal: $" +taxPaid );
console.log("SubTotal cost of my last meal: $" + subTotal.toFixed(2));

