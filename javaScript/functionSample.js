//this is the javascript function file.The four types of functions are used in the same file
//1.without argiument without return value
//2.without argiument with return value
//3.with argiument without return value
//4.with argiumeint with return value 

var read=require('readline-sync')

function hello(){
    var num1=read.question('please enter the first number')
    return num1
}
function hei(){
    var num2=read.question('please enter the second number')
    return num2
}
function sum(){
   a= hello()
   b= hei()
    sum1=eval(a)
    sum2=eval(b)
    res=sum1+sum2
    console.log(res)
} 
sum()