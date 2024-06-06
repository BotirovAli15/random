let urinish = 5;
let mathRandom = Math.random() * 101;
let randoms = Math.round(mathRandom);

for (let index = 0; index < 5; index++) {
    let userNumber = +prompt("Raqamni toping (1 dan 100 gacha). Urinishlar soni " + urinish);
    random(userNumber);
    urinish--;

    if (urinish === 0 && userNumber !== randoms) {
        alert("Siz urinishlaringizni tugatdingiz. Random son " + randoms + " edi.");
    }
}

function random(userNumber) {
    if (userNumber == randoms) {
        alert("Siz random soni toptis :)");
        urinish = 0; 
    } else if (userNumber > randoms) {
        alert("Siz kiritgan son random sondan kichik, Qayta urinib qoring :(");
    } else {
        alert("Siz kiritgan son random sondan katta, Qayta urinib qoring :(");
    }
}
