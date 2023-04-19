import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {

  data: any
  constructor(public router: Router) {
    this.data = this.router.getCurrentNavigation()?.extras?.state?.data ?? null
  }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
