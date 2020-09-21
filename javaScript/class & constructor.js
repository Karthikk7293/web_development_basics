
class sample{
     samplehello(){
         console.log('this is the sample hello')
     }
}




class hello extends sample{//extends means inheritance and super() method is must use for the working of inheritanse from base class to sub class
    
    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num2
      


    }

    display(){
        console.log('hai friends : \n'+(this.num1+this.num2))
    }
}
let hey=new hello(10,20)
hey.display()
let hoy=new hello(200, 300)
hoy.display()
hoy.samplehello()
