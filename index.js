// Code your solutions in this file
const array = ['Guadalupe', 'Ollie', 'Aki']
function writeCards(array, name){
    for(let i = 0; i < array.length; i++){
        const message = `Thank you, ${array[i]}, for the wonderful ${name} gift!`
        array[i] = message;
    }
    return array;
}

function countDown(number){
    let count = 0;
    while(count <= number){
        console.log(count);
        count++;
    }
}