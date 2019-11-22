//Bài1
function get1() {
    var D = new Date();
    var date = D.getDay() + 1;
    var month = D.getMonth() + 1;
    var year = D.getYear() - 100;
    var GMT = D.toUTCString();
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var data = D.getDate() + '-' + month + '-' + year + '<br>';
    data += D.getDate() + '-' + month + '-' + year + ' ' + D.getHours() + ':' + D.getMinutes() + '<br>';
    data += D.getDate() + '-' + month + '-' + D.getFullYear() + ' ' + D.getHours() + ':' + D.getMinutes() + ':' + D.getSeconds() + '<br>';
    data += month + '/' + D.getDate() + '/' + year + '<br>';
    if (month < 10) { data += '0' + month + '/' + D.getDate() + '/' + year + '<br>'; }
    else { data += month + '/' + D.getDate() + '/' + year + '<br>'; }
    data += months[D.getMonth()] + ' ' + D.getDate() + ', ' + D.getFullYear() + '<br>';
    data += months[D.getMonth() + 12] + ' ' + D.getDate() + ' ' + D.getFullYear() + '<br>';
    if (D.getHours() < 12) {
        data += D.getDate() + '/' + month + '/' + year + ' ' + D.getHours() + ':' + D.getMinutes() + ' AM' + '<br>';
    }
    else {
        var hours = D.getHours() - 12;
        data += D.getDate() + '/' + month + '/' + year + ' ' + hours + ':' + D.getMinutes() + ' PM' + '<br>';
    }
    data += D.getDate() + '-' + months[D.getMonth()] + '-' + D.getFullYear() + ' ' + D.getHours() + ':' + D.getMinutes() + ':' + D.getSeconds() + '<br>';
    data += days[D.getDay()] + ', ' + months[D.getMonth() + 12] + ' ' + D.getDate() + ', ' + D.getFullYear() + '<br>';
    data += D.getFullYear() + '-' + month + '-' + D.getDate() + '+' + -D.getTimezoneOffset() / 60 + ':00' + '<br>';
    if (D.getHours() < 12) {
        data += days[D.getDay()] + ', ' + months[D.getMonth() + 12] + ' ' + D.getDate() + ', ' + D.getFullYear() + ' ' + D.getHours() + ':' + D.getMinutes() + ':' + D.getSeconds() + ' AM ' + GMT.substr(26, 3);
    }
    else {
        data += days[D.getDay()] + ', ' + months[D.getMonth() + 12] + ' ' + D.getDate() + ', ' + D.getFullYear() + ' ' + hours + ':' + D.getMinutes() + ':' + D.getSeconds() + ' PM ' + GMT.substr(26, 3);
    }
    document.getElementById('result1').innerHTML = data;
}
//Bài2
function FtoC(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;
}
function CtoF(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML = (valNum * 1.8) + 32;
}
//Bài4
function get4() {
    var fileName = document.getElementById("file").value;
    var ext = fileName.split('.').pop();
    document.getElementById('result4').innerHTML = ext;
}
//Bài5
function remove() {
    var text = document.getElementById("text").value;
    var num = document.getElementById("num").value;
    var text = text.substring(0, num - 1) + text.substring(num, text.length);
    document.getElementById('result5').innerHTML = text;
}
//Bài6
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var newArr = new Array();
function get6() {
    for (var i = 0; i < names.length; i++) {
        if (names[i].slice(0, 1) == "J") {
            newArr.push('Goodbye ' + names[i]);
        }
        else {
            newArr.push('Hello ' + names[i]);
        }
    }
    document.getElementById("result").innerHTML = newArr;
}
//Bài7
var people = ["Greg", "Mary", "Devon", "James"];
console.log('1. Original Array:')
people.forEach(Element => {
    console.log(Element);
});
console.log('2. Array after remove ' + people.shift(), people);

console.log('3. Array after remove ' + people.pop(), people);
people.unshift("Matt");
console.log('4. Array after add Matt to the front of', people);
people.push("Hiển");
console.log('5. Array after add my name to the end of', people);
console.log('6. Array after console.log Marry');
for (var i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] == "Mary") break;
}
console.log('7. Array after make a copy of array not include Mary or Matt');
var y = people.indexOf("Matt");
var newpeople1 = people.slice(0, y) + ' ' + people.slice(y + 1, 4);
console.log('7.1 not include Matt:', newpeople1);
var x = people.indexOf("Mary");
var newpeople2 = people.slice(0, x) + ' ' + people.slice(x + 1, 4);
console.log('7.2 not include Mary: ', newpeople2);
console.log("8. indexOf Mary: ", people.indexOf("Mary"));
console.log("9. indexOf Foo: ", people.indexOf("Foo"));
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log("10. Delete Devon and add Elizabeth, Artie: ", people);
var withBob = people.concat("Bob");
console.log('11. Set withBob equal to the people array concatenated with the string of "Bob".', withBob);