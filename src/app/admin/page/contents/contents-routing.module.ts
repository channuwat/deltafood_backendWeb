import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './contents.component';
import { AddContentComponent } from './add-content/add-content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentsComponent
  },
  {
    path: 'add-content',
    component: AddContentComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentsRoutingModule { }
