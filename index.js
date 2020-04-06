var rec = require('./rectangle');

function solveRec(l,b){
    console.log("Solving for rectangle with l = "+l+" and b = "+b);

    rec(l,b).then((rectangle)=>
    {
        console.log("Area of rectangle "+ rectangle.area(l,b))
        console.log("Perimeter of Rectangle" + rectangle.perimeter(l,b))
    }).catch((reject)=>{
        console.log(reject);
    })
}
solveRec(2,4);
