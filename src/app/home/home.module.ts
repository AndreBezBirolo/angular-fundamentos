import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SigninComponent} from './signin/signin/signin.component';
import {SignoutComponent} from './signin/signout/signout.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
}
