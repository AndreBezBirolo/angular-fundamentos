import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../core/auth/auth.service';
import {PlatformDetectorService} from '../../core/platform-detector/platform-detector.service';

@Component({
  // selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, AfterViewInit {

  fromUrl: string = '';
  loginForm!: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private plataformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => this.fromUrl = params['fromUrl'])
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const userName = this.loginForm?.get('userName')?.value;
    const password = this.loginForm?.get('password')?.value;

    this.authService
      .authenticate(userName, password)
      .subscribe(() => {{
        this.fromUrl
          ? this.router.navigateByUrl(this.fromUrl)
          : this.router.navigate(['user', userName])
      }}, err => {
          console.log(err);
          this.loginForm.reset();
          this.plataformDetectorService.isPlatformBrowser() && this.userNameInput?.nativeElement.focus()
        }
      )
  }

  ngAfterViewInit(): void {
    this.plataformDetectorService.isPlatformBrowser() && this.userNameInput?.nativeElement.focus()
  }

}
