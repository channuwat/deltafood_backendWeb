import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { config } from './editorConfig';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiConnectService } from 'app/admin/api-connect.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
  htmlContent: string = ''
  config: AngularEditorConfig = config
  data: any

  formG: FormGroup
  constructor(public router: Router, public api: ApiConnectService) {
    this.data = this.router.getCurrentNavigation()?.extras?.state?.data ?? null
    this.formG = new FormGroup({
      article_group_id: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      hashtag: new FormControl(null, Validators.required),
      images: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
    console.log(this.data);
    this.loadGroupContent()
    this.setForm()
  }

  contentG: any[] = []
  loadGroupContent() {
    this.api.getData('Article_ctr/loadGroupContent').then((res: any) => {
      this.contentG = res
    })
  }

  setForm() {
    if (this.data != null) {
      this.formG.patchValue({
        article_group_id: this.data.article_group_id,
        title: this.data.title,
        content: this.data.content,
        hashtag: this.data.hashtag,
      })
    }
  }

  img: any = { url: 'https://deltafood.me/2022/wp-content/uploads/2022/05/header-logo-1024x378.webp' }
  onChangeFile(e: any) {
    e = e?.target?.files[0] ?? undefined
    let reader = new FileReader();
    reader.onload = (el: any) => {
      let result = el.target.result.toString().split(",")
      let file: any = {
        group: result[0].split("/")[0].split(":")[1],
        type: result[0].split("/")[1].split(";")[0],
        data: result[1],
        name: e.name,
        url: el.target.result,
        valid: true
      }
      this.img = file
      this.formG.patchValue({ images: this.img })
    }

    if (e !== undefined) {
      reader.readAsDataURL(e);
    }
  }

  save() {
    let pass_data = this.api.copyVal(this.formG.value)
    if (this.data.article_id > 0) {
      pass_data.article_id = this.data.article_id
    }
    console.log(pass_data);

  }

}
