function calc(a,b){
    this.a = a;
    this.b = b;

    this.add = function add(){
        sum = this.a + this.b;
        return `The addition of ${this.a} and ${this.b} is ${sum}`;
    }
    this.sub=function sub(){
        result = this.a-this.b;
        return `Subtraction of ${this.a} and ${this.b} is: ${result}`;
    }
    this.mul=function mul(){
        mult = this.a*this.b;
        return `Multiplication of ${this.a} and ${this.b} is: ${mult}`;
    }
    this.div=function div(){
        if (this.b === 0) {
            return "Error: Division by zero is not allowed.";
        } else {
            divi = this.a / this.b;
            return `Division of ${this.a} and ${this.b} is: ${divi}`;
        }
        
    }
    this.modulo=function modulo(){
        mod = this.a%this.b;
        return `Modulus of ${this.a} and ${this.b} is: ${mod}`;
    }
}

let userInputA = prompt("Enter the first number: ");
let userInputB = prompt("Enter the second number: ");

let numA = parseFloat(userInputA);
let numB = parseFloat(userInputB);


let obj = new calc(numA, numB);
console.log(obj);
console.log(obj.add());
console.log(obj.sub());
console.log(obj.mul());
console.log(obj.div());
console.log(obj.modulo());
