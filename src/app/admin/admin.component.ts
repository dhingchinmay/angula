import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = "";
  details = "";
  description ="";
  errorMessage = '';
  photo:any; 
  error: { title: string, details: string, description: string,  } = { title: '', details: '' , description:'' };
  selectedFile: File;
  fb: any;
  downloadURL: Observable<string>;
  fileToBeUpload : File;
  constructor(private router: Router,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,private http:HttpClient) { }

  ngOnInit(): void {
}
  onSubmit(form:NgForm){
    var n = Date.now();
    
    const filePath = `Images/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Images/${n}`, this.fileToBeUpload);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
        
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
              console.log(this.fb);
              console.log(form.value);
              this.db.list('/Property/')
    .push({...form.value,propertyImage:this.fb});
            }
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
      // console.log(this.fb);
      
  }
  onFileSelected(event: any) {
  
    // const file = event.target.files[0];
    this.fileToBeUpload = event.target.files[0];
    // console.log(file)
  
}

}
