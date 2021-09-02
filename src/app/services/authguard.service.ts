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
        private router: Router, authService: AuthService,) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            console.log(sessionStorage.getItem('email'));
            console.log(sessionStorage.getItem('uid'));
        if (!sessionStorage.getItem('aemail') && !sessionStorage.getItem('apassword')) {
            this.router.navigate(['/Login']);
            console.log("auth service called")
            return  false;
          }else{
              return true;
          }
        
        }

}
