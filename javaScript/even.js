var read=require('readline-sync')

var limit=read.question('please enter the limit')

for (i=2; i<=limit; i++){
   if(i%2==0){
       console.log(i)
   }
}

//for (i=2; i<=limit; i++){
 //   if(i%2==1){
   //     console.log(i) this program for odd numbers