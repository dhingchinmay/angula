import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.css']
})
export class FormreactiveComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {  
  }

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: [''],
    dob: [''],
    gender: ['']
  });

  onSubmit() {
   console.log('form data is ', this.profileForm.value);
  }
}
