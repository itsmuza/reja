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


// Asynchornous functions
// console.log("Jack Ma maslahatlari:");
// const list = [
//     'yaxshi talaba boling',
//     'togri boshliq tanlang va koprot hato qiling',
//     'uzingiga ishlashni boshlang',
//     'siz kuchli bolgan narsalarni qiling',
//     'yoshlarga investitsiya qiling',
//     'endi dam oling'
// ];

// async function maslahatBering(age) {
//     if(typeof age !== 'number') throw new Error("insert a number");
//     else if (age <= 20) return list[0];
//     else if (age < 30) return list[1];
//     else if (age < 40) return list[2];
//     else if (age < 50) return list [3];
//     else if (age < 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5])
//             }, 2000);
//         })
//     }
// }


// then/catch
// console.log("top")
// maslahatBering(55).then(data => console.log("javob:", data))
// .catch(err => console.log("ERROR:", err));
// console.log("bottom")


// async/await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering('asdf');
//     console.log(javob);
// }
// run();
