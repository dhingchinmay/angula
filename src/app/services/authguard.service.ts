import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    authService: any;
    constructor(
        private router: Router, authService: AuthService) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        if (!sessionStorage.getItem('email')?.length && !sessionStorage.getItem('uid')?.length) {
            this.router.navigate(['/Login']);
            alert('You are not allowed to view this page');
            return  false;
          }
          return true;
        }

}
