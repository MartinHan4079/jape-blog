import { Component, OnInit } from '@angular/core';

import { JapeCoreService, Comments } from '../jape-core.service';

import marked from '../../config/marked';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  post = '';
  checkoutForm;
  warning: boolean;
  comments: Array<Comments>;

  constructor(
    private japeCore: JapeCoreService,
    private formBuilder: FormBuilder,
    ) {
      this.checkoutForm = this.formBuilder.group({
        name: '',
        email: '',
        message: ''
      });
     }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.japeCore.getComments().subscribe(comments => {
      const list = [];
      const commentList = comments.reverse();
      commentList.forEach(ele => {
        const mement = {
          name: ele.body.split('#')[0] || '',
          email: ele.body.split('#')[1] || '',
          message: ele.body.split('#')[2] || '',
        };
        list.push(mement);
      });
      this.comments = list;
    });
  }

  submit(e, checkoutForm) {
    e.preventDefault();
    if (!checkoutForm.name || checkoutForm.name === '') {
      this.warning = true;
      alert('昵称不能为空');
      return;
    }
    if (!checkoutForm.email || checkoutForm.email === '') {
      this.warning = true;
      alert('邮箱不能为空');
      return;
    }
    if (!checkoutForm.message || checkoutForm.message === '') {
      this.warning = true;
      alert('留言不能为空');
      return;
    }
    const params = {
      content: checkoutForm.name + '#' + checkoutForm.email + '#' + checkoutForm.message,
      encoding: 'utf-8'
    };

    this.japeCore.setPostDetail(params).subscribe(comment => {
      this.getComments();
      this.checkoutForm.reset();
    });
  }
}
