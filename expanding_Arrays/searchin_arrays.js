let teams = ["Red Sox", "Rangers", "Blue Jays",
 "Astros", "White Sox", "Rangers"];
let index = teams.indexOf("rangers");

if(index == -1){
console.log("Item not found");

}
else {
    console.log("Item at position: "+ index)
}

let team = ["Red Sox", "Rangers", "Blue Jays",
 "Astros", "White Sox", "Rangers"];
let indexs = teams.indexOf("Rangers", 3);
if (indexs == -1)
 console.log("Item not found");
else
 console.log("Item at position: " + indexs);

//  LASTINDEXOF() IT SEARCHES THE ARRAY FOR AN ELEMENT 
// STARTING AT THE END AND RETURN ITS POSITION.
let team1 = ["Red Sox", "Rangers", "Blue Jays",
 "Astros", "White Sox", "Rangers"];
let firstIndex = team1.indexOf("Rangers"); // returns 1
let lastIndex = team1.lastIndexOf("Rangers");
console.log(firstIndex)
console.log(lastIndex)