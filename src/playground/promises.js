const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is my resolved data');
        // resolve('this is my other resolved data');
        reject('something went wrong.');
    }, 5000);

    
});

console.log('before');


// the callback will fire when the promise resolves
promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error: ', error);
});



console.log('after');