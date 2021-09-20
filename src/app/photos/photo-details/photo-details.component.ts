import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PhotoService} from '../photo/photo.service';
import {Photo} from '../photo/photo';
import {Observable} from 'rxjs';

@Component({
  // selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo> | undefined;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(id)
  }

}
