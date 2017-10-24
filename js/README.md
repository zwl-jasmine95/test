# js笔试面试题
### 1、数组去重
```js
function unique1(arr){
    return arr.filter(function(item,index,arr){
        return arr.indexOf(item) == index;
    })
}
console.log(unique1([2,3,1,3,4,2]));  //[2,3,1,4]
```
还可以利用ES6的Set数据结构来实现。
[demo](./one.js)

