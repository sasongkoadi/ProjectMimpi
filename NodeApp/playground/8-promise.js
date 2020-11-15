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

const sum = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        },2000)
    })
} 

sum(3,4)
    .then((result) => {
        console.log(result);
        sum(result, 300)
    .then((result) => {
        console.log(result)})
    })
    .catch((err) => {
        console.log(err);
    })