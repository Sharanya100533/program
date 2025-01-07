function updateEmployee(employee,newRole){
   return {...employee,role:newRole};
}

const employee={name: 'sharanya',role:'engineer',age:20};
const updateEmp=updateEmployee(employee,'student');
console.log(updateEmp);