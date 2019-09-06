

### 以下内容纯属瞎掰

昨晚为了一个想写一个简单的post请求，接口完成后，写react的时候发现一个问题，hooks只能放在react函数的首层，想了一下我单击需要一个函数，请求需要放在里面这个怎么搞。网上找了一圈方法少的可怜，最后兜兜转转发现还是用class组件好了。这个在满足hooks限制的情况下，好像真做不了。简单的get请求在不需要触发事件的情况下，倒是蛮好实现。但是也只能实现自动加载的情况，需要事件的话，还是class吧。懒得折腾。
```js
  export default function useFetch(url,params) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url,{
        method: "GET",
        body: JSON.stringify(params),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then(response => response.json())
      .then(data => setData(data));
    }, []);
    return data;
  }
```

### stack overflow 有人实现但是也是违背了hooks的设计原则，可以看下代码，用的axios。
[原文地址](https://stackoverflow.com/questions/53059059/react-hooks-making-an-ajax-request)

```js
import React, { useState, useEffect } from "react";
import axios from "axios";

function useTriggerableEndpoint(fn) {
  const [res, setRes] = useState({ data: null, error: null, loading: null });
  const [req, setReq] = useState();

  useEffect(
    async () => {
      if (!req) return;
      try {
        setRes({ data: null, error: null, loading: true });
        const { data } = await axios(req);
        setRes({ data, error: null, loading: false });
      } catch (error) {
        setRes({ data: null, error, loading: false });
      }
    },
    [req]
  );

  return [res, (...args) => setReq(fn(...args))];
}

const todosApi = "https://jsonplaceholder.typicode.com/todos";

function postTodoEndpoint() {
  /* eslint-disable react-hooks/rules-of-hooks */
  return useTriggerableEndpoint(data => ({
    url: todosApi,
    method: "POST",
    data
  }));
}

export default function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [newTodo, postNewTodo] = postTodoEndpoint();

  function createTodo() {
    postNewTodo({
      title,
      body,
      userId: 1
    });
  }

  return (
    <div>
      <h1>New Todo</h1>
      <label>
        Title: <input value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        Body: <input value={body} onChange={e => setBody(e.target.value)} />
      </label>
      <button onClick={createTodo}>Create Todo</button>
      <div className="new-todo">
        {(newTodo.loading && "Creating Todo...") ||
          (newTodo.data &&
            `Todo with title ${newTodo.data.title} created with ID ${
              newTodo.data.id
            }`) ||
          (newTodo.error && `Todo creation failed because: ${newTodo.error}.`)}
      </div>
    </div>
  );
}

```



