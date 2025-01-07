let Person = {
    name:"Sana",
    age:20,
    greet(){
        console.log("Hello "+this.name);
    },
    isAdult(){
        if(this.age>=18){
            console.log("You are an adult");
        }
        else{
            console.log("You are still a child");
        }
    }
}
console.log(Person);
console.log(Person.name);
console.log(Person.age); 
Person.greet();
Person.isAdult();
