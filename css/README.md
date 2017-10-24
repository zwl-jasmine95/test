# css笔试面试题
### 1、三栏布局
实现三栏布局，左右两栏宽度固定，中间宽度自适应。
```html
<div class="grid">
    <div class="left"></div>
    <div class="main"></div>
    <div class="right"></div>
</div>
```

```css
/*利用flex布局*/
.grid{
    display: flex;
}
.grid>div{
    height: 200px;
    border: solid 1px red;
}
.left{
    min-width: 100px;   /*限制最小宽度即可固定宽度*/
}
.main{
    width: 100%;
}
.right{
    min-width: 100px;
}
```
还可以利用float或者position布局。
[demo](https://zwl-jasmine95.github.io/test/css/one.html)