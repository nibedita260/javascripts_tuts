//async-await 

async function hello() {
    return await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'foo');
      });
  };

  //hello().then(res=>console.log(res1))
  hello().then(res=>console.log(res))
  .catch(err=>console.log(err));
  
  async function f() {
    try {
        var carnameList=["audi","nexon","tigor"]
      let response = await carnameList
      let user = await response
      console.log(user)
    } catch(err) {
      // catches errors both in fetch and response.json
      console.log({err:err});
    }
  }
  
  f();