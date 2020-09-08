'usestrict'
var counter = 0;
var user = prompt('What is your name ?');
console.log('The user name is ' + user);
alert('You are welcome ' + ' ' + user + ' Please answer the quastions by Yes/No only !');


var qas1 = prompt('Do you know how old i am ?');
console.log('The user answer is ' + qas1);
// /*if (qas1==""){
//     alert('please enter a value')
// }else if (qas1=='yes'){
//     console.log('the first  answer is correct! ');
//     alert('It\'s just the beginning ! you should know me more !');
// }else if(qas1=='no'){
//     console.log('user didn\'t know :( ');
//     alert('It was easy quastion :( ');
// }else {
//     alert('Please answer with yes or no only');
// }
// */

while (qas1 !== 'yes' && qas1 !== 'no') {
    qas1 = prompt('Please answer with yes or no only');
}
if (qas1 === 'yes') {
    console.log('the first  answer is correct! ');
    counter++;
    alert('It\'s just the beginning ! you should know me more !');
}
else if (qas1 === 'no') {
    console.log('user didn\'t know :( ');
    alert('It was easy quastion :( ');
}

var qas2 = prompt('Do you know what\'s my last name ?');
console.log('the user answer is  ' + qas2);

while (qas2 !== 'yes' && qas2 !== 'no') {
    qas2 = prompt('Please answer with yes or no only');
}
if (qas2 === 'yes') {
    console.log('the second  answer is correct!');
    counter++;
    alert('It\'s goog ! you should know me more !');
}
else if (qas2 === 'no') {
    console.log('user didn\'t know :( ');
    alert('It was easy quastion too :( ');
}

var qas3 = prompt('Do you know my favorte drink ? ');
console.log('the user answer is  ' + qas3);
while (qas3 !== 'yes' && qas3 !== 'no') {
    qas3 = prompt('Please answer with yes or no only');
}
if (qas3 === 'yes') {
    console.log('the third answer is correct!!');
    counter++;
    alert('Thats advanced ! you should know me more !');
}
else if (qas3 === 'no') {
    console.log('user didn\'t know :( ');
    alert('It\'s not easy quastion but you should know :( ');
}

var qas4 = prompt('Do you know what\'s my favorte talent ?');
console.log('the user answer is  ' + qas4);
while (qas4 !== 'yes' && qas4 !== 'no') {
    qas4 = prompt('Please answer with yes or no only');
}
if (qas4 === 'yes') {
    console.log('the fourth answer is correct!!');
    counter++;
    alert('It seems that you know me :) ! you should know me more !');
}
else if (qas4 === 'no') {
    console.log('user didn\'t know :( ');
    alert('It\'s not easy quastion, I well help u, it\'s writing "make it our little secret" ');
}
var qas5 = prompt('Do you my favorte songe ?!');
console.log('the user answer is  ' + qas5);
while (qas5 !== 'yes' && qas5 !== 'no') {
    qas5 = prompt('Please answer with yes or no only');
}
switch (qas5) {
    case (qas5 === 'yes'):
        console.log('the fifth answer is correct!!');
        counter++;
        alert(' Sure you are my best friend :) !');
        break;
        (qas5 === 'no')
        console.log('user didn\'t know :( ');
        alert('Don\'t be sad , usually i don\'t tell anyone about that');
    default:
        console.log('Sorry, you out of expectations ');

}

var bool = false;
for (var i = 0; i < 4; i++) {
    var number = prompt('guess a number');
    var num = parseInt(number);
    console.log(typeof num)
    console.log('user answer is ' + num);
    if (num == "") {
        alert('enter a number')
    }
    else if (num == 20) {
        bool = true;
        break;
    } else if (num > 20) {
        alert('your number very big');
    }
    else if (num < 20) {
        alert("your number very small !");
    }
}
if (!bool) {
    alert('sorry ,you out of expectations, it\'s 20 ');
} else {
    counter++;
    alert('Perfect!!');
}

var hobb = ["writing", "Cooking", "reading", "ply chess", "hand embroidery"];
for (var i = 0; i < 6; i++) {
    var guess = prompt('Guess whats my hobbies !!');
    console.log('user answer is ' + guess);
    if (guess === "writing" || guess === "Cooking" || guess === "reading" || guess === "ply chess" || guess === "hand embroidery") {
        counter++;
        alert('Thats perfect')
        break;
    } else {
        counter = counter
    }
}
alert('My hobbies is 1.writing 2.Cooking 3.reading 4.ply chess 5.hand embroidery ')
alert('your scor is ' + counter + 'out of 7')








