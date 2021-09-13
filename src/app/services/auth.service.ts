import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';

import firebase from 'firebase/app';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  authState: any = null;
  private profileObs$: BehaviorSubject<any> = new BehaviorSubject(null);
  isLoggedIn: any;
  constructor(private afu: AngularFireAuth, public afAuth: AngularFireAuth) {
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

  registerWithEmail(email: string, password: string, name: string) {
    return this.afu.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.loginWithEmail(email, password);
        this.authState = user
        sessionStorage.setItem('user', JSON.stringify(this.userData));
        console.log(this.userData)
        console.log('this.authState', this.authState);
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
        //sessionStorage.setItem('email', user.user.email);
        //sessionStorage.setItem('uid', user.user.uid);
        sessionStorage.setItem('email', user.user.email);
        sessionStorage.setItem('uid', user.user.uid);
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
    sessionStorage.clear();
    console.log('signout method');
    this.afu.signOut();
    this.setProfileObs(false);
  }
  login(): void {
    sessionStorage.clear();
    console.log('login method');
    this.afu.signOut();
    this.setProfileObs(true);
  }
  onSubmit(): void {
    sessionStorage.clear();
    console.log('contact method');
    this.setProfileObs(true);
  }
  // GoogleAuth() {

  //   // return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  // }
  // AuthLogin(provider: any) {
    // return firebase.auth.signInWithPopup(provider)
    // .then((_result: any) => {
    //     console.log('You have been successfully logged in!')
    // }).catch((error: any) => {
    //     console.log(error)
    // })
  }