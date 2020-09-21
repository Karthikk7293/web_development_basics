// incase we use let as a variable dicleration next time we cannot use the same variable name for another delcleration

//let number=100

let number=12
console.log(number)

function helo(){
   var i=0
    if(i==0){
        var j=0

        console.log('nothing')
    }
 console.log(j)
}
helo()

// Scope  of  var is into a function and scope of let is into only the block(open and close cerlybraces)
//otherwise both variables are dicleared seperatly

const hello=100
//hello =200 this is error because const variables are cannot dicleare second time
console.log(hello)

const array=['dilshad','kavya','nikhil kilivayil']

array.push('sonu gopal')

console.log(array)
// incase array system we cannot create a new array but we have to add properties using push keyword