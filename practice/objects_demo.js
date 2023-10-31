// OBJECTS IS A THING OR NOUN THAT HAS MANY PROPERTIES ASSOCIATED WITH IT
// EX: STUDENT,COURSE,CUSTOMER,POLICY

let employee ={
    employeeId: "1",
    name:"Ezra",
    JobTitle:"Theater Teacher",
    payRate: 38.46
};
console.log(employee.employeeId)
console.log(employee.name)
console.log(employee.JobTitle)
console.log(employee.payRate)

// YOU CAN ACCESS OBJECT IN 2 WAYS[OBJECTnAME.propertyName, OR OBJECTNAME["propertyName"]}
let emp1 = {
    employeeId: "1", 
    name: "Ezra", 
    jobTitle: "Theater Teacher", 
    payRate: 38.46
    };
   let emp2 = {
    employeeId: "2", 
    name: "Elisha", 
    jobTitle: "Game Programmer", 
    payRate: 43.27
    };
   console.log("Employee 1: " + emp1.name);
   console.log("Employee 2: " + emp2.name);
   // OR
   console.log("Employee 1: " + emp1["name"]);
   console.log("Employee 2: " + emp2["name"]);

// YOU CAN PASS OBJECTS TO FUNCTIONS AS PARAMETERS
function printEmployeeAndPay(emp1){
    console.log("Name: "+emp1.name);
    console.log("Pay: "+emp2.payRate)
}
printEmployeeAndPay(emp1);
//printEmployeeAndPay(emp2);