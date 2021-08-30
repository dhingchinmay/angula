import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthGuard } from '../services/authguard.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  email = "";
  password = "";
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(private authservice: AuthService,
    private router: Router,
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private auth: AuthGuard) { }

  ngOnInit() {
    if (sessionStorage.getItem('email')?.length && sessionStorage.getItem('uid')?.length) {
      this.router.navigate(['/home']);
    }

  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  // signInHandler(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data: any) => {
  //    sessionStorage.setItem('google_auth', JSON.stringify(data));
  //     this.router.navigateByUrl('/home').then();
  //   });
  // }

  login(form: NgForm) {
    console.log(form.value);
    this.db.list('/Login/')
      .push({ ...form.value });
      
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.loginWithEmail(this.email, this.password)
        .then((res) => {
          this.router.navigate(['/home'])
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/login'])
        })
    }
  }

  validateForm(email: any, password: any) {
    if (email.length === 0) {
      this.errorMessage = "Please Enter Email Id";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "Please Enter Password";
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = "Password Should be at least 6 Character";
      return false;
    }

    this.errorMessage = '';
    return true;
  }

}
