import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConnectService } from 'app/admin/api-connect.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  constructor(public api: ApiConnectService, public route: Router) { }

  ngOnInit(): void {
    this.loadArticles()
  }

  groups: any = []
  count: number = 0
  loadArticles() {
    this.api.getData('article_ctr/loadArticles').then((res: any) => {
      this.groups = res.content
      this.count = res.count
    })
  }

  addArticle(val: any) {
    this.route.navigateByUrl('/contents/add-content', { state: { data: val } })
  }

}
