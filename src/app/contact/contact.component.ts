import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  error: { name: string, message: string } = { name: '', message: '' };
  form: any;

  constructor(private router: Router,
    private db: AngularFireDatabase,
    private toastr: ToastrService ) { }

  ngOnInit() {
    if (!sessionStorage.getItem('email')?.length && !sessionStorage.getItem('uid')?.length) {
      this.router.navigate(['/Login']);
    }
  }
  
  onSubmit(form:NgForm){
    console.log(form.value);
    const {CommentorFeedback,Subject,email,name,telephone} = form.value;
    this.validateForm(email,name,telephone,Subject,this.commentandfeedback)
    this.db.list('/Contact/')
    .push({...form.value});

    }
  

    
  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: ''  };
  }
  validateForm(email: any, name: any, telephone: string, subject: any, commentandfeedback: any) {
   
    if (telephone.length <10 ) {
      this.errorMessage = "Please Enter no";
      return false;
    }

    this.errorMessage = '';
    return true;

  }
}


function then(arg0: () => void) {
  throw new Error('Function not implemented.');
}

