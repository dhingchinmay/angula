import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            // validates date format yyyy-mm-dd
            dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
} 
 


function MustMatch(arg0: string, arg1: string): any {
  throw new Error('Function not implemented.');
}
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
//   //   private storage: AngularFireStorage) { }
//   isLoading = false;
//   hero: any;
//   heroForm: any;

//   load() : void {
//     this.isLoading = true;
//     setTimeout( () => this.isLoading = false, 2000 );
//   }

// 	async wait(ms: number): Promise<void> {
// 		return new Promise<void>( resolve => setTimeout( resolve, ms) );
// 	}

// 	start() {
//     this.isLoading = true;
// 		this.wait(2000).then( () => this.isLoading = false );
// 	}

//     ngOnInit(): void {
//       this.heroForm = new FormGroup({
//         name: new FormControl(this.hero.name, [
//           Validators.required,
//           Validators.minLength(4),
//           forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
//         ]),
//         alterEgo: new FormControl(this.hero.alterEgo),
//         power: new FormControl(this.hero.power, Validators.required)
//       });
    
//     }
//     // if (!sessionStorage.getItem('email')?.length && !sessionStorage.getItem('uid')?.length) {
//     //   this.router.navigate(['/Login']);
//     // }

//   // onSubmit(form:NgForm){
//   //   console.log(form.value);
//   //   this.db.list('/Admin/')
//   //   .push({...form.value});
//   // }
// //   onFileSelected(event: any) {
// //     var n = Date.now();
// //     const file = event.target.files[0];
// //     const filePath = `Images/${n}`;
// //     const fileRef = this.storage.ref(filePath);
// //     const task = this.storage.upload(`Images/${n}`, file);
// //     task
// //       .snapshotChanges()
// //       .pipe(
// //         finalize(() => {
// //           this.downloadURL = fileRef.getDownloadURL();
// //           this.downloadURL.subscribe(url => {
// //             if (url) {
// //               this.fb = url;
// //               console.log(url)
// //             }
// //             console.log(this.fb);
// //           });
// //         })
// //       )
// //       .subscribe(url => {
// //         if (url) {
// //           console.log(url);
// //         }
// //       });
// // setTimeout(() => {
  
// // }, 5000);
// //   }
// }
// function forbiddenNameValidator(arg0: RegExp): import("@angular/forms").ValidatorFn {
//   throw new Error('Function not implemented.');


