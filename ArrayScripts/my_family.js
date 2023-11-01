

function getAverage(list){
    let total = 0;
    for (let i = 0; i < list.length; i++){
        total += list[i]  ;
    }

const Average = total /list.length
return Average;
}

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

console.log(getAverage(myScores));
console.log(getAverage(yourScores));
console.log(getAverage([0, 100]));//50
console.log(getAverage([0, 100, 200]));//33.33_