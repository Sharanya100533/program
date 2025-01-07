function Student(name,grade){
    this.name = name;
    this.grade = grade;
    this.study = function study(){
        console.log("Btech 3rd year");
    }
    this.getGrade = function getGrade(){
        console.log("Your grade is "+this.grade);
    }
}

let obj = new Student("Sana",9.41);
obj.study();
obj.getGrade();

let Myobj = new Student("Shreya",9.3);
Myobj.study();
Myobj.getGrade();