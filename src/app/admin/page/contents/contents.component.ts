import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  constructor() { }

  tableData1: any = [5,1,5,6,5,4,2,6,5,1,65,4,2,5,5,2,546,5]
  ngOnInit(): void {
  }

}
