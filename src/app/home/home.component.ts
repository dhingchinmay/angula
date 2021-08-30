import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';
// import { getAuth, signOut } from "firebase/auth";
// import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  products = [
    { "id": 1, "name": "Family house", "description": "2 BHK House for rent in Chandari 1200 sqft", "price": "45000/Month", "src": "assets/img/37.jpg/", "Details": "3 Beds, 2 Bath" },
    { "id": 2, "name": "Apartments", "description": "3 BHK House for rent in Gujarat 2000 sqft", "price": "50000/Month", "src": "assets/img/38.jpg/", "Details": "2 Beds, 1 Bath" },
    { "id": 3, "name": "Residential", "description": "2 BHK House for rent in Dispur 1800 sqft", "price": "20000/Month", "src": "assets/img/39.jpg/", "Details": "2 Beds, 1 Bath" },
    { "id": 4, "name": "Commercial", "description": "3 BHK House for rent in Ambari 1450 sqft", "price": "20000/Month", "src": "assets/img/54.jpeg/", "Details": "3 Beds, 1 Bath" },
    { "id": 5, "name": "Villa", "description": "2 BHK House for rent in Udaipur 1200 sqft", "price": "20000/Month", "src": "assets/img/40.jpg/", "Details": "2 Beds, 1 Bath" },
    { "id": 6, "name": "Paying Guest", "description": "2 BHK House for rent in Rajgarh 900 sqft", "price": "25000/Month", "src": "assets/img/54.jpeg/", "Details": "3 Beds, 2 Bath" },
    { "id": 7, "name": "Street House", "description": "2 BHK House for rent in Assam 900 sqft", "price": "26000/Month", "src": "assets/img/42.jpg/", "Details": "2 Beds, 1 Bath" },
    { "id": 8, "name": "Bungalow", "description": "2 BHK House for rent in Khumbhalgarh 900 sqft", "price": "28000/Month", "src": "assets/img/43.jpg/", "Details": "4 Beds, 3 Bath" },
    { "id": 9, "name": "Balcony View", "description": "2 BHK House for rent in Surat 900 sqft", "price": "15000/Month", "src": "assets/img/44.jpg/", "Details": "3 Beds, 2 Bath" },
  ];
  sliderValue = true;
  messageSuccess: boolean | undefined;


  constructor(private db: AngularFireDatabase,
    private router: Router,
    private dataservice: DataserviceService,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.messageSuccess = true;
    this.dataservice.getSearchValue().subscribe(res => {
      console.log(res.length, 'length');
      if (res.length > 0) {
        this.sliderValue = false;
      } else {
        this.sliderValue = true;
      }
      console.log('res', res);
    });
    if (!sessionStorage.getItem('email')?.length && !sessionStorage.getItem('uid')?.length) {
      this.router.navigate(['/Login']);
    }
    // this.fireAuth.signOut().then((data)=>{console.log("logout")})
  }
  ngOnDestroy() {
    // const auth = getAuth();
    // signOut(auth).then(() => {
    //   // Sign-out successful.
    // }).catch((error:any) => {
    //   // An error happened.
    //   console.log(error)
    // });
    //   console.log("on destroyed")
    //   this.fireAuth.signOut().then(
    //     (response)=>{
    //         console.log(response)
    //     }
    //   ).catch((error)=>{console.log(error)})
    // }
    // this.authService.signout();
  }
}
