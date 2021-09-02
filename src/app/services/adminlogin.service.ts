import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { BookingComponent } from "../booking/booking.component";


@Injectable({
    providedIn: 'root'
  })
export class AdminLoginService{

    constructor(private http:HttpClient,
        private db: AngularFireDatabase){

    }
    // proc = [
    //     { "id": 9, "title": "Balcony View", "description": "2 BHK House for rent in Ratanpur 900 sqft", "price": "20000/Month", "propertyImage": "assets/img/44.jpg/", "details": "2 Bedroom, 2 Bathroom, Kitchen" },
    // ];
   getAdminData(){
  return  this.db.list('/Admin')
    .valueChanges()
    // .subscribe((res: any) => {
    //     console.log(res)//should give you the array of percentage. 
    //     // this.labels = res;
    //     // this.proc.push(...res);     
    // })
   } 
   getData(){
    return this.http.get("https://demoo-projectt-default-rtdb.firebaseio.com/Admin.json");
  }
}
 

