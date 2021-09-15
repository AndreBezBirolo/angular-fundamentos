import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../../core/auth.service';

@Component({
  // selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private render: Renderer2
  ) {}

  ngOnInit(): void {
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
          this.router.navigate(['user', userName])
      }}, err => {
          console.log(err);
          this.loginForm.reset();
          this.render.selectRootElement('#userNameInput').focus()
        }
      )
  }

}
