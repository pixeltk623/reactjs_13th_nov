'use strict'
// if (true) {}
// if (true) {} else {}
// if (true) {} else if {} else {}
// swith(){}
// break
// continue

// for loop
// while loop
// do while loop



// var x = 5

// console.log(x);

// {
// 	console.log(x);
// }

// console.log(x);

// let x = 5

// console.log(x);

// {
// 	console.log(x);
// }

// console.log(x);

// {
// 	var x = 5

// 	console.log(x);
// }

// console.log(x);


// {
// 	let y = 5

// 	console.log(y);
// }

// console.log(y);


// const PI = 3.14

// a = 15

// console.log(a);


// var a = 15

// a = 20

// console.log(a);

let x = 130
let y = 300

// console.log(x>y);

// if(x>y) {
// 	console.log(x, ' is greater than ',y);
// }


// if(x>y) {
// 	//console.log(x, ' is greater than ',y);
// 	console.log(x);
// } else {
// 	//console.log(y, ' is greater than ',x);
// 	console.log(y);
// }


// if(x%2===0) {
// 	console.log(x, " is Even Number");
// } else {
// 	console.log(x, " is Odd Number");
// }

// let newNumber = "30";

// console.log(newNumber%2);

// if(newNumber%2=="0") {
// 	console.log('Even');
// }



function checkEvenNo() {
	
	let userNumber = document.getElementById("number").value;

	//let userNumber = document.getElementsByClassName("number");

	//console.log(userNumber[0].style);

	//let userNumber = document.getElementsByName("number");

	//let userNumber = document.getElementsByTagName("input");

	// console.log(userNumber);

	// console.log(typeof(userNumber));

	if(userNumber=='') {
		document.getElementById("e1").innerHTML = "Number Can Not be blank";
		document.getElementById("e1").style.color = "red";
		//console.log('Number Can Not be blank');
	} else {
		document.getElementById("e1").innerHTML = "";
		//console.log('Ok');
	}

	if(userNumber!='') {

		if(userNumber>0) {
			if(userNumber%2==0) {
			console.log('Even Number');

			document.getElementById("result").innerHTML = "Even Number";
			document.getElementById("result").style.color = "green";
			} else {
				console.log('Odd Number');
				document.getElementById("result").innerHTML = "Odd Number";
				document.getElementById("result").style.color = "blue";
			}
		} else {
			console.log('Number is Not greater than 0');
			document.getElementById("result").innerHTML = "Number is Not greater than 0";
			document.getElementById("result").style.color = "red";
		}
	}

	return false;
}

// let fn = 100
// let sn = 2000
// let ln = 50

// if (fn>=sn && fn>=ln) {
// 	console.log(fn);
// } else if(sn>=fn && sn>=ln) {
// 	console.log(sn);
// } else {
// 	console.log(ln);
// }

// let currentDay = "Tue";

// switch(currentDay) {
// 	case 'Mon':
// 		console.log('Mon');
// 		break;
// 	case 'Tue':
// 		console.log('Tue');
// 		break;
// 	case 'Wed':
// 		console.log('Wed');
// 		break;
// 	case 'Thu':
// 		console.log('Thu');
// 		break;
// 	default:
// 		console.log('Error');
// 		break;
// }

// let leapYear = 2009;

// if((leapYear%4==0) && (leapYear%100 !=0) || (leapYear%400==0)){
// 	console.log(leapYear, 'hai');
// } else {
// 	console.log(leapYear, 'Nahi hai');
// }



// 1. SI 
// 2. AOT
// 3. AOS & AOR 
// 4. AOI (heron's formula) 
// 	\text{ Area }=\sqrt{s(s-a)(s-b)(s-c)}

// let fn = 100
// let sn = 2000
// let ln = 50
// => Find The greatest and same numbe