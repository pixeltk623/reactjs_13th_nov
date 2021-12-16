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

class SalarySlip {


	pt = 200;

	constructor(nameOfEmployee, basicSalary) {
	  	this.nameOfEmployee = nameOfEmployee;
	  	this.basicSalary = basicSalary;
	}

	hraCalculation() {
		return (this.basicSalary*35)/100;
	}

	daCalculation() {
		return (this.basicSalary*15)/100;
	}

	maCalculation() {
		return (this.basicSalary*10)/100;
	}

	saCalculation() {
		return (this.basicSalary*5)/100;
	}

	earaning() {
		return (this.basicSalary +  this.hraCalculation() + this.daCalculation() + this.maCalculation() + this.saCalculation()
		); 
	}

	calculatePf() {
		if (this.basicSalary>5000 && this.basicSalary<=10000) {
			return (this.basicSalary*7)/100;
		} else if(this.basicSalary>10000 && this.basicSalary<=20000) {
			return (this.basicSalary*10)/100;
		} else {
			return (this.basicSalary*15)/100;
		}
	}

	toatalDeducation() {
		return (this.pt + this.calculatePf())
	}

	grossSalary() {

		return (this.earaning() + this.toatalDeducation())
	}

	takeHomeSalary() {

		return (this.grossSalary() - this.toatalDeducation());
	}

	getUserSalaryDetails() {
		return `Employee Name is ${this.nameOfEmployee} and Take Home Salary is ${this.takeHomeSalary()}.`
	}

}


function calCulateSalary() {

	let nameOfEmployee = document.getElementById('name').value;

	let basicSalary = parseInt(document.getElementById('Basic').value);

	// console.log(typeof(basicSalary));

	let salary = new SalarySlip(nameOfEmployee, basicSalary);


	document.write(salary.getUserSalaryDetails());
	

	return false;
}