var read=require("readline-sync")

var num1 = read.question('please enter two numbers')
var num2 =read.question('')
if (num1>num2){
    console.log(num1+' is greatest')
}else{
    console.log(num2+' is greatest')
}
