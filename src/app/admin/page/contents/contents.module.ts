import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentsRoutingModule } from './contents-routing.module';
import { ContentsComponent } from './contents.component';
import { AddContentComponent } from './add-content/add-content.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContentsComponent,
    AddContentComponent
  ],
  imports: [
    CommonModule,
    ContentsRoutingModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContentsModule { }
