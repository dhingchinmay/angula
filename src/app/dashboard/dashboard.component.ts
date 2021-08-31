import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  // title = "";
  // details = "";
  // description ="";
  // errorMessage = ''; 
  // error: { title: string, details: string, description: string,  } = { title: '', details: '' , description:'' };
  // selectedFile: File;
  // fb: any;
  // downloadURL: Observable<string>;
  // constructor(private router: Router,
  //   private db: AngularFireDatabase,
  //   private storage: AngularFireStorage) { }
  isLoading = false;

  load() : void {
    this.isLoading = true;
    setTimeout( () => this.isLoading = false, 2000 );
  }

	async wait(ms: number): Promise<void> {
		return new Promise<void>( resolve => setTimeout( resolve, ms) );
	}

	start() {
    this.isLoading = true;
		this.wait(2000).then( () => this.isLoading = false );
	}
  
  ngOnInit() {
    // if (!localStorage.getItem('email')?.length && !localStorage.getItem('uid')?.length) {
    //   this.router.navigate(['/Login']);
    // }
  }

  // onSubmit(form:NgForm){
  //   console.log(form.value);
  //   this.db.list('/Admin/')
  //   .push({...form.value});
  // }
//   onFileSelected(event: any) {
//     var n = Date.now();
//     const file = event.target.files[0];
//     const filePath = `Images/${n}`;
//     const fileRef = this.storage.ref(filePath);
//     const task = this.storage.upload(`Images/${n}`, file);
//     task
//       .snapshotChanges()
//       .pipe(
//         finalize(() => {
//           this.downloadURL = fileRef.getDownloadURL();
//           this.downloadURL.subscribe(url => {
//             if (url) {
//               this.fb = url;
//               console.log(url)
//             }
//             console.log(this.fb);
//           });
//         })
//       )
//       .subscribe(url => {
//         if (url) {
//           console.log(url);
//         }
//       });
// setTimeout(() => {
  
// }, 5000);
//   }
}
