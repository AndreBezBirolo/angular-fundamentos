import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {providerDef} from '@angular/compiler/src/view_compiler/provider_compiler';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RequestInterceptor} from './auth/request.interceptor';
import { FooterComponent } from './footer/footer.component';
import {AlertModule} from '../shared/components/alert/alert.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AlertModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
}
