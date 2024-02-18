import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent implements OnInit{
  userInfoForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }
  private initForm(): void {
    this.userInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      MobileNo: ['', Validators.required],
      Email: ['', Validators.required],
      address: ['', Validators.required],
      Age: ['', Validators.required],
      Dob: ['', Validators.required],
    });
  }
  onSubmit(): void {
    if (this.userInfoForm.valid) {
      const formData = this.userInfoForm.value;
      console.log('User Info:', formData);
    }
  }
}
