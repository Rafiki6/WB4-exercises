function printContact(homeAdress){
    console.log(homeAdress.name);
    console.log(homeAdress.address);
    console.log(homeAdress.city);
    console.log(homeAdress.state);
    console.log(homeAdress.zip)
}
let myInfo = {
    name:"Pursalane Faye",
    address: "121 Main Street",
    city:"Dallas",
    state:"Texas",
    zip:"756123"
};

  printContact(myInfo)
