import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const L: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css',]
})
export class MapsComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
    function initAutocomplete() {
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: { lat: 24.571270, lng: 73.691544 },
          zoom: 13,
          mapTypeId: "roadmap",
        }
      );
    
      // Create the search box and link it to the UI element.
      const input = document.getElementById("pac-input") as HTMLInputElement;
      const searchBox = new google.maps.places.SearchBox(input);
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    
      // Bias the SearchBox results towards current map's viewport.
      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
      });
    
      let markers: google.maps.Marker[] = [];
      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
    
        if (places.length == 0) {
          return;
        }
    
        // Clear out the old markers.
        markers.forEach((marker) => {
          marker.setMap(null);
        });
        markers = [];
    
        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }
          const icon = {
            url: place.icon as string,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25),
          };
    
          // Create a marker for each place.
          markers.push(
            new google.maps.Marker({
              map,
              icon,
              title: place.name,
              position: place.geometry.location,
            })
          );
    
          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });
    }
    
  //   if (!navigator.geolocation) {
  //     console.log('location is not supported');
  //   }
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const coords = position.coords;
  //     const latLong = [coords.latitude, coords.longitude];
  //     console.log(
  //       `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
  //     );
  //     let mymap = L.map('map').setView(latLong, 13);

  //     L.tileLayer(
  //       'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VicmF0MDA3IiwiYSI6ImNrYjNyMjJxYjBibnIyem55d2NhcTdzM2IifQ.-NnMzrAAlykYciP4RP9zYQ',
  //       {
  //         attribution:
  //           'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //         maxZoom: 18,
  //         id: 'mapbox/streets-v11',
  //         tileSize: 512,
  //         zoomOffset: -1,
  //         accessToken: 'pk.eyJ1IjoiY2hpbm1heWRoaW5nIiwiYSI6ImNrcmJxODk5dTEwZTcycHF1a2VhaWYxYTcifQ.mGog1rXSoieSLP_KtvwBXg',
  //       }
  //     ).addTo(mymap);

  //     let marker = L.marker(latLong).addTo(mymap);

  //     marker.bindPopup('<b>Hi</b>').openPopup();

  //     let popup = L.popup()
  //       .setLatLng(latLong)
  //       .setContent('I am Chinmay')
  //       .openOn(mymap);
  //   });
  //   this.watchPosition();
  // }

  // watchPosition() {
  //   let desLat = 0;
  //   let desLon = 0;
  //   let id = navigator.geolocation.watchPosition(
  //     (position) => {
  //       console.log(
  //         `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
  //       );
  //       if (position.coords.latitude === desLat) {
  //         navigator.geolocation.clearWatch(id);
  //       }
  //     },
  //     (err) => {
  //       console.log(err);
  //     },
  //     {
  //       enableHighAccuracy: true,
  //       timeout: 5000,
  //       maximumAge: 0,
  //     }
  //   );
  if (!localStorage.getItem('email')?.length && !localStorage.getItem('uid')?.length) {
    this.router.navigate(['/Login']);
  } 
  // }
}
}