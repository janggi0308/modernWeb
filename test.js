/*var a = 1;
var b = 2;
 
function add(x,y){
 var result = x + y;

 return result;
}

var result = add(a,b); //비동기 기법 
 
console.log(result);
*/
//비동기식
/*
const fs = require('fs');
fs.readFile('c:/Temp/read.txt','utf-8',(err,data)=>{ //리드파일이있다.
    if (err) return console.log(err);
 
    console.log(data);
})

console.log('Done');
*/
//<파일 읽기를 동기 방식으로 호출>
/*const fs = require('fs');
var data = fs.readFileSync('c:/Temp/read.txt','utf-8');
console.log(data);
console.log('Done');
*/
