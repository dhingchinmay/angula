import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email = "";
  name = "";
  telephone = "";
  subject = "";
  commentandfeedback = "";
  errorMessage = '';
  error: { name: string, email:string, telephone: string, subject:string,commentandfeedback: string, message: string } = { name: '', email:'', telephone:'', subject:'', commentandfeedback:'',message: '' };
  form: any;
  submitted: boolean;
  propertyId: any;
  

  constructor(private router: Router,
    private db: AngularFireDatabase,
    private toastr: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.propertyId = data.productId;
    })
    if (!sessionStorage.getItem('email')?.length && !sessionStorage.getItem('uid')?.length) {
      this.router.navigate(['/Login']);
    }
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.db.list('/Contact/')
      .push({ ...form.value });

      if(this.validateForm(this.name,this.telephone,this.subject,this.commentandfeedback,this.email)){
        this.form=this.submitted ;
      }else{
        this.errorMessage;
      }
      this.form.onReset();
      }

  onReset() {
    this.submitted = false;
    this.form.reset();
}

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '',email:'',telephone:'',subject:'', commentandfeedback:'', message: '', };
  }

  validateForm(name: any, email: any, telephone: any, subject: any, commentandfeedback: any) {
    if (name.length === 0) {
      this.errorMessage = "Please Enter your name";
      return false;
    }
    if (email.length === 0) {
      this.errorMessage = "Please Enter Email Id";
      return false;
    }

    if (telephone.length === 0) {
      this.errorMessage = "Please Enter Mobile No";
      return false;
    }

    if (subject.length === 0) {
      this.errorMessage = "Please Enter SubjectNo";
      return false;
    }
    if (commentandfeedback.length === 0) {
      this.errorMessage = "Comment and Feedback ";
      return false;
    }
    this.errorMessage = '';
    return true;
  }
}


