class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }
class Manager extends Employee {
  constructor(jobDescription, yearsExperience, degreeCompleted, name, salary, hireDate ) {
     super (name, salary, hireDate);
     this.jobDescription = jobDescription;
     this.yearsExperience = yearsExperience;
     this.degreeCompleted = degreeCompleted;

 
     


     

                

                }

}
// constructor (constructer is (jobDescription, yearsExperience, degreeCompleted, name, salary, hireDate))
  // class Person {
  //constructor(firstName, lastName) {
    //this.firstName = firstName;
    //this.lastName = lastName;
  //}

  //greeting() {
  //  console.log("Hello, my name is " + this.firstName + ".");
 // }
//}

//class NewStudent extends Person {
  //constructor(studentID, firstName, lastName) {
    //super(firstName, lastName);
    //this.studentID = studentID;
  //}
  //studentInfo() {
    //console.log(this.studentID + " " + this.firstName + ", " + this.lastName);
  //}
//}

//let student = new NewStudent(12, "John", "Smith");
//student.greeting();
//student.studentInfo();