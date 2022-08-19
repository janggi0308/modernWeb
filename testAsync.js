//<첫번째 코드>
/*
function run() {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {} //var : 1.유연한 변수  let: 두번선언X , 지역변수에서만(안에서 쓰면) 유효 //변경되지않는건앞에 const 쓰자 
    const end = Date.now();
    console.log(end - start + 'ms');
  }
 
  run();
  console.log('Done !!!');

//<두번째 코드>
function run() {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
    }, 1000);
  }
 
  run();
  console.log('Done !!!');

// <세번째 코드>
  function run(callback) {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
      callback();
    }, 1000);
  }
 
  run(() => {
    console.log('Done !!!');
  });
*/
//<네번째 코드> ASYNC
function run() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start = Date.now();
            for (let i = 0; i < 1000000000; i++) {}
            const end = Date.now();
            console.log(end - start + 'ms');
            resolve();
        }, 1000);
    });
}
 
async function process() {
    await run();
    await run();
    console.log('Done !!!');
}
 
process();
