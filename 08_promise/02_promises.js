const promise1 = new Promise(
    (resolve, reject)=>{
        // do an async task
        // db calls, cryptography, network
        setTimeout(() => {
            console.log('async task is complete');
            resolve();
        },1000)
    }
)

promise1.then(()=>{
    console.log('promise consumed');
})

new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            console.log("async Task-2");
            resolve();
            
        },2000)
}).then(()=>{
    console.log("Async-2 resolved");
})

const promise3 = new Promise(
    (resolve,reject)=>{
        setTimeout(() => {
            resolve({userName: "chai", email: "chai@gmail.com"})
        },3000)
    }
)
promise3.then((user)=>{
    console.log(user);
    
})

const promise4 = new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            let error = true
            if (!error) {
                resolve({userName: "Hitesh", password: "12345678"})
            }else{
                reject("ERROR: something went wrong")
            }
        },4000)
    }
)

 promise4.then(
    (user)=>{
        console.log(user);
        return user.userName
    }
)
.then((userName)=>{
    console.log(userName);
    
})
.catch(
    (error)=>{
        console.log(error);
        
    }
).finally(
    ()=>{
        console.log("the promise is resolve or reject at Finally");
    }
)

const promise5 = new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            let error = true
            if (!error) {
                resolve({userName: "Javascript"})
            }else{
                reject("ERROR: Js went wrong")
            }
        },5000)
    }
)

async function consumePromise5() {
   try {
    const res = await promise5;
    console.log(res);
   } catch (error) {
    console.log(error);
    
   }
}
consumePromise5();

// async function getAllUsers() {
//    try {
//     const res =  await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(res);
    
//    const data = await res.json();
//    console.log(data);

//    } catch (error) {
//     console.log(error);
    
//    }   
// }
// getAllUsers()


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(
//     (data)=>{
//         return data.json()
//     }
// )
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (error)=>{
//         console.log(error);
// })


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then(response => response.json())
// .then(data => console.log(data))
// .then(const img = document.createElement('img'))
// .catch(error => console.error(error));

// const img = document.createElement('img')
 