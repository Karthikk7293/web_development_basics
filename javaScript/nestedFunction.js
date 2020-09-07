var num=10
function hello(){
     num=20
    function hei(){
         num=30
    }
    hei()
}
hello()
    console.log(num)
//nested function is used for a set of functions used into the same function