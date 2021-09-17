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
  error: { name: string, message: string } = { name: '', message: '' };
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
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
}

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  validateForm(email: any, name: any, telephone: string, subject: any, commentandfeedback: any) {
    if (telephone.length < 10) {
      this.errorMessage = "Please Enter no";
      return false;
    }
    this.errorMessage = '';
    return true;
  }
}


