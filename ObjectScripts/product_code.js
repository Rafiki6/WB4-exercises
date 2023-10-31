// // Function to parse a part code string
// function parsePartCode(partCode) {
//     // Split the input string by '-' to separate supplierCode and the rest
//     const parts = partCode.split("-");

//     if (parts.length === 2) {
//       // Split the first part by ':' to get supplierCode and productNumber
//       const supplierCodeAndProduct = parts[0].split(":");

//       if (supplierCodeAndProduct.length === 2) {
//         // Create an object with the parsed values
//         return {
//           supplierCode: supplierCodeAndProduct[0],
//           productNumber: supplierCodeAndProduct[1],
//           size: parts[1]
//         };
//       }
//     }

//     // If the input format is invalid, return null or an appropriate value.
//     // return null;
//   }

//   // Example part code
//   let partCode1 = "XYZ:1234-L";

//   // Call the parsePartCode function to parse the part code
//   let part1 = parsePartCode(partCode1);

//   // Output the parsed values to the console
//   console.log("Supplier: " + part1.supplierCode +
//    " Product Number: " + part1.productNumber +
//    " Size: " + part1.size);

// YOU HAVE TO INITIALIZE YOUR STRING AFTER YOU DO YOUR FUNCTION
function parsePartCode(partCode) {

    let supplierCode = partCode.slice(0, 3);
    let productNumber = partCode.slice(4, 8);
    let size = partCode.slice(9);


    let supplierProduct
        = {
        supplierCode,
        productNumber,
        size
    };
  return supplierProduct;
}
let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode +(" ")+
    "Product Number: " + part1.productNumber +(" ")+
    "Size: " + part1.size)
