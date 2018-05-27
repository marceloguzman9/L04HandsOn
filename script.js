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
constructor(jobDescription, yearsExperience, degreeCompleted, name, salary, hireDate, managedEmps) {
  super (name, salary, hireDate);
  this.jobDescription = jobDescription;
  this.yearsExperience = yearsExperience;
  this.degreeCompleted = degreeCompleted;
  this.managedEmps= managedEmps;
  
}
getJobDescription() {
  console.log(this.jobDescription);
}
getManagedEmps() {
  console.log(this.managedEmps);
}
}
let shiftMgr = new Manager("Manages people", "4 years", "yes", "DJ Brooks", "$50,00", "1/1/2018", "9");
shiftMgr.getName();
shiftMgr.getJobDescription();
shiftMgr.getHireDate();
shiftMgr.getManagedEmps();


class Designer extends Employee {
  constructor(jobDescription, yearsExperience, degreeCompleted, name, salary, hireDate) {
    super (name, salary, hireDate);
    this.jobDescription = jobDescription;
    this.yearsExperience = yearsExperience;
    this.degreeCompleted = degreeCompleted;
  }
  getYearsExperience() {
    console.log(this.yearsExperience);
  }
  getDegreeCompleted() {
    console.log(this.jobDescription);
  }
}
let oldDsgr= new Designer("Creates Clothing", "3 years", "yes", "Calvin DaKine", "$45,000", "3/4/2018");
oldDsgr.getName();
oldDsgr.getHireDate();
oldDsgr.getSalary();
oldDsgr.getYearsExperience();
  

class SalesAssociate extends Employee {
    constructor(jobDescription, yearsExperience, degreeCompleted, name, salary, hireDate ) {
    super (name, salary, hireDate);
    this.jobDescription = jobDescription;
    this.yearsExperience = yearsExperience;
    this.degreeCompleted = degreeCompleted;
    }
    getJobDescription() {
      console.log(this.jobDescription);
  }   
  getHireDate() {
    console.log(this.Date);
  }
}
  let oldSals= new SalesAssociate("Sells Lamborgini's", "5 years", "none", "Gustavo Stallone", "$100k", "3/16/2018");
  oldSals.getName();
  oldSals.getJobDescription();
  oldSals.getSalary();
  
