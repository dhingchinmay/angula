import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  name = "";
  email = "";
  password = "";
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(private authservice: AuthService,
    private router: Router,
    private db: AngularFireDatabase) { }

  ngOnInit() {
  }
  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  register(form: NgForm) {
    console.log(form.value);
    this.db.list('/Register/')
      .push({ ...form.value });
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password, this.name)) {
      this.authservice.registerWithEmail(this.email, this.password, this.name)
        .then((res: any) => {
          console.log('res #', res);
          this.message = "You are registered with data on Firebase"
          setTimeout(() => {
            this.router.navigate(['/home'])
          }, 2000);
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/register'])
        })
    }
  }

  // signUpHandler(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data: any) => {
  //    sessionStorage.setItem('google_auth', JSON.stringify(data));
  //     this.router.navigate(['/home']).then();
  //   });
  // }

  validateForm(email: any, password: any, name: any) {
    if (email.length === 0) {
      this.errorMessage = "Please Enter Email Id";
      return false;
    }

    if (name.length === 0) {
      this.errorMessage = "Please Enter Your Name";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "Please Enter Password";
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = "Password should be at least 6 Character";
      return false;
    }

    this.errorMessage = '';
    return true;
  }

}