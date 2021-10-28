import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsfUploadPage } from './csf-upload.page';

const routes: Routes = [
  {
    path: '',
    component: CsfUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsfUploadPageRoutingModule {}
