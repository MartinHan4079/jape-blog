
* react声明周期方法

### 安装

#### constructor()
* 如果不初始化状态，不需要绑定方法，则不需要为react组件实现构造函数
* 通常，在react中，构造函数仅用于两个目的：
* * 通过分配对象来初始化本地状态 `this.state`
* * 将事件处理程序绑定到实例
* 如果组件需要本地状态，请直接子啊构造函数中指定初始化状态 `this.state`
* 构造函数是你应该`this.state`直接分配的唯一位置。在其他的所有方法中，你需要使用`this.setState`

```javascript
    constructor(props) {
        super(props);
        this.state = { counter: 0};
        this.handleClick = this.handleClick.bind(this)
    }
```

#### render()
* 类组件中唯一必需的方法
* `render()`应该时纯的，这意味这它不会修改组件状态，每次调用时都返回相同的结果，并且它不直接与浏览器交互
* 如果你需要与浏览器进行机哦阿虎，请执行你的`componentDidMount()`方法或者其他生命周期方法。保持`render()`函数的纯粹，组件更容易理解
* * `render()`如果`shouldComponentUpdata()`返回false,则不会被调用
 
#### componentDidMount()
* 在安装组件（插入树中）后立即调用。需要DOM节点的初始化应该放在这里，如果需要从远程端点加载数据，这是实力话网络请求的好地方。
  

### 更新
#### render()
#### componentDidUpdate(prev, prevState, snapshot)
* 初始化渲染不会调用次方法
* 此方法为更新组件时对DOM进行操作，只要你将当前的道具与之前的道具进行比较，然后判断是否执行下面的操作，这也是进行网络请求的好地方
```javascript
    componentDidUpdate(prevProsp) {
        if(this.props.userID !== prevProps.userID) {
            this.fetchDara(this.props.userID)
        }
    }
```
* 在这里你可以使用`setState()` 但是要注意的是必须在一个条件下包裹就像上面的例子，否则会导致无限循环，它还会导致额外的重新渲染，虽然用户不可见，但还是会影响性能



### 卸载
#### componentWillUnmount()
* 从DOM中删除组件时调用此方法
* 在卸载和销毁组件之前立即调用，在此方法中执行必要的清理，例如清除计时器，取消网络请求或者清楚在其中创建的任何订阅`componentDidMount()`
* 你不应该调用`setState()`在`componentWillUnmount()`中，因为组件永远不会被重新呈现。卸载组件实例后，将永远不会再次安装它。

### 其他API

#### setState()
#### forceUpdate()


### 类属性

#### defaultProps
* 可以用来定义类本身的属性，以设置类的默认方法


### 实例属性
#### props
#### state

