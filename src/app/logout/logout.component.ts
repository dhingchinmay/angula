import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { AuthService } from '../services/auth.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  sub: any;
  renderer2: any;
  name = 'Angular2';
  subject = new Subject();
  listenGlobal: any;

  constructor(public afu: AngularFireAuth, _renderer: Renderer2, _elementRef: ElementRef) {
    this.renderer2.listenGlobal('document', 'touchend', (e: any) => {
      console.log('touchend');
      this.subject.next(e);
    });
    this.renderer2.listenGlobal('document', 'click', (e: any) => {
      console.log('click');
      this.subject.next(e);
    });

    this.subject.pipe(debounceTime(1000)).subscribe((event: any) => {
      console.log(event); //do stuff here
    })
  }

  ngOnInit(): void {
  }
}
