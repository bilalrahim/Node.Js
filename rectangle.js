//Creating node module that is used in index.js
//Asynchronization using Promises.
//First parameter of Promise() is for .then and second for .catch
module.exports = (x,y) => {
    return new Promise((resolve,reject)=>{
        if(x>0 || y>0){
            resolve({
                perimeter: (x,y)=>console.log((2*(x+y))),
                area: (x,y) =>console.log(x*y)
            })
        }
        else{
           reject("Error")
           }
        
    })
}

