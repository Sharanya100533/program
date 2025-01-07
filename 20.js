function createProfile({name,age,interests}){
    const[firstInterest,secondInterest]=interests;

    return {name,age,firstInterest,secondInterest}
}
const profile=createProfile({name:'john',age:25,interests:['reading','travelling']});
console.log(profile);