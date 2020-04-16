function checker(num){
var arr = [];
for (var i = 1; i <= num; i++) {
    arr.push(i);
}
var range = arr.toString();
//checking for numbers divisible by 2,3,5
var newArr = arr.filter(val => val % 2 == 0 && val % 3 == 0 && val % 5 == 0);
for(let j = 0; j < newArr.length; j++){
	range = range.replace(newArr[j], "yu-gi-oh");
}
//checking for numbers divisible by 2,3
var newArr = arr.filter(val => val % 2 == 0 && val % 3 == 0);
for(let j = 0; j < newArr.length; j++){
	range = range.replace(newArr[j], "yu-gi");
}
//checking for numbers divisible by 2,5
var newArr = arr.filter(val => val % 2 == 0 && val % 5 == 0);
for(let j = 0; j < newArr.length; j++){
	range = range.replace(newArr[j], "yu-oh");
}
//checking for numbers divisible by 3,5
var newArr = arr.filter(val => val % 2 == 0 && val % 5 == 0);
for(let j = 0; j < newArr.length; j++){
	range = range.replace(newArr[j], "gi-oh");
}
//checking for numbers divisible by 5
var newArr = arr.filter(val => val % 5 == 0);
for(let j = 0; j < newArr.length; j++){
	range = range.replace(newArr[j], "oh");
}
//checking for numbers divisible by 3
var newArr = arr.filter(val => val % 3 == 0);
for(let j = 0; j < newArr.length; j++){
	range = range.replace(newArr[j], "gi");
}
//checking for numbers divisible by 2
var newArr = arr.filter(val => val % 2 == 0);
for(let j = 0; j < newArr.length; j++){
	range = range.replace(newArr[j], "yu");
}
var result = range.split(',');

return result;
}

checker(100);

checker(90);