'use strict'


// document.write("S Kumar")
// document.write("S Kumar")
// document.write("S Kumar")
// document.write("S Kumar")
// document.write("S Kumar")
// document.write("S Kumar")
// document.write("S Kumar")


// // for loop 
// // while loop
// // do while loop
// // forEach loop


// for (var i = 0; i<=11; i++) {
	
// 	console.log(i);
// }


// for (var i = 10; i > 0; i--) {
	
// 	console.log(i);
// }

// console.log(i);

// var totalSum = 0;
// for (var i = 1; i <= 10; i++) {
	
// 	// if(i%2==0) {
// 	// 	console.log(i);
// 	// }

// 	// if(i%2!=0) {
// 	// 	console.log(i);
// 	// }	

// 	totalSum = totalSum + i; // 0+1 //1 //3

// }

// console.log(totalSum);

// var j = 1;

// while(j<=10) {

// 	console.log(j);

// 	j++;
// }

// while(true) {
// 	console.log('Hello');
// }

// var totalSum = 0;
// var i = 1;
// while(i<=10) {
// 	totalSum = totalSum + i;
// 	i++
// }

// console.log(totalSum);


// do {

// } while()

// var i = 1;
// do {
// 	console.log(i);
// 	i++; 
// } while(i<=10)


// break 

// and 

// continue


// for (var i = 1; i <= 10; i++) {
	
// 	if (i==6) {
// 		break;
// 	}	

// 	console.log(i);
// }


// for (var i = 1; i <= 10; i++) {
	
// 	//console.log(i);

// 	if(i==5 || i == 8) {
// 		continue;
// 	}

// 	console.log(i);
// }


// const numbers = [85,65,98,87,10]

// // numbers.forEach(function(value, index) {

// // 	console.log(index, value);
// // })

// // numbers.forEach(myFunction);


// // function myFunction(value, index) {
// // 	console.log(value, index);
// // }

// var total = 0;
// numbers.forEach(function(value,index) {

// 	total = total+value;
// });

// console.log(total);

// let listOfStudents = {firstName: "Sharvan", lastName: "Kumar", College: "GIET"}


// let data = '';

// for(let s in listOfStudents) {

// 	//console.log(s);

// 	//console.log(listOfStudents[s]);

// 	data += listOfStudents[s];
// }

// console.log(data);



// const nameList = ["Sharvan", "Rahul", "Ravi", "Rohit"]


//console.log(nameList[1]);
// let data = '';
// for (var i = 0; i < nameList.length; i++) {
	
// 	console.log(nameList[i]);
// 	data += nameList[i];
// }

// console.log(data);

// for (let x of nameList) {
	
// 	data +=x;
// }

// console.log(data);

const nameList = ["Sharvan", "Rahul", "Ravi", "Rohit"]


var html = '';

html += "<ul>";
	// for(let i=0; i<nameList.length; i++) {
	// 	html += "<li>"+nameList[i]+"</li>";
	// }

	nameList.forEach(function(value){
		// if(value=='Ravi') {
		// 	html += "<li style='color:green;'>"+value+"</li>";
		// } else {
		// 	html += "<li>"+value+"</li>";
		// }
		let style = '';
		if(value=='Ravi') {
			style='style=color:green;'
		}
		html += "<li "+style+">"+value+"</li>";
	})
html += "</ul>";




document.getElementById("result").innerHTML = html;

//document.getElementById("result").style.color = "green";

console.log(html);


// 1. Prime No (n)
// 2. List Of Prime No 1 - 100

// 3. Palindrome Number (n)
// 	3.1 1 -1000
// 4. Armstrong Number  (n)
// 	4.1 1 -1000
// 5. Reverse No ()123 => 321 

// 6. Count of digits (54654) => 5

// 7. Sum Of digits (123) >6

// 8. Fact of Number
