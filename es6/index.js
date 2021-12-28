// const map1 = new Map();

//console.log(map1);


// map1.set('info', {name: 'sharan', age: 24});

//console.log(map1);


// const map2 = new Map();
// let obj = {};

// map2.set(obj, {name: "sharan", email : "s@gmail.com"});

// console.log(map2);

//Access The Map

// map1.set('info', {name: 'sharan', age: 24});

// console.log(map1.get('info'));

// check

// map1.set('info', {name: 'sharan', age: 24});

// map1.set('address', {pin: 801301, city: 'Vadodara'});

// console.log(map1.has('address'));

// console.log(map1);


// console.log(map1.has('address'));
// console.log(map1.has('info'));
// console.log(map1.has('test'));

// console.log('-------Before Delete-------------');

// console.log(map1);

// console.log(map1.delete('address'))

// console.log('-------After Delete-------------');

// console.log(map1);


// console.log('-------Clear Map-------------');

//map1.clear();	

//console.log(map1);
// console.log(map1.size);

// const map1 = new Map();

// map1.set('name','Sharvan');
// map1.set('age',24);

// // console.log(map1);

// for (let[key, value] of map1) {
// 	console.log(key+' - '+value);
// }

// map1.forEach(function(value, key) {
// 	console.log(key+' - '+value);
// });


// for(let key of map1.keys()) {

// 	console.log(key);
// }


// for(let value of map1.values()) {

// 	console.log(value);
// }

// const map1 = new Map();

// map1.set('name','Sharvan');
// map1.set('age',24);


// for(let elem of map1.entries()){
// 	console.log(`${elem[0]} and ${elem[1]}`);
// }


// const weakMap = new WeakMap();
// let obj = {};
// let newObject = {}

// // weakMap.set(obj, 'test')
// // console.log(weakMap);

// weakMap.set(obj, 'Test')
// weakMap.set(newObject, 'Hello')


// console.log(weakMap);

// console.log(weakMap.get(newObject));
// console.log(weakMap.get(obj));


// for(var i = 1; i<=10; i++) {
// 	//console.log(i);
// }
// console.log(i);

// const set1 = new Set();

// // console.log(set1);

// const set2 = new Set([1,'hello', true , {status: false}]);

// console.log(set2);


// const set3 = new Set([1,14,45,2,45]);

// console.log(set3);

// console.log(set3.values());

// console.log(set3.has(1));

// console.log(set3.values());

// set3.add(5)

// console.log(set3.values());

// set3.add(15)

// console.log(set3.values());


// const set3 = new Set([1,14,45,2,45]);

// set3.delete(14)

// console.log(set3.values());

// set3.clear();

// console.log(set3.values());

// set3.delete([1,14])


// for(let i=0; i<=1; i++) {

// }

// console.log(set3.values());

// for(let i of set3) {

// 	if(i==14 || i == 1) {
// 		set3.delete(i)
// 	}
	
// }

// console.log(set3.values());



// function union(a,b){

// 	let unionSet = new Set(a); // 1 ,2 ,3 ,4,5,6,1

// //	console.log(unionSet);

// 	for(let i of b){
// 		unionSet.add(i);
// 	}

// 	return unionSet;
// }

// let setA = new Set(['Sharvan','Sanjeeve','Shweta']);
// let setB = new Set(['Kumar', 'Sharvan', 'rahul']);


// let result = union(setA, setB)

// console.log(result);

// function intersection(setA, setB) {

// 	let commanSet = new Set();

// 	for(let i of setB) {
// 		if(setA.has(i)) {
// 			commanSet.add(i);
// 		}
// 	}

// 	return commanSet;
// }

// let setA = new Set(['Sharvan','Sanjeeve','Shweta']);
// let setB = new Set(['Kumar', 'Sharvan', 'rahul']);


// let result = intersection(setA, setB)

// console.log(result);

// Before ES6
// const employee = {
// 	name : "Sharvan",
// 	age : 24,
// 	job : "Developer"
// }

// //console.log(employee)

// let name = employee.name;
// let age = employee.age;
// let job = employee.job;

// console.log(name)
// console.log(age)
// console.log(job)

// In ES6

// const employee = {
// 	name : "Sharvan",
// 	age : 24,
// 	job : "Developer"
// }

// let {name,age,job} = employee

// console.log(name)
// console.log(age)
// console.log(job)

// let {name1,age,job} = employee

// console.log(name1)

// let {name:name1,age:age,job:job} = employee

// console.log(name1)

// console.log(age)

// console.log(job)

// const newArrayData = ["Sharvan","Sanjeev" ,"Rahul"]

// // console.log(newArrayData)

// const [a,b,c] = newArrayData;

// console.log(a)
// console.log(b)
// console.log(c)

// let newArrayData = [55]

// let [a = 89, y = 60] = newArrayData;

// console.log(a) // 55  
// console.log(y) // 60


// const employee = {
// 	name : "Kumar"
// }

// const {name, age = 24} = employee

// console.log(name);

// console.log(age);

// let x = 5;
// let y = 8;

// [x, y] = [y,x];

// console.log(x);
// console.log(y);


// const newArrayData = ["Sharvan","Sanjeev" ,"Rahul"]

// const [x, , y] = newArrayData;

// console.log(x)
// console.log(y)

// const newArrayData = ["Sharvan","Sanjeev" ,"Rahul", "Mohan", "Priya", "Shweta"];

// const [x,...y] = newArrayData;

// console.log(x)

// console.log(y)

// const employee = {
// 	name: "Kumar",
// 	age: 24,
// 	job: "Developer"
// };

// let {name, ...remain} = employee

// console.log(name);

// console.log(remain);



// const newArrayData = ["Sharvan","Sanjeev" ,"Rahul", "Mohan", "Priya", "Shweta"];

// const [...x,y] = newArrayData;

// console.log(x)


// const newArrayData = ['Sharvan', ["Sanjeev" ,"Rahul", "Mohan"]];

// const [x,[m,n,o]]= newArrayData;

// console.log(x)

// console.log(m)
// console.log(n)
// console.log(o)

// const employee = {
// 	name: "Kumar",
// 	age: 24,
// 	gender: "Male",
// 	address: {
// 		pin: 390021,
// 		city: "Gotri"
// 	}
// };

// // console.log(employee);

// const {name, address: {pin, city}} = employee

// console.log(name)

// console.log(pin)
// console.log(city)



const x = 10;
const y = "Hello"

// try {

// 	console.log(x/y);

// 	console.log(z)
// }
// catch(error) {

// 	console.log("Error Caught");

// 	console.log("Error Message :"+ error )
// }


// try {

// 	console.log(x/y);

// 	console.log(z)
// }
// catch(error) {

// 	console.log("Error Caught");

// 	console.log("Error Message :"+ error )
// }

// finally {
// 	console.log("finally");
// }

// const number = 41

// try {

// 	if(number%2==0) {
// 		console.log("Even")
// 	} else {
// 		throw new Error("This Number is Odd")
// 	}

// 	console.log("Hello kumar")
// }

// catch(error) {
// 	console.log("Error Caught");

// 	console.log("Error Message :"+ error )
// }