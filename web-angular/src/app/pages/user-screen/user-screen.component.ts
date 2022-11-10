import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  @Input() menuItem: string = '';
  
  emailLV: boolean = false;  //email login validate
  pwrLV: boolean = false;     //password login validate

  emailRV: boolean = false;  //email register validate
  pwrRV: boolean = false;     //password register validate
  cPwrRV: boolean = false;    //confirm password register validate
  constructor(
    private route: Router,
  ) { }
  

  ngOnInit(): void {
    //console.log(this.menuItem)
  }

  goMenu(){
    this.route.navigate(['menu-page']);
  }

  openLogin() {
    let div = document.getElementById('loginForm');
    
    this.closeRegister()
    div!.style.display = 'inline';
  }

  openRegister() {
    let div = document.getElementById('registerForm');
    
    this.closeLogin()

    div!.style.display = 'inline';
  }

  closeLogin() {
    let div = document.getElementById('loginForm');
    
    div!.style.display = 'none';
  }

  closeRegister() {
    let div = document.getElementById('registerForm');
    
    div!.style.display = 'none';
  }

  autoValidateEmail(event: any) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let emailL = (<HTMLInputElement>document.getElementById('emailLoginTxt')).value
    let emailR = (<HTMLInputElement>document.getElementById('emailRegisterTxt')).value
    

    if (emailRegex.test(emailL) || emailL == '') {
      document.getElementById('emailLoginTxt')!.style.border = '';
      document.getElementById('errorEmailLoginTxt')!.style.display = '';
      this.emailLV = true;
    } else {
      document.getElementById('emailLoginTxt')!.style.border = '1px solid rgb(190, 12, 12)';
      document.getElementById('errorEmailLoginTxt')!.style.display = 'inline';
      this.emailLV = false;
    }
    if (emailRegex.test(emailR) || emailR == '') {
      document.getElementById('emailRegisterTxt')!.style.border = '';
      document.getElementById('errorEmailRegisterTxt')!.style.display = '';
      this.emailRV = true;
    } else {
      document.getElementById('emailRegisterTxt')!.style.border = '1px solid rgb(190, 12, 12)';
      document.getElementById('errorEmailRegisterTxt')!.style.display = 'inline';
      this.emailRV = false;
    }
  };
  
  autoValidatePassword(event: any) {
    const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;
    let passwordL = (<HTMLInputElement>document.getElementById('passwordLoginTxt')).value;
    let passwordR = (<HTMLInputElement>document.getElementById('passwordRegisterTxt')).value;

  if (passwordRegex.test(passwordL) || passwordL == '') {
    document.getElementById('passwordLoginTxt')!.style.border = '';
    document.getElementById('errorPasswordLoginTxt')!.style.display = '';
    this.pwrLV = true;
  } else {
    document.getElementById('passwordLoginTxt')!.style.border = '1px solid rgb(190, 12, 12)';
    document.getElementById('errorPasswordLoginTxt')!.style.display = 'inline';
    this.pwrLV = false;
  }
  if (passwordRegex.test(passwordR) || passwordR == '') {
    document.getElementById('passwordRegisterTxt')!.style.border = '';
    document.getElementById('errorPasswordRegisterTxt')!.style.display = '';
    this.pwrRV = true;
  } else {
    document.getElementById('passwordRegisterTxt')!.style.border = '1px solid rgb(190, 12, 12)';
    document.getElementById('errorPasswordRegisterTxt')!.style.display = 'inline';
    this.pwrRV = false;
  }
    
  }

  autoValidateConfirmPassword(event: any) {
    let password = (<HTMLInputElement>document.getElementById('passwordRegisterTxt')).value;
    let passwordConfirm = (<HTMLInputElement>document.getElementById('passwordConfirmTxt')).value;

    if (password === passwordConfirm || passwordConfirm == '') {
      document.getElementById('passwordConfirmTxt')!.style.border = '';
      document.getElementById('errorPasswordConfirmTxt')!.style.display = '';
      this.cPwrRV = true;
  } else {
      document.getElementById('passwordConfirmTxt')!.style.border = '1px solid rgb(190, 12, 12)';
      document.getElementById('errorPasswordConfirmTxt')!.style.display = 'inline';
      this.cPwrRV = false;
    }
  }

  inputRegisterValidate() {
    if (this.emailRV == true && this.pwrRV == true && this.cPwrRV == true) {
      this.userRegister();
    }
  }

  userRegister() {
    localStorage.setItem('userName', (<HTMLInputElement>document.getElementById('emailRegisterTxt')).value)
    localStorage.setItem('userPwr', (<HTMLInputElement>document.getElementById('passwordRegisterTxt')).value)

    this.goMenu();
  }

  inputLoginValidate() {
    if (this.emailLV == true && this.pwrLV == true) {
      this.userLogin();
    }
  }

  userLogin() {
    let emailL = (<HTMLInputElement>document.getElementById('emailLoginTxt')).value;
    let pwrL = (<HTMLInputElement>document.getElementById('passwordLoginTxt')).value;
    
    if (localStorage.getItem('userName') === emailL && localStorage.getItem('userPwr') === pwrL) {
      this.goMenu();
    }
   
  }

}
