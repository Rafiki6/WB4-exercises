// YOU CAN ALSO RETURN OBJECTS FROM FUNCTIONS
function createPayStub(id,name,payRate,hourWorked){
    let grossPay = 0;
    if(hourWorked <= 40){
        grossPay = payRate * hourWorked
    }
    else{
        grossPay = (40 * payRate)+
                ((hourWorked - 40)* 1.5 * payRate)

    }
    let payStub = {
        employeeId : id,
        name: name,
        grossPay : grossPay

    };
    return payStub;
}
let emp1PayStub = createPayStub("1","Ezra",38.45,49);
console.log(emp1PayStub.employeeId +": " +emp1PayStub.name + " earned $"+
            emp1PayStub.grossPay.toFixed(2) );
// SECOND EMPLOYEE
let emp2PayStub = createPayStub("2", "Elisha", 43.27, 42);
console.log(emp2PayStub.employeeId +": " +emp2PayStub.name + " earned $"+
            emp2PayStub.grossPay.toFixed(2) );
