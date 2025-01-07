function createProfile({name,email}){
    return {name,email};
}
const profile={
   name:'sharanya',
   age:20,
   email:'abc@gmail.com',
   address:'hyd'
};
const user=createProfile(profile);
console.log(user);

