import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  constructor(
    private route: Router,
  ) { }
  

  ngOnInit(): void {
  }
  goMenu(){
    this.route.navigate(['menu-page'])
  }

  openLogin() {
    let div = document.getElementById('loginForm');
    
    this.closeRegister()
    div!.style.display = "inline";
  }

  openRegister() {
    let div = document.getElementById('registerForm');
    
    this.closeLogin()

    div!.style.display = "inline";
  }

  closeLogin() {
    let div = document.getElementById('loginForm');
    
    div!.style.display = "none";
  }

  closeRegister() {
    let div = document.getElementById('registerForm');
    
    div!.style.display = "none";
  }

  validateEmail(event: any) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let emailL = (<HTMLInputElement>document.getElementById("emailLoginTxt")).value
    let emailR = (<HTMLInputElement>document.getElementById("emailRegisterTxt")).value

    if (emailL !== "") {
      if (emailRegex.test(emailL)) {
        document.getElementById('emailLoginTxt')!.style.border = "";
        document.getElementById('errorEmailLoginTxt')!.style.display = "";
      } else {
        document.getElementById('emailLoginTxt')!.style.border = "1px solid rgb(190, 12, 12)";
        document.getElementById('errorEmailLoginTxt')!.style.display = "inline";
      }
    }
    if (emailR !== "") {
      if (emailRegex.test(emailR)) {
        document.getElementById('emailRegisterTxt')!.style.border = "";
        document.getElementById('errorEmailRegisterTxt')!.style.display = "";
      } else {
        document.getElementById('emailRegisterTxt')!.style.border = "1px solid rgb(190, 12, 12)";
        document.getElementById('errorEmailRegisterTxt')!.style.display = "inline";
      }
    }
  };
  
  validatePassword(event: any) {
    const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;
    let passwordL = (<HTMLInputElement>document.getElementById('passwordLoginTxt')).value;
    let passwordR = (<HTMLInputElement>document.getElementById('passwordRegisterTxt')).value;

    if (passwordL !== "") {
      if (passwordRegex.test(passwordL)) {
        document.getElementById('passwordLoginTxt')!.style.border = "";
        document.getElementById('errorPasswordLoginTxt')!.style.display = "";
      } else {
        document.getElementById('passwordLoginTxt')!.style.border = "1px solid rgb(190, 12, 12)";
        document.getElementById('errorPasswordLoginTxt')!.style.display = "inline";
      }
    }
    if (passwordR !== "") {
      if (passwordRegex.test(passwordR)) {
        document.getElementById('passwordRegisterTxt')!.style.border = "";
        document.getElementById('errorPasswordRegisterTxt')!.style.display = "";
      } else {
        document.getElementById('passwordRegisterTxt')!.style.border = "1px solid rgb(190, 12, 12)";
        document.getElementById('errorPasswordRegisterTxt')!.style.display = "inline";
      }
    }
    
  }

  validateConfirmPassword(event: any) {
    let password = (<HTMLInputElement>document.getElementById('passwordRegisterTxt')).value;
    let passwordConfirm = (<HTMLInputElement>document.getElementById('passwordConfirmTxt')).value;

    if (password === passwordConfirm || passwordConfirm == "") {
      document.getElementById('passwordConfirmTxt')!.style.border = "";
      document.getElementById('errorPasswordConfirmTxt')!.style.display = "";
    } else {
      document.getElementById('passwordConfirmTxt')!.style.border = "1px solid rgb(190, 12, 12)";
      document.getElementById('errorPasswordConfirmTxt')!.style.display = "inline";
    }
  }

  makeRegister() {
    alert("Registrado")
  }
}
