//promises

function getuserlogin(email,pass){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(email==null && pass==null){
                reject("Invalid user input");
            }else{
                resolve({"email":email,"password":pass});
            }
        },1000)
    })
}

const result=getuserlogin("nibi@gmail.com","qwery");
result.then((res)=>console.log(res))
.catch((err)=>{console.log(err)})
   
  // Promise.all
  Promise.all([getuserlogin("nibi@gmail.com","qwery"),getuserlogin("hina@gmail.com","Hina@123")]).then(result => console.log(result))