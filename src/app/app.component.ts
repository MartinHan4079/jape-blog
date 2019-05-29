import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'japeBlog';
  menu = menuData;
}

class Menu {
  path: string;
  title: string;
  icon: string;
}

const menuData = [
  {
    path: 'index',
    title: '首页',
    icon: 'icon icon-home',
  },
  {
    path: 'classify',
    title: '分类',
    icon: 'icon icon-classify',
  },
  {
    path: 'label',
    title: '标签',
    icon: 'icon icon-label',
  },
  {
    path: 'about',
    title: '关于',
    icon: 'icon icon-about',
  },
];
