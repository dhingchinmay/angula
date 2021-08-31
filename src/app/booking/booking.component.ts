import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  email = "";
  name = "";
  telephone ="";
  Familymember = "";
  HouseTitleorDescription="";
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
    this.db.list('/Booking/')
    .push({...form.value});
  }

  validateForm(email: any, name: any, telephone: any, Familymember: String, HouseTitleorDescription: any) {
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

    if (Familymember.length === 0) {
      this.errorMessage = "write something ";
      return false;
    }

    if (HouseTitleorDescription.length === 0) {
      this.errorMessage = "Enter Something";
      return false;
    }

    this.errorMessage = '';
    return true;

  }
}
