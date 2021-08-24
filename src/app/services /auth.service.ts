import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;
  private profileObs$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private afu: AngularFireAuth, private router: Router) {
    this.afu.authState.subscribe((auth => {
      this.authState = auth;
    }))
  }

  // all firebase getdata functions

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true
    } else {
      return false
    }
  }

  registerWithEmail(email: string, password: string) {
    return this.afu.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.loginWithEmail(email, password);
        this.authState = user
        console.log('this.authState ####', this.authState);

      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }



  loginWithEmail(email: string, password: string) {
    return this.afu.signInWithEmailAndPassword(email, password)
      .then((user: any) => {
        console.log('user', user);
        this.authState = user
        console.log('this.authState ', this.authState);
        localStorage.setItem('email', user.user.email);
        localStorage.setItem('uid', user.user.uid);
        this.setProfileObs(true);
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }
  setProfileObs(value: any) {
    this.profileObs$.next(value);
  }
  getProfileObs(): Observable<any> {
    return this.profileObs$.asObservable();
  }
  signout(): void {
    localStorage.clear();
    console.log('signout method');
    this.afu.signOut();
    this.setProfileObs(false);
  }
  login(): void {
    localStorage.clear();
    console.log('login method');
    this.afu.signOut();
    this.setProfileObs(true);
  }

}
