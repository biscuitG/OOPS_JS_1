function Product(n,p){

    this.name=n;
    this.price=p;

    return this;
}

// when call with new keyword {}<-this happen else not

const p1=new Product("iphone",4343432);
console.log(p1);