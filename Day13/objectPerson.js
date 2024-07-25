export let Person = {
    name : "John",
    email : "john@gmail.com",
    phone : 9182736450,
    greet : function(){
        console.log("Hello, I am "+this.name);
    }
}
