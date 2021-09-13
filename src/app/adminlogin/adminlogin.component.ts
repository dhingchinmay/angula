import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminLoginService } from '../services/adminlogin.service';
import { AuthService } from '../services/auth.service';
import { AuthGuard2 } from '../services/authguard.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  userDisplayName = '';
  email = "";
  password = "";
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle
  userData: any;
  element : any;

  constructor(private authservice: AuthService,
    private router: Router,
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private auth: AuthGuard2,
    private toastr: ToastrService,
    private http : HttpClient,
    private adminlogin:AdminLoginService
    ) { }

  ngOnInit() {
    if (sessionStorage .getItem('email')?.length && sessionStorage.getItem('uid')?.length) {
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
  getData(){
    return this.http.get("https://demoo-projectt-default-rtdb.firebaseio.com/Property.json");
  }
  
  login(form: NgForm) {
    this.clearErrorMessage();
    console.log(form.value)
    // if (this.validateForm(this.email, this.password)) { 
    //   this.authservice.loginWithEmail(this.email, this.password)
    //     .then((res) => {
    //       this.toastr.success('You are Logged In');
    //       this.router.navigate(['/home'])
    //     }).catch(_error => {
    //       this.error =  _error
    //       this.toastr.error('Error Wrong Email-Id or Password');
    //       this.router.navigate(['/login'])
    //     })
    // }
    const {email , password} = form.value;
    this.db.list('/Admin').valueChanges().subscribe(res=>{
       const fetchedEmail = res[0];
       const fetchedpass = res[1];
       if((email ===fetchedEmail) &&(password === fetchedpass)){
         sessionStorage.setItem('aemail',email);
         sessionStorage.setItem('apassword',password);
         this.toastr.success('You are Logged as Admin');
         setTimeout(
          () => {
              this.element.show();
          }, 4000);  
          this.router.navigate(["/Admin"]);
       }else{
        this.toastr.error('Error Wrong Email-Id or Password');
         this.router.navigate(["/Adminlogin"])
        //  .then(
          //  (isNavigated)=>{
            //  if(isNavigated){
            //  }else{
            //  }
          //  }
        //  )
       }

    })
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
