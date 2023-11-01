let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];
function getStudent(list) {
    
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        let totalScore = 0;
        for (let s = 0; s < item.scores.length; s++) {
            totalScore += item.scores[s]
        }
        const average = totalScore / item.scores.length;
        console.log(item.name,average)
    }

}

getStudent(students);