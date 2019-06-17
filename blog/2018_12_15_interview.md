* new操作符在定义对象时都做了那些事 
使用new操作 即发生构造函数调用 会自动执行下面的操作
1.创建一个全新的对象
2.这个新对象会执行[[prototype]]连接
3.这个新对象会绑定到函数调用的this
4.如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象

* 关于动态给元素添加点击事件（原生js）
这个之前还真没接触过，回来看一下才恍然大悟,这个动态添加样式之前也没遇到过，也是一脸懵。面试当场有思路但是单词不会写 也是蛮尴尬。提示用的太多啦！
eg：
```html
  <ul id="demo">
    <li>1</li>
    <li>2</li>
  </ul>
```
正解：
```javascript
  var demo = document.getElementById("demo").childNodes
  for(let i= 0; i<demo.length;i++){
      if(demo[i].nodeType===1){
          if(window.addEventListener){
              console.log("21")
              demo[i].addEventListener("click",function(){
                  alert(demo[i].innerHTML)
              },false)
          }else{
              demo[i].attachEvent("onclick",function(){
                  alert(demo[i].innerHTML)
              })
          }  
      }
  }
```

* get 和 post请求的区别
当场就凉凉啦，回答的是面目全非，总的来说还是基础不牢靠。
1.get请求请求的数据显示在URL中 对所有人可见，post相反
2.get请求对请求的字符有所限制最长2048个字节，还必须是ASCII字符，post请求则不限制，允许二进制
3.get请求可以被浏览器进行缓存，post则不行
4.get会保存在浏览器历史缓存中，post不会
5.浏览器返回按钮点击后 对get请求没什么影响 post请求的话 则要重新提交
翻了翻动物书http 里面关于get和post 只是提及了一下下。。。。晕死

* js中this指向问题，
```javascript
  function a(){
    this.name = "name"
  }
  a()
```
这个this指向的是哪里？
看着很奇怪的一个函数 绑定的是全局window 当然在严格模式下 会报错 this指向undefined。
1.单独的函数调用 非严格模式下绑定到全局
2.隐式绑定，
3.显示绑定：call（） apply（）bind()
4.new绑定



* 浅拷贝
  for...in循环 把对象中的每一项key值 复制到另一个对象中
    
* 深拷贝
  for...in循环 把对象中的每一项key值 复制到另一个对象中 ，对于复杂对象的话 使用嵌套递归实现


* 数组拷贝
  数组的话可以使用进行数组操作的方法进行是实现（返回的是另一个数组的一些方法slice等），也可以使 
  用循环实现，es6 的Object.assign()方法也行





写在前面：面试问的几个基础问题，做个笔记，已经耽误了太多的时间，该撤了。

### 定义变量 `var` `let` `const`区别

先说`var` 操作符 高程上的解释是：用`var`操作符定义的变量将成为定义该变量的作用域的局部变量。简而言之就是在函数中使用var定义一个变量，那个这个变量在函数退出后就会被销毁。
```javascript
function test(){
  var sayHello="hello";
}
console.log(sayHello);  //报错 sayHello is not defined
```
还有个例子就是`for`循环里面的`var`
```javascript
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```
这个例子变量i是var声明 在全局范围中都有效，所以全局内只有一个变量i ，每一次循环，变量i的值都会发生改变，而循环内被赋给数组a的函数内部的console.log(i)，里面的i指向的就是全局的i。块级作用域的块可以理解为一对大括号，大括号可以任意嵌套，但是外层的作用域无法访问内层的作用域。
```javascript
{
    let a = "a";
    let b = "b";
    {
        let c = "c";
        console.log(a);  //a
    }
    console.log(c);  //undefined
}
```
说到这里 就说一下函数与块级作用域吧，`ES5`规定,函数只能在顶级作用域或者函数作用域之中声明，不能在块级作用域中声明。
`ES6`引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。


### `const`
声明一个变量，一旦声明，变量不能更改，当然只声明，不赋值也会报错，其作用域和`let`的作用域一致，只在块级作用域内有效，存在暂时性死区，和`let`一样只能先声明后使用。

`const`实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，`const`只能保证这个指针是固定的，至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。




