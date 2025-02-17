import { routes } from './../app.routes';
import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
import { Router, RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FileUpload } from 'primeng/fileupload';
import { FloatLabel } from 'primeng/floatlabel';
import { InputNumber } from 'primeng/inputnumber';
import { AutoCapitalizeDirective } from '../Directive/auto-capitalize.directive';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-register',
  imports: [
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgIf,
    NgFor,
    AutoCapitalizeDirective,
    DatePickerModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    CheckboxModule,
    ButtonModule,
    ToggleButtonModule,
    FileUpload,
    FloatLabel,
    InputNumber,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [MessageService],
})
export class RegisterComponent {
  public messageservice = inject(MessageService);

  maxDate: Date;
  registerForm!: FormGroup;
  experienceOptions: any[] = [
    { label: 'Less than 1 year', value: '0-1' },
    { label: '1-3 years', value: '1-3' },
    { label: '3-5 years', value: '3-5' },
    { label: 'More than 5 years', value: '5+' },
  ];

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private router: Router,
    private http: HttpClient
  ) {
    const today = new Date();
    this.maxDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(4),
          
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      mobileNumbers: this.fb.array([
        this.fb.control('', [Validators.required, Validators.maxLength(10)]),
      ]),
      skills: [[], [Validators.required]],
      experience: ['', [Validators.required]],
      hobbies: [[], [Validators.required]],
      employmentStatus: ['', [Validators.required]],
      expected_salary: ['', [Validators.required]],
      image: [null, [Validators.required]],
    });
  }
  get mobileNumbers() {
    return this.registerForm.get('mobileNumbers') as FormArray;
  }

  addMobileNumber() {
    this.mobileNumbers.push(this.fb.control(''));
  }
  removeMobileNumber(index: number) {
    if (this.mobileNumbers.length > 1) {
      this.mobileNumbers.removeAt(index);
    } else {
      this.mobileNumbers.at(index).setErrors({ required: true });
    }
  }
  onImageUpload(event: any) {
    const file = event.files[0];
    if (file) {
      this.formDataService.uploadImage(file).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);

          this.registerForm.patchValue({ image: response.secure_url });
          this.messageservice.add({
            severity: 'success',
            summary: 'success',
            detail: 'Image uploaded successfully:',
            life: 3000,
          });
        },
        (error) => {
          console.error('Error uploading image:', error);
          this.messageservice.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to upload image. Please try again.',
            life: 3000,
          });
        }
      );
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      // Check if the user is already registered
      this.formDataService.getFormData().subscribe(
        (existingData) => {
          const isEmailRegistered = existingData.some(
            (user) => user.email === formData.email
          );

          if (isEmailRegistered) {
            alert('User with this email is already registered.');
          } else {
            this.formDataService.saveFormData(formData).subscribe(
              (response) => {
                console.log('Form data saved:', response);
                this.messageservice.add({
                  severity: 'success',
                  summary: 'success',
                  detail: 'Registration successful!',
                  life: 3000,
                });
                alert('Registration successful!');
                this.registerForm.reset();
                this.router.navigate(['/home']);
              },
              (error) => {
                console.error('Error saving form data:', error);
              }
            );
          }
        },
        (error) => {
          console.error('Error fetching existing data:', error);
        }
      );
    } else {
      console.log('Form is invalid');
      alert('Please fill out all required fields.');
    }
  }
}
