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
    this.loadGroup()
  }

  groups: any = []
  loadGroup() {
    this.api.getData('article_ctr/load_group_article').then((res: any) => {
      this.groups = res
    })
  }

  addArticle(val: any) {
    this.route.navigateByUrl('/contents/add-content', { state: { data: val } })
  }

}
