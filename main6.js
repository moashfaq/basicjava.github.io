console.log("Connected with external js");


var parents={
    name:"father",
    sing(){
        console.log("singing");
    }

    // drink:()=>{
    //     console.log("drinking");
    // }
};


var child={
    name:"son",
    eat(){
        console.log("eating");
    }
};

child.__proto__=parents;

for(let p in child)
{
    console.log(p+" "+child.hasOwnProperty(p))
}
