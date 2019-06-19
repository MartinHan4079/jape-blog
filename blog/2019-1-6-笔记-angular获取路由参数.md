### angular获取路由参数

在实际项目中，经常需要用到的获取路由参数，angular的路由提供了`ActivatedRoute`、`ActivatedRouteSnapshot`、`Route`等接口,用来获取路由元信息


### `ActivatedRoute` 包含与当前组件相关的路由信息。也可以用于遍历路由器的状态树。
官网给的例子
```ts
@Component({...})
class MyComponent {
  constructor(route: ActivatedRoute) {
    const id: Observable<string> = route.params.map(p => p.id);
    const url: Observable<string> = route.url.map(segments => segments.join(''));
    // route.data includes both `data` and `resolve`
    const user = route.data.map(d => d.user);
  }
}
```

```ts
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.getId();
  }
  getId(): void {
    //获取参数信息
    const paramMap = this.route.snapshot.paramMap;
    //id为动态路由里面的参数 eg: path:'post/:id'
    const paramMapId = this.route.snapshot.paramMap.get('id');

    const params = this.route.snapshot.params;
    //同上
    const paramsId = this.route.snapshot.params.id;

    //这个方法也可以用但是发现 编译器会报错，但是却编译通过了，看这情况最好还是用上面的几种方法。
    const paramsValueId = this.route.params.value.id;
    console.log(paramsValueId);
  }
}
```

### `ActivatedRouteSnapshot` 官网说是包含与当前组件相关的路由的当前瞬间信息，也可以用来遍历路由器的状态树，是当前组件路由的快照。
官网给的说明
```ts
@Component({templateUrl:'./my-component.html'})
class MyComponent {
  constructor(route: ActivatedRoute) {
    const id: string = route.snapshot.params.id;
    const url: string = route.snapshot.url.join('');
    const user = route.snapshot.data.user;
  }
}
```

