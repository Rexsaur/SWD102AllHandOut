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
    constructor(descriptionOfJob, name, salary, hireDate) {
        super(name, salary, hireDate)
        this.descriptionOfJob = descriptionOfJob;
    }
    get jobDescription() {
        console.log("I am " + this.name + " hired on " + this.hireDate + " , make " + this.salary + " , and " + this.descriptionOfJob)
    }
  }
  class Designer extends Employee {
    constructor(experience, name, salary, hireDate) {
        super(name, salary, hireDate)
        this.experience = experience;
    }
    get yearsExperienced() {
        console.log("I am " + this.name + " hired on " + this.hireDate + " , make " + this.salary + " , and " + this.experience)
    }
  }
  class SalesAssociate extends Employee{
    constructor(degrees, name, salary, hireDate) {
        super(name, salary, hireDate)
        this.degrees = degrees;
    }
    get degreeCompleted() {
        console.log("I am " + this.name + " hired on " + this.hireDate + " , make " + this.salary + " , and " + this.degrees)
    }
  }
let staff1 = new Manager("I am a manager.", "Brandon", 200000, "1/29/19");
staff1.descriptionOfJob();
let staff2 = new Designer("I have 25 years of experience.", "Ariel", 175000, "5/16/19")
staff2.yearsExperienced();
let staff3 = new SalesAssociate("I have my Doctorates Degree.", "Alfred", 150000, "9/7/19");
staff3.degreeCompleted();