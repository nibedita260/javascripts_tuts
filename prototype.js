let arr = ["nibi", "20" ,"50000"];

 let User = {
     Name: arr[0],
     Age : arr[1],
     selfintro : function () {
         var intro="my name is " + this.Name + ", my age is  "+ this.Age;
        return intro
    }
 }
console.log(User.selfintro())