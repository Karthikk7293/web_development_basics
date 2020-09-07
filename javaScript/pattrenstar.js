var read=require('readline-sync')

var limit=read.question('please enter the limit')
for(var i=1; i<=limit; i++){

    console.log('*'.repeat(i))
  
}

