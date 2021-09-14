import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PhotoListComponent} from './photo-list.component';
import {PhotosComponent} from './photos/photos.component';
import {LoadButtonComponent} from './load-button/load-button.component';
import {FilterByDescriptionPipe} from './filter-by-description.pipe';
import {PhotoModule} from '../photo/photo.module';
import {CardModule} from '../../shared/components/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    CardModule
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
