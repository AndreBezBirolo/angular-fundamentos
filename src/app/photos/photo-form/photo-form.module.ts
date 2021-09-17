import {NgModule} from '@angular/core';
import {PhotoFormComponent} from './photo-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VmessageModule} from '../../shared/components/vmessage/vmessage.module';
import {RouterModule} from '@angular/router';
import {PhotoModule} from '../photo/photo.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    FormsModule,
    RouterModule,
    PhotoModule
  ],
  declarations: [
    PhotoFormComponent,
  ]
})
export class PhotoFormModule {

}
