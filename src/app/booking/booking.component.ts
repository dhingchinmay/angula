import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  email = "";
  name = "";
  telephone = "";
  Familymember = "";
  HouseTitleorDescription = "";
  errorMessage = '';
  error: { name: string, email: string, telephone: string, subject: string } = { name: '', email: '', telephone: '', subject: '' };
  propertyId: any;
  form: any;
  checkoutForm: any;

  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private route: ActivatedRoute) { }

  userEmail: any;
  ngOnInit() {
    this.route.params.subscribe(data => {
      this.propertyId = data.proId;
    })
    this.userEmail = sessionStorage.getItem('email');
    if (!sessionStorage.getItem('email')?.length && !sessionStorage.getItem('uid')?.length) {
      this.router.navigate(['/Login']);

    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.db.list('/Booking/')
      .push({ ...form.value, propertyId: this.propertyId, ownerEmail: this.userEmail });
  }
  
}
