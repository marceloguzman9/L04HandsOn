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
  constructor(jobDescription, yearsExperience, degreeCompleted, name, salary, hireDate, managedEmps, xActivities ) {
    super (name, salary, hireDate);
    this.jobDescription = jobDescription;
    this.yearsExperience = yearsExperience;
    this.degreeCompleted = degreeCompleted;
    this.managedEmps= managedEmps;
    this.xActivities= xActivities;
  }
  getJobDescription() {
    console.log(this.jobDescription);
  }
  getManagedEmps() {
    console.log(this.managedEmps);
  }
  getxActivities() {
    console.log(this.xActivities);
  }

  
}
  
 class Designer extends Employee {
  constructor(jobDescription, yearsExperience, degreeCompleted, name, salary, hireDate ) {
    super (name, salary, hireDate);
    this.jobDescription = jobDescription;
    this.yearsExperience = yearsExperience;
    this.degreeCompleted = degreeCompleted;
  }
}
  
  class SalesAssociate extends Employee {
    constructor(jobDescription, yearsExperience, degreeCompleted, name, salary, hireDate ) {
      super (name, salary, hireDate);
      this.jobDescription = jobDescription;
      this.yearsExperience = yearsExperience;
      this.degreeCompleted = degreeCompleted;
    }
}   

let shiftMgr = new Manager(
    "Manages people"
    , "4 years"
    , "yes"
    , "DJ Brooks"
    , "$50,00"
    , "1/1/2018"
    , "9"
    , "Mentor/Teacher on JavaScript"
);

shiftMgr.getJobDescription();
shiftMgr.getHireDate();
shiftMgr.getName();
shiftMgr.getManagedEmps();
shiftMgr.getxActivities();