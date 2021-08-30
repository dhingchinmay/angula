import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  email = "";
  name = "";
  telephone ="";
  subject = "";
  commentandfeedback="";
  errorMessage = ''; 
  error: { name: string, email: string, telephone: string, subject:string } = { name: '', email: '' , telephone:'', subject:'' };

  constructor(private router: Router,private db: AngularFireDatabase ) { }
  
  ngOnInit() {
    if (!localStorage.getItem('email')?.length && !localStorage.getItem('uid')?.length) {
      this.router.navigate(['/Login']);
    }
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.db.list('/Contact/')
    .push({...form.value});
  }
  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', email:'', telephone:'', subject:''  };
  }
  validateForm(email: any, name: any, telephone: any, subject: any, commentandfeedback: any) {
    if (email.length === 0) {
      this.errorMessage = "Please Enter Email Id";
      return false;
    }

    if (name.length === 0) {
      this.errorMessage = "Please Enter Password";
      return false;
    }

    if (telephone.length === 0) {
      this.errorMessage = "Please Enter no";
      return false;
    }

    if (subject.length === 0) {
      this.errorMessage = "write something ";
      return false;
    }

    if (commentandfeedback.length === 0) {
      this.errorMessage = "Enter Something";
      return false;
    }

    this.errorMessage = '';
    return true;

  }
}
