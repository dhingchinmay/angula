import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard2 implements CanActivate {
    authService: any;
    constructor(
        private router: Router, authService: AuthService) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            console.log(sessionStorage.getItem('email'));
            console.log(sessionStorage.getItem('uid'));
        if (!sessionStorage.getItem('email') && !sessionStorage.getItem('uid')) {
            this.router.navigate(['/Login']);
            
            alert('You are not allowed to view this page');
            console.log("auth service called")
            return  false;
          }else{
              return true;
          }
        
        }

}
