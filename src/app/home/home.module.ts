import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SigninComponent} from './signin/signin/signin.component';
import {SignoutComponent} from './signin/signout/signout.component';
import {ReactiveFormsModule} from '@angular/forms';
import {VmessageModule} from '../shared/components/vmessage/vmessage.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    SigninComponent,
    SignoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule
  ]
})
export class HomeModule {
}
