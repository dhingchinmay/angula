import { ViewChild } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {} from 'googlemaps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demoo-projectt';
  //  ngOnInit(){
  //   window.addEventListener('close',()=>{
  //     console.log('window closed')
  //    sessionStorage.removeItem('email');
  //    sessionStorage.removeItem('uid');
  //   })
  //  }
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  ngOnInit() {
   
  }
//   ngAfterViewInit() {
//     const mapProperties = {
//       center: new google.maps.LatLng(35.2271, -80.8431),
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//  };
//  this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
//   }

}
