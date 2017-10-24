/**
 * 数组去重
 * @param {array} arr 
 * @return {array}  
 */
//原生js
function unique1(arr){
    return arr.filter(function(item,index,arr){
        return arr.indexOf(item) == index;
    })
}
console.log(unique1([2,3,1,3,4,2]));

//ES6写法
function unique2(arr){
    return [...new Set(arr)];
}
console.log(unique2([2,3,1,3,4,2]));

for(let i=0;i<100;i++){
    // let i = parseInt(Math.random()*100);
    let i = (Math.random()*100).toFixed(0);
    console.log(i);
}