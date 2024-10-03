// // Promise
// console.log("script start");
// const bucket = ['coffee', 'chips','vegetables','salt','rice'];

// const friedRicePromise = new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
//         resolve({value:"friedrice"});
//     }else{
//         reject("could not do it");
//     }
// })

// // produce

// // consume
// // how to consume

// friedRicePromise.then(
//     // jab promise resolve hoga
//     (myfriedRice)=>{
//     console.log("lets eat ", myfriedRice);
//     }
//     ).catch(
//     (error)=>{
//         console.log(error)
//     })

// setTimeout(()=>{
//     console.log("hello from settimeout")
// },0)

// for(let i = 0; i <=100; i++){
//     console.log(Math.random(), i);
// }

// console.log("script end!!!!")

function myPromise() {
  return new Promise((resolve, reject) => {
    const x = 5;
    if (x == 5) {
      resolve();
    } else {
      reject();
    }
  });
}

myPromise()
  .then(() => {
    console.log("resolve");
  })
  .catch(() => {
    console.log("reject");
  });
