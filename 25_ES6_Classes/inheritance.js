class Person {

    constructor(name,age){
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}

class Employee extends Person{

    constructor(name,age,designation){
        super(name,age);
        this._designation = designation;
    }

    get designation() {
        return this._designation;
    }

    set designation(value) {
        this._designation = value;
    }

    getEmployeeData(){
        return `NAME : ${this.name}
                AGE : ${this.age}
                DESIGNATION : ${this.designation}`;
    }
}

class Student extends Person{
    constructor(name , age , course){
        super(name,age);
        this._course = course;
    }

    get course() {
        return this._course;
    }

    set course(value) {
        this._course = value;
    }

    getStudentData(){
        return `NAME : ${this.name}
                AGE : ${this.age}
                COURSE : ${this.course}`;
    }
}

// Create employee Object
let employee = new Employee('John',40,'Manager');
console.log(employee.getEmployeeData());

// Create student Object
let student = new Student('Rajan',21,'Engineering');
console.log(student.getStudentData());
