// TASK: 1
function countLetter(char, word) {
    let count = 0;
    for (let c of word) {
        if (c === char) count++;
    }
    return count;
}

const result = countLetter('e', 'engineer');

console.log(result);

console.log("Jack Ma maslahatlari:");
const list = [
    'yaxshi talaba boling',
    'togri boshliq tanlang va koprot hato qiling',
    'uzingiga ishlashni boshlang',
    'siz kuchli bolgan narsalarni qiling',
    'yoshlarga investitsiya qiling',
    'endi dam oling'
];




// callback
/*
console.log("Jack Ma maslahatlari:");
const list = [
    'yaxshi talaba boling',
    'togri boshliq tanlang va koprot hato qiling',
    'uzingiga ishlashni boshlang',
    'siz kuchli bolgan narsalarni qiling',
    'yoshlarga investitsiya qiling',
    'endi dam oling'
];

function maslahatBering(age, callback) {
    if(typeof age !== 'number') callback('insert a number', null);
    else if (age <= 20) callback(null, list[0]);
    else if (age < 30) callback(null, list[1]);
    else if (age < 40) callback(null, list[2]);
    else if (age < 50) callback(null, list[3]);
    else if (age < 60) callback(null, list[4]);
    else {
        setTimeout(function () {
            callback(null, list[5]);
        }, 2000)
    }
}

console.log("top")
maslahatBering(70, (err, data) => {
    if (err) console.log("ERROR:", err);
    else {
        console.log("javob:", data);
    }
});
console.log("bottom")
*/
