"use strict"

// 1
let array = [5, 25, 89, 120, 36];

array.push ('javascript' , 'python');
array.unshift ('html', 'css');
console.log(array.length);
array.shift() && array.pop();
array.splice(0, 3 , 'NodeJs')

// 2

let array2 = ['ფორთოხალი', 'ბანანი', 'მსხალი']
console.log(array2.length);
array2.push('ვაშლი' , 'ანანასი')
array2.unshift('საზამთრო')
console.log(array2.length);
array2.splice(0,3,'მანგო')
array2.shift() && array2.pop();
console.log(array2.length);

// 3

let array3 = [12, 25, 3, 6, 8, 14, 7, 23];
let newarray3 = array3.map(function(item) {
return item / 3;
})

// 4
let array4 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

let newarray4 = array4.filter(function(item) {
    return item === 'Number';
})

// 5

let languages = ['html', 'css', 'javascript', 'python', 'php'];
let newlanguages = languages.filter(function(item) {
    return item.length > 3;
})

// 6

let item = [12, 'google', 32, null, 'yahoo', 25];
let newitem = item.map(function(item) {
    if(typeof item === 'number'){
                return(item * item);
            }
            if(typeof item === 'string'){
                return item.toUpperCase();
            } else {
                return item;
            }
        })
        console.log(newitem);

// 7

let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let newwords = words.filter(function(item) {
    if (item.includes ('m') || item.includes ('M') ) {
        return item
    }

})

// 8

let arr = [1, 2, 3, 4, 5];
let sum = 0 ; 
arr.forEach(function(item) {
        return sum += item
    })

console.log(sum);

// 9

let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
let newnumbers= numbers.filter(function(item) {
if (item > 0){
    return item;
}
})

console.log(newnumbers);

// 10

let array5 =[1, 2, 3, 4, 5];
array5.splice(3,0,'a', 'b', 'c')

console.log(array5);