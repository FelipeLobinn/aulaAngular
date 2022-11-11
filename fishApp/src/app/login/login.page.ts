import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  signinForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    public fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
  }

  async loginUser(userName: any, userPsw: any) {
    console.log('loginUser: ', userName, userPsw);
    this.route.navigate(['fish-page']);
  }

  register(){
    console.log('register');
    this.route.navigate(['fish-page']);
  }
}
