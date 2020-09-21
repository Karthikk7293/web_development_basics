try{
    var a=0

    if(a==0)
    throw 'user not found'
}catch(err){
    console.log(err)
}finally{
    console.log('this is a final block')
}
