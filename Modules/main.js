import { welcomeMessage } from './welcome.js';
import { getEmployeeName } from './Employee.js';

let welcome = welcomeMessage("Kumar");

let nameOfEmployee = getEmployeeName("Sharvan");

console.log(nameOfEmployee);
console.log(welcome);