import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  name: any;
  public content = new BehaviorSubject<any>('');


  constructor() { }

  setSerachValue(data: any) {
    this.content.next(data);
  }
  getSearchValue() {
    return this.content;
  }

}
