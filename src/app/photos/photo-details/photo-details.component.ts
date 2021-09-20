import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PhotoService} from '../photo/photo.service';
import {Photo} from '../photo/photo';
import {Observable} from 'rxjs';
import {PhotoComment} from '../photo/photo-comment';
import {AlertService} from '../../shared/components/alert/alert.service';
import {UserService} from '../../core/user/user.service';

@Component({
  // selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  photoId!: number;
  photo$: Observable<Photo> | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService,
    private alertService: AlertService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId
    this.photo$ = this.photoService
      .findById(this.photoId);
    this.photo$.subscribe(() => {}, err => this.router.navigate(['not-found']))
  }

  remove() {
    this.photoService.removePhoto(this.photoId)
      .subscribe(() => {
        this.alertService.success('Photo removed!', true);
        this.router.navigate(['/user', this.userService.getUserName() ]);
      },
      error => this.alertService.warning('Could not delete the photo!', true))
  }

}
