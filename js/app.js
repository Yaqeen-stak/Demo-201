'usestrict'
var user = prompt('What is your name ?').toUpperCase();
console.log('The user name is ' + user);
alert('You are welcome ' + ' ' + user + ' Please answer the quastions by Yes/No only !');


var qas1 = prompt('Do you know how old i am ?').toUpperCase();
console.log('The user answer is ' + qas1);

while (qas1 !== 'yes' && qas1 !== 'no') {
   qas1 = prompt('Please answer with yes or no only');
}
 if (qas1 === 'yes') {
    console.log('the first  answer is correct! ');
    alert('It\'s just the beginning ! you should know me more !');
}
else if (qas1 === 'no') {
    console.log('user didn\'t know :( ');
    alert('It was easy quastion :( ');
} 
var qas2 = prompt('Do you know what\'s my last name ?').toUpperCase();
console.log('the user answer is  '+ qas2);
while (qas2 !== 'yes' && qas2 !== 'no') {
    qas2 = prompt('Please answer with yes or no only');
 }
if (qas2 === 'yes') {
    console.log('the second  answer is correct!');
    alert('It\'s goog ! you should know me more !');    
}
else if (qas2 === 'no') {
    console.log('user didn\'t know :( ');
    alert('It was easy quastion too :( ');
} 
var qas3 = prompt('Do you know my favorte drink ? ').toUpperCase();
console.log('the user answer is  '+ qas3);
while (qas3 !== 'yes' && qas3 !== 'no') {
    qas3 = prompt('Please answer with yes or no only');
 }
if (qas3 === 'yes') {
    console.log('the third answer is correct!!');
    alert('Thats advanced ! you should know me more !');    
}
else if (qas3 === 'no') {
    console.log('user didn\'t know :( ');
    alert('It\'s not easy quastion but you should know :( ');
} 

var qas4 =prompt('Do you know what\'s my favorte talent ?').toUpperCase();
console.log('the user answer is  '+ qas4);
while (qas4 !== 'yes' && qas4 !== 'no') {
    qas4 = prompt('Please answer with yes or no only');
 }
if (qas4 === 'yes') {
    console.log('the fourth answer is correct!!');
    alert('It seems that you know me :) ! you should know me more !');    
}
else if (qas4 === 'no') {
    console.log('user didn\'t know :( ');
    alert('It\'s not easy one quastion, I well help u, it\'s writing "make it our little secret" ');
}
var qas5 =prompt('Do you my favorte songe ?!').toUpperCase();
console.log('the user answer is  '+ qas5);
while (qas5 !== 'yes' && qas5 !== 'no') {
    qas5 = prompt('Please answer with yes or no only');
 }
if (qas5 === 'yes') {
    console.log('the fifth answer is correct!!');
    alert(' Sure you are my best friend :) !');    
}
else if (qas5 === 'no') {
    console.log('user didn\'t know :( ');
    alert('Don\'t be sad , usually i don\'t tell anyone about that');
}

