import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {PhotoComment} from '../../photo/photo-comment';
import {PhotoService} from '../../photo/photo.service';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.scss']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId!: number;
  commentForm!: FormGroup;

  comments$: Observable<PhotoComment[]> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService
  ) {
  }

  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId)

    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    });

  }

  save() {
    const comment = this.commentForm.get('comment')?.value as string;
    this.comments$ = this.photoService
      .addComment(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => {
        this.commentForm.reset();
        alert('Adicionado com sucesso!')
      }))
  }

}
