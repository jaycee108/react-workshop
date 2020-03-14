//Task 1
class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}
const student1 = new Student("Jennifer","jennifer@nucamp.com","San Diego");
const student2 = new Student("Gina", "gina@nucamp.com", "San Diego");
const student3 = new Student("Betty", "betty@nucamp.com", "San Francisco");
class Bootcamp {
    constructor(name, level, students=["jennifer@nucamp.com","gina@nucamp.com"]) {
        this.name = name;
        this.level = level;
        this.students = students;        
    }
    //Task 2 & 3
    registerStudent(name,email,community){
      if (this.students.includes(email)){
          console.log(`${email} is already enrolled in the ${this.name} bootcamp in ${community}.`);
      }else{
          this.students.push(email)
              console.log (`${email} has been registered to the ${this.name} bootcamp in ${community}.`);
          }
        }
    }
const react = new Bootcamp("React","1");

react.registerStudent(student1.name,student1.email,student1.community);
react.registerStudent(student2.name,student2.email,student2.community);
react.registerStudent(student3.name,student3.email,student3.community);

console.log(react.students);

