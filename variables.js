
//var
// var names="nibi"
// var nameList=["joe","jam"]
// nameList.push(names);
// console.log(nameList)

//const variable
const greeting = "say Hi";
{
const greeting = "say Hello instead";
}
console.log(greeting)
{
const greeting=["nibi","hina","joe"]
console.log(greeting[0])
}
console.log(greeting[0])
const names="nibi"
const nameList=["joe","jam"]
nameList.push(names);
console.log(nameList +" length of namelist: "+nameList.length)

//let
let greet = "say Hi";
    if (true) {
        let greet = "say Hello instead";
        console.log(greet); 
    }
console.log(greet);
greet= "say Hello instead";
console.log(greet)

 let newNamelist=[]
for(var i=nameList.length-1;i>=0;i--){
    newNamelist.push(nameList[i]);
}
console.log("namelists:"+newNamelist)

function reverseNameList(arr) {
   var newArray = [];
   let x="Gita"
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }

  reverseNameList(nameList.push(greet))
  console.log(reverseNameList(nameList))