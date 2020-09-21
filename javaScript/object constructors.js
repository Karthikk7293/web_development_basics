function user(name,age,place){
    this.name=name
   this.age=age
  this.place=place
   this.display =function(){
       var name='karthi'
       var age= 23
       var place='pallimokku'
    console.log('name :'+this.name,'age: '+this.age,'place: '+this.place)
}
}

var person=new user('kiran',20,'tattamangalam')
var person2=new user('kannan',22,'ambattu parambu')


person.display()
person2.display()