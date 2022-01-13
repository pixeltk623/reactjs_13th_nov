// let promis = new Promise(function(resolve, reject){

// });

// const count = false;

// let countValue = new Promise(function(resolve,reject) {

//     if (count) {
//         resolve("There is Count Value")
//     } else {
//         reject("There is No Count Value")
//     }

// });

// console.log(countValue);


// let countValue = new Promise(function(resolve, reject) {
//     resolve("Promise Resolved")
// });

// countValue
//     .then(function successMessage(result) {
//         console.log(result');
//     })
//     .then(function successMessageSecond() {
//         console.log("This is second Message");
//     })



// let countValue = new Promise(function(resolve, reject) {
//     reject("Promise Rejected")
// });

// countValue
//     .then(function successMessage(result) {
//         console.log(result);
//     },
//     ).catch ( function errorMessage(result) {
//             console.log(result);
    
//         }
//     )
   


// async function name(p1,p2...p3) {

// }

// async function getName() {
//     console.log("ASYNC Function This is Kumar");
    
//     return Promise.resolve(1);
// }


// getName();


// async function getFullDetails() {
//     console.log("Hello This is Kumar");
//     return Promise.resolve(1);
// }

// getFullDetails().then(function(result) {
//     console.log(result)
// });


// let result = await Promise;

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("Resolved")
//     }, 3000)
// });

// async function getUserDetails() {
    
//     let result = await promise;
    
//     console.log(result)

//     console.log("Hello Kumar")
// }

// getUserDetails()

let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("Rejected")
    }, 3000)
});

async function getUserDetails() { 

    try {
        let result = await promise;
        console.log(result)
    }
    catch(error) {
        console.log(error)
    }
}
getUserDetails()