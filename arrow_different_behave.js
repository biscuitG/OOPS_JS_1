const obj={
    name : "Pj",
    display : function(){
        console.log(this,"this is calling");
    }
}

const obj1={
    name: "pj1",
    display : ()=>{
        console.log(this, "callign from obj2");
    }
}

obj.display(); // this pint to whole
obj1.display(); // this point to {}