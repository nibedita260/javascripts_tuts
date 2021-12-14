//callback

function car_features(name,modelname,milage,price){
    var carDetails="name:"+name+",modelname:"+modelname+"milage:"+milage+",price:"+price;
    return carDetails
}

function ShowCars(callback){
    console.log(callback)
}

ShowCars(car_features("tata nexon","xz plus(o)",17.22,10,99,000))

function userDetails(username,city,phno){
    console.log("username:"+username)
    console.log("city:"+city)
    console.log("phno:"+phno)
}
function ShowCarsWithusername(callback){
    var username="nibi"
    var city="Berhampur"
    var phno=32543657777
    callback(username,city,phno)
}

ShowCarsWithusername(userDetails)