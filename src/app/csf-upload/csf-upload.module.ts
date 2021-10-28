import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsfUploadPageRoutingModule } from './csf-upload-routing.module';

import { CsfUploadPage } from './csf-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsfUploadPageRoutingModule
  ],
  declarations: [CsfUploadPage]
})
export class CsfUploadPageModule {}
