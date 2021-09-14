import {NgModule} from '@angular/core';
import {PhotoListComponent} from './photo-list.component';
import {PhotosComponent} from './photos/photos.component';
import {LoadButtonComponent} from './load-button/load-button.component';
import {FilterByDescriptionPipe} from './filter-by-description.pipe';
import {CommonModule} from '@angular/common';
import {PhotoModule} from '../photo/photo.module';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule
  ],
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe
  ]
})
export class PhotoListModule {

}