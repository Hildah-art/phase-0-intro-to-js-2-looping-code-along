// Code your solutions in this file
function writeCards(names) {
    let messages = [];
    for (let name of names) {
        messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
        }
    return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
