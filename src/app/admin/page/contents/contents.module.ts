import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentsRoutingModule } from './contents-routing.module';
import { ContentsComponent } from './contents.component';
import { AddContentComponent } from './add-content/add-content.component';


@NgModule({
  declarations: [
    ContentsComponent,
    AddContentComponent
  ],
  imports: [
    CommonModule,
    ContentsRoutingModule
  ]
})
export class ContentsModule { }