### react Hooks 初识
去年十月份发布的hooks api, 距今已经快一年了, 这段时间一直在温习vue和angular。说实话，对着三个框架并不感冒，用过发现三者有很多相似之处，又有很多独特的个性，但是总的来说都是es写的，其中的虚拟dom什么的虽说都是为了提高前端性能，但是感觉好像还只是在表面上做功夫。随着webAsseenbly得到大多数浏览器的支持，前端的性能问题得到了很好的解决，但是不怎么认为webAssembly能大规模的被使用，毕竟大多数前端学个ts都很费劲。更别说其他语言了。

言归正传，继续说react Hooks 官网文档里特别介绍的用状态钩子和效果钩子，不知道翻译的对不对，不过感觉有时候翻译一下更直观，一个是用来管理状态的，一个是用来管理buff的。在函数里面使用hooks，而且还只能用在函数的顶层块结构里面。
```js
import React, { useSrate } form 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked { count } times</p>
      <button onClick={()=> setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

```

