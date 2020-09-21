var read=require('readline-sync')

var num=read.question('enter a number\n')
console.log()

var user ={name:'karthi', age:'23' ,place:'tattamangalam', now:'home',
display:function(){
    console.log(this.place)
}
}
console.log(user.display())
//for (x in user){
  //  console.log(user[x])
//}
//user.name='abhi'
user.displayage=function(){
    console.log(this.age)
}
console.log(user.displayage())
user.dob='28-04-1997'
console.log(user)