import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin = false;
  searchValue = '';
  sub: any;
  constructor(public authservice: AuthService,
    private router: Router,
    private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.isLogin = localStorage.getItem('email')?.length ? true : false;
    this.authservice.getProfileObs().subscribe((profile: any) => {
      console.log('profile profile', profile);
      if (profile) {
        this.isLogin = profile;
      }
    });
  }
  logOut() {
    this.isLogin = false;
    this.authservice.signout();
    this.router.navigate(['/Login']);
  }
  applyFilter(event: any) {
    this.dataService.setSerachValue(this.searchValue);
  }

}