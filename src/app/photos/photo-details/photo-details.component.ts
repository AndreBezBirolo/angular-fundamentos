import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PhotoService} from '../photo/photo.service';
import {Photo} from '../photo/photo';
import {Observable} from 'rxjs';
import {PhotoComment} from '../photo/photo-comment';

@Component({
  // selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo> | undefined;
  comments$: Observable<PhotoComment[]> | undefined;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {
  }

  ngOnInit(): void {
    const photoId = this.route.snapshot.params.photoId;

    this.photo$ = this.photoService.findById(photoId)
    this.comments$ = this.photoService.getComments(photoId)
  }

}
