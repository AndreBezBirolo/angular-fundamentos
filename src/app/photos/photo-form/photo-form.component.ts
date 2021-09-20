import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PhotoService} from '../photo/photo.service';
import {Router} from '@angular/router';
import {AlertService} from '../../shared/components/alert/alert.service';
import {UserService} from '../../core/user/user.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm!: FormGroup;
  file!: File;
  preview!: string;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  onChange(target: any) {
    if (target instanceof EventTarget) {
      let element = target as HTMLInputElement;
      let files = element.files
      if (files) {
        this.file = files[0]
        const reader = new FileReader();
        reader.onload = (event: any) => this.preview = event.target.result;
        reader.readAsDataURL(this.file)
      }
    }
  }

  upload() {
    const {description, allowComments} = this.photoForm.getRawValue()
    this.photoService
      .upload(description, allowComments, this.file)
      .subscribe(() => {
          this.alertService.success('Upload complete!', true);
          this.router.navigate(['/user', this.userService.getUserName()]);
        },
        error => this.alertService.warning('Error in upload!'))
  }

}
