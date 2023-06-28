class Product{
  
    version='234';
    constructor(n,p){
        this.name=n; //data member
        this.price=p; // data memebr
    }
  
   display(){
    console.log(this.name,this.price,this.version);
   } 

}

let iphone=new Product("Iphone 11",4444444);
console.log(iphone); 
iphone.display();