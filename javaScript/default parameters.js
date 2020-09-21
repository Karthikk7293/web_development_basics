// In here we can already set up the aurgiments by default using undefined keyword
// In case we use null keyword it act as 0 

function sample(num1=100,num2){
    console.log(num1+num2)
}


sample(undefined,20) //default aurgiment set up 
sample(10,20)
sample(null,30)// null means zero 