// class Employee {

// 	setName(name) {
// 		this.fname = name;
// 	}
// 	setEmail(email) {
// 		this.email = email;
// 	}
// 	getName(name) {
// 		return this.fname;
// 	}
// 	getEmail(email) {
// 		return this.email;
// 	}

// } 
// let e1 = new Employee();
// let user_name = "Sharvan Kumar";
// let email = "s@gmail.com";
// e1.setName(user_name)
// e1.setEmail(email)
// console.log(e1.getName());
// console.log(e1.getEmail());


// class Employee {
// 	constructor(user_name, email) {
// 		this.name = user_name;
// 		this.email = email;
// 	}

// 	getName() {
// 		return this.name;
// 	}

// 	getEmail() {
// 		return this.email;
// 	}

// 	getFullDetails() {
// 		// return this.name + " " + this.email;
// 		return `My Name is ${this.name} and my email is ${this.email}.`
// 	}

// 	getAllDetails() {
// 		let a = 5
// 		let b = 4
// 		console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// 	}
// }
// let user_name = "Sharvan Kumar";
// let email = "s@gmail.com";
// e1 = new Employee(user_name, email);

// console.log(e1.getName());
// console.log(e1.getEmail());
// console.log(e1.getFullDetails());

// e1.getAllDetails();

// Earning

// Basic Salary = 5000

// HRA = b * 35% 

// DA = b * 15% 

// MA = b * 10%

// SA = b * 5%

// Deducation

// PT = 200

// PF = 7 - 15%

// B = 5 - 10 = 7 

// B = 11 - 20 = 10 

// B = 20 > = 15 


// Total Earning 

// Total Deducation 

// Gross Salary 


// Take Home

// class SalarySlip {


// 	pt = 200;

// 	constructor(nameOfEmployee, basicSalary) {
// 	  	this.nameOfEmployee = nameOfEmployee;
// 	  	this.basicSalary = basicSalary;
// 	}

// 	hraCalculation() {
// 		return (this.basicSalary*35)/100;
// 	}

// 	daCalculation() {
// 		return (this.basicSalary*15)/100;
// 	}

// 	maCalculation() {
// 		return (this.basicSalary*10)/100;
// 	}

// 	saCalculation() {
// 		return (this.basicSalary*5)/100;
// 	}

// 	earaning() {
// 		return (this.basicSalary +  this.hraCalculation() + this.daCalculation() + this.maCalculation() + this.saCalculation()
// 		); 
// 	}

// 	calculatePf() {
// 		if (this.basicSalary>5000 && this.basicSalary<=10000) {
// 			return (this.basicSalary*7)/100;
// 		} else if(this.basicSalary>10000 && this.basicSalary<=20000) {
// 			return (this.basicSalary*10)/100;
// 		} else {
// 			return (this.basicSalary*15)/100;
// 		}
// 	}

// 	toatalDeducation() {
// 		return (this.pt + this.calculatePf())
// 	}

// 	grossSalary() {

// 		return (this.earaning() + this.toatalDeducation())
// 	}

// 	takeHomeSalary() {

// 		return (this.grossSalary() - this.toatalDeducation());
// 	}

// 	getUserSalaryDetails() {
// 		return `Employee Name is ${this.nameOfEmployee} and Take Home Salary is ${this.takeHomeSalary()}.`
// 	}

// }


// function calCulateSalary() {

// 	let nameOfEmployee = document.getElementById('name').value;

// 	let basicSalary = parseInt(document.getElementById('Basic').value);

// 	// console.log(typeof(basicSalary));

// 	let salary = new SalarySlip(nameOfEmployee, basicSalary);


// 	document.write(salary.getUserSalaryDetails());
	

// 	return false;
// }


// Parent Class
// class Company {

// 	constructor(name) {
// 	  this.name = name;
// 	}

// 	greet() {
// 		console.log(`Hello Good Morning ${this.name}`);
// 	}
// }

// // Inherat Child Class

// class Employee extends Company {
// 	//
// }

// let obj = new Company("SHarvan");

// console.log(obj);

// obj.greet();


// Parent Class

// class Person  {
// 	constructor(name) {
// 	  this.name = name;
// 	}

// 	greet() {
// 		console.log(`Hello Good Morning ${this.name}`);
// 	}
// }

// class Student extends Person {

// 	constructor(name) {
// 		super(name);
// 	}

// 	getUserName() {

// 		console.log(` User Name is  ${this.name} `);
// 	}
// }

// let obj = new Student("Kumar")

// console.log(obj);

// obj.greet();

// obj.getUserName();

// function addTwoNumber() {
// 	console.log(5+10);
// }

// addTwoNumber()

// let x = function () {
// 	return 5+10;
// }

// console.log(x());

// function addTwoNumber(x,y) {
// 	return x+y;
// }

// let x = function(a,b) {
// 	return a+b
// }

// console.log(addTwoNumber(5,4));

// console.log(x(8,9));


// let x = () => {
// 	console.log('Hello');
// }

// x();

// let x = (a,b) => {
// 	return a+b;
// }

// console.log(x(5,6));


// let x = (a,b) => a+b;


// console.log(x(8,9));


// let greeting = () => console.log('Hello Good Morning');

// greeting();


// let age = 15;



let age = 18;

// if(age>=18) {
// 	console.log('We can vote');
// } else {
// 	console.log('Not');
// }


// let x = age>=18 ? 'We can vote' : 'Not';


// console.log(x);

// let welcome = (age>=18) ? 
// 	() => console.log('we Can vote'):
// 	() => console.log('Not');

// welcome();

// let sun = (a,b) => {
// 	let result = a+b;
// 	return result;
// }

// let all = sun(45,63);

// console.log(all);


// function Person() {
// 	this.name = "Sharvan";
// 	this.age = "24";
// 	this.gender = "Male";
// 	this.getDetails = function() {
// 		//console.log(this.age);

// 		let innerFunction = () => {
// 			console.log(this.age);
// 		}

// 		innerFunction()
// 	}

// }

// const x = new Person();

// console.log(x);

// console.log(x.age);

// x.getDetails();


// let Person = {
// 	name : 'Jack',
// 	age: 25,
// 	getDetails: () => {
// 		console.log("25");
// 	}
// }


// // console.log(Person);

// Person.getDetails();

// function sum(x=4, y=6) {

// 	return x+y
// }

// console.log(sum(8)); //undefined
// console.log(sum(9,9)); //18
// console.log(sum()); // 10
// console.log(sum(54,56)); // 110
// console.log(sum(45,12,63)); // undefined
// console.log(sum()); // 

// const arrayValue = ["My","Name", "is", "Sharvan","Kumar"];

// // console.log(arrayValue);

// console.log(...arrayValue);

// const array1 = ['one','two'];

// const array2 = [...array1,'three','four','five'];

// console.log(array2);


// let arr1 = [1,2,3]

// let arr2 = arr1;

// console.log(arr1); // 1,2.3

// console.log(arr2); // 1,2,3

// arr1.push(4);

// console.log(arr1); // 1,2,3,4

// console.log(arr2); // 1,2,3,4

// let arr1 = [1,2,3]

// let arr2 = [...arr1]


// console.log(arr1); // 1,2.3

// console.log(arr2); // 1,2,3


// arr1.push(4)

// arr1.push(6)
// arr1.push(8)

// arr1.push(9)

// console.log(arr1);

// console.log(arr2);

// const obj1 = {x:1, y:2};
// const obj2 = {z:6};

// const newObject = {...obj1, ...obj2}

// console.log(newObject);



// let func = function(...args) {
// 	console.log(args);
// }


// func();
// func(4)
// func(4,6)
// func(4,6,8)
// func(40,90,36,98)

function sum(x,y,z,l) {
	console.log(x+y+z+l);
}

const num1 = [1,3,9,8,5];

sum(...num1);