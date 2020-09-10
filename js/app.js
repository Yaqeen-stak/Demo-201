'use strict'
var counter = 0;
function user() {
    var user = prompt('What is your name ?');
    console.log('The user name is ' + user);
    alert('You are welcome ' + ' ' + user + ' Please answer the quastions by Yes/No only !');
    return (user);
}


function inputQas1() {
    return (prompt('Do you know how old i am ?'));

}
function checkQas1(qas1) {
    
    if (qas1 === 'yes') {
        console.log('the first  answer is correct! ');
        counter++;
        alert('It\'s just the beginning ! you should know me more !');
    }
    else if (qas1 === 'no') {
        console.log('user didn\'t know :( ');
        alert('It was easy quastion :( ');
    }
    return(counter);
}
function getQas1() {
    var qas1 = inputQas1();
    console.log('The user answer is ' + qas1);
    checkQas1(qas1);
}

function inputQas2() {
    var qas2 = prompt('Do you know what\'s my last name ?');
    console.log('the user answer is  ' + qas2);
    return (qas2);
}

function checkQas2(qas2) {
   
    if (qas2 === 'yes') {
        console.log('the second  answer is correct!');
        counter++;
        alert('It\'s goog ! you should know me more !');
    }
    else if (qas2 === 'no') {
        console.log('user didn\'t know :( ');
        alert('It was easy quastion too :( ');
    }
    return (counter);
}

function getQas2() {
    var qas2 = inputQas2();
    checkQas2(qas2);
}

function inputQas3() {
    var qas3 = prompt('Do you know my favorte drink ? ');
    console.log('the user answer is  ' + qas3);
    return (qas3);
}

function checkQas3(qas3) {
   
    if (qas3 === 'yes') {
        console.log('the third answer is correct!!');
        counter++;
        alert('Thats advanced ! you should know me more !');
    }
    else if (qas3 === 'no') {
        console.log('user didn\'t know :( ');
        alert('It\'s not easy quastion but you should know :( ');
    }
    return (counter);
}


function getQas3() {
    var qas3 = inputQas3();
    checkQas3(qas3);
}


function inputQas4() {
    var qas4 = prompt('Do you know what\'s my favorte talent ?');
    console.log('the user answer is  ' + qas4);
    return (qas4);
}

function checkQas4(qas4) {
   
    if (qas4 === 'yes') {
        console.log('the fourth answer is correct!!');
        counter++;
        alert('It seems that you know me :) ! you should know me more !');
    }
    else if (qas4 === 'no') {
        console.log('user didn\'t know :( ');
        alert('It\'s not easy quastion, I well help u, it\'s writing "make it our little secret" ');
    }
    return (counter);
}

function getQas4() {
    var qas4 = inputQas4();
    checkQas4(qas4);
}

function inputQas5() {
    var qas5 = prompt('Do you my favorte songe ?!');
    console.log('the user answer is  ' + qas5);
    return (qas5);
}

function checkQas5(qas5) {
   
    switch (qas5) {
        case ('yes'):
            console.log('the fifth answer is correct!!');
            counter++;
            alert(' Sure you are my best friend :) !');
            break;
        case ('no'):
            console.log('user didn\'t know :( ');
            alert('Don\'t be sad , usually i don\'t tell anyone about that');
            break;
        default:
            console.log('Sorry, you out of expectations ');
            break;

    }
    return (counter);
}

function getQas5() {
    var qas5 = inputQas5();
    checkQas5(qas5);
}

function inputQas6(){
    return(prompt('guess a number'));

}

function checkQas6(){
    var bool = false;
    for (var i = 0; i < 4; i++) {
        var number = inputQas6();
        var num = parseInt(number);
        console.log(typeof num)
        console.log('user answer is ' + num);
        if (num == "") {
            alert('enter a number')
        }
        else if (num === 20) {
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
    return (counter);   
}

function getQas6(){
    checkQas6();
}

function inputQas7(){
    return(prompt('Guess whats my hobbies !!'));
}

function checkQas7(){
var hobb = ["writing", "Cooking", "reading", "ply chess", "hand embroidery"];
for (var i = 0; i < 6; i++) {
    var guess = inputQas7();
    console.log('user answer is ' + guess);
    if (guess === "writing" || guess === "cooking" || guess === "reading" || guess === "ply chess" || guess === "hand embroidery") {
        counter++;
        alert('Thats perfect')
        break;
    } else {
        counter = counter
    }
}
return (counter);
}

function getQas7(){
    checkQas7();
    alert('My hobbies is 1.writing 2.Cooking 3.reading 4.ply chess 5.hand embroidery ');

}


function score(counter){
 alert  ('your scor is ' + counter + ' out of 7');
}


user();
getQas1();
getQas2();
getQas3();
getQas4();
getQas5();
getQas6();
getQas7();
score(counter);




