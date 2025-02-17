import { Component, inject, OnInit } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { FormDataService } from '../services/form-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FloatLabel } from 'primeng/floatlabel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ReCAPTCHAService } from '../services/Backend.service';
import { AutoCapitalizeDirective } from '../Directive/auto-capitalize.directive';
import * as bcrypt from 'bcrypt';
declare var google: any;
@Component({
  selector: 'app-sign-up',
  imports: [
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgIf,
    AutoCapitalizeDirective,
    PasswordModule,
    DatePickerModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    CheckboxModule,
    ButtonModule,
    ToggleButtonModule,
    FloatLabel,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  providers: [MessageService],
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  isOtpSent = false;
  Email_check = false;
  isOtpVerified = false;
  email: string | null = null;

  public messageservice = inject(MessageService);
  constructor(
    private fb: FormBuilder,
    private formdataService: FormDataService,
    private router: Router,
    private reCAPTCHAService: ReCAPTCHAService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', [Validators.required]],
        otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
        subscription: ['false'],
        subscriptionName: [[]],
        viewProfile: [0],
        isAdmin: [false],
        isvisible: [false],
        isLoggedIn: [false],
        sessionId: [null],
      },
      { validators: this.passwordMatchValidator }
    );

  }
  checkemail(email:any){
    this.formdataService.getUsers().subscribe((data)=>{
      const checkEmail = data.find((user)=>{
        return user.email==email;
      })
      if(checkEmail){
        this.Email_check=false;
        
        this.messageservice.add({
          severity: 'info',
          summary: 'Info',
          detail: 'You have already used this email.',
          life: 3000,
        });
      }else{
        this.Email_check=true;
      }
    })

  }

  passwordMatchValidator(formGroup: FormGroup): null | { mismatch: true } {
    const password = formGroup.get('password')?.value;
    const rePassword = formGroup.get('rePassword')?.value;
    return password === rePassword ? null : { mismatch: true };
  }
  sendOtp() {
    if (this.signUpForm.get('email')?.valid) {
      this.email = this.signUpForm.value.email;
      this.reCAPTCHAService.sendOtp(this.email).subscribe(
        () => {
          this.isOtpSent = true;
          // alert('OTP sent to your email!');
          this.messageservice.add({
            severity: 'success',
            summary: 'success',
            detail: 'OTP sent to your email!',
            life: 3000,
          });
        },
        (error) => {
          this.messageservice.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error sending OTP',
            life: 3000,
          });
          console.error(error);
        }
      );
    } else {
      // alert('Enter Valid email Id')
      this.messageservice.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Enter Valid email Id',
        life: 3000,
      });
    }
  }
  verifyOtp() {
    if (this.signUpForm.get('otp')?.valid) {
      this.reCAPTCHAService
        .verifyOtp(this.email, this.signUpForm.value.otp)
        .subscribe(
          () => {
            // alert('OTP Verified Successfully!');
            this.messageservice.add({
              severity: 'success',
              summary: 'success',
              detail: 'OTP Verified Successfully!',
              life: 3000,
            });
          },
          () => {
            this.messageservice.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Invalid OTP, please try again.',
              life: 3000,
            });
          }
        );
    }
    this.authUser();
  }
  authUser(){
    this.formdataService.addUser(this.signUpForm.value).subscribe(
      (response) => {
        // console.log('Form data saved:', response);
        this.messageservice.add({
          severity: 'success',
          summary: 'success',
          detail: 'User registered successfully!',
          life: 3000,
        });
        this.router.navigate(['/auth/signin']);
      },
      (error) => {
        console.error('Error saving form data:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const salt = bcrypt.genSaltSync(10);
      this.signUpForm.value.password = bcrypt.hashSync(
        this.signUpForm.value.password,
        salt
      );

      delete this.signUpForm.value.rePassword;

      this.verifyOtp();

    }
  }
}
