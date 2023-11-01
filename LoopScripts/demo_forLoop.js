// THE FOR LOOP IS TYPICALLY CONSIDERED A "COUNTING" LOOP
// IT HAS 3 PARTS SEPARATED BY SEMICOLONS:
// -CODE THAT EXECUTES BEFORE THE LOOP GEBINS
// -A CONDITION THAT MUST BE TRUE FOR THE LOOP TO KEEP EXECUTING
// -CODE THAT RUNS AT THE BOTTOM OF EACH ITERATION
// SYNTAX
// for(part 1; part 2;part 3){

// }
// let num = 1;
// let i;

// for(i = 0 ; i < 5 ;i ++){
//     num = num * 2;
//     console.log(num);
// }
// BREAK
let num1 = 10;
let a = 1;
while(a < 10){
    num1 = num1 * 2; 
    if(num1 >= 1000)break;
    a++;
}
console.log(num1,a);
