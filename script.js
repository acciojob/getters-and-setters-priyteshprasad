//complete this code
class Person {
	constructor(name, age){
		this._name = name;
		this._age =age;
	}
	set name(n){
		this._name = n	
	}
	set age(n){
		this._age = n	
	}
	get name(){
		return this._name
	}
	get age(){
		return this._age
	}
	
}

class Student extends Person {
	constructor(name, age){
		super(name, age)
		
	}
	study(){
		console.log(this.name+" is studying")
	}
}

class Teacher extends Person {
	constructor(name, age){
		super(name, age)
		
	}
	teach(){
		console.log(this.name+" is teaching")
	}
}
// const person = new Person("John", 25);
// console.log(person.name); // Output: John

// person.age = 30;
// console.log(person.age); // Output: 30

// const student = new Student("Alice", 22);
// student.study(); // Output: Alice is studying

// const teacher = new Teacher("Bob", 40);
// teacher.teach(); // Output: Bob is teaching

// console.log(student.name)
// student.age = 13
// console.log(student.age)

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
