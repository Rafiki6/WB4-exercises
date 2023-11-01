function getMealCost(orders) {
    let sum = 0;
    let numOrders = orders.length;
    for(let i = 0; i< numOrders;i++){
      sum += orders[i].price;
    

    }
    return sum;
}


let myOrder = [ 
    {item: "Chicken Tacos", price: 8.95},
    {item: "Guacamole", price: 2.85},
    {item: "Sweet Tea", price: 2.75}
   ];
   let yourOrder = [ 
    {item: "Hamburger", price: 6.95},
    {item: "Fries", price: 2.25},
    {item: "Sweet Tea", price: 2.75},
    {item: "Fried Apple Pie", price: 4.95}
   ];

   let mealCostYourOrder = getMealCost(yourOrder);
   console.log("My meal before tip "+ mealCostYourOrder);
   let yourTip = mealCostYourOrder * 0.2;
   console.log("My tip costs "+ yourTip );
   let yourTotalPay = mealCostYourOrder + yourTip;
   console.log("Total pay for my Order "+ yourTotalPay);

    let mealCostMyOrder = getMealCost(myOrder);
   console.log("My meal before tip "+ mealCostMyOrder);
   let Tip = mealCostMyOrder * 0.2;
   console.log("My tip costs "+Tip );
   let totalPay = mealCostMyOrder + Tip;
   console.log("Total pay for my Order "+ totalPay)