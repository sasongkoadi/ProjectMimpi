const testing = new Promise((resolve, reject) => {
    setTimeout(() => {
       //resolve([1,2,3]) 
       reject('Unable to connect')
    }, 2000);
})

testing.then((resolve) => {
    console.log(resolve);
}).catch((reject) => {
    console.log(reject);
})