import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
import { ShowDataComponent } from '../show-data/show-data.component';
import { InputNumber } from 'primeng/inputnumber';
import { HttpClient } from '@angular/common/http';
import { ToastModule}from 'primeng/toast'
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-form',
  imports: [ ReactiveFormsModule,
    ToastModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgFor,
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
    NgIf

  ],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css',
  providers:[ShowDataComponent,MessageService]
})
export class EditFormComponent {
  public messageservice = inject(MessageService)
  editform!: FormGroup;
  selectedUser: any;
  users: any[] = [];
  experienceOptions: any[] = [
    { label: 'Less than 1 year', value: '0-1' },
    { label: '1-3 years', value: '1-3' },
    { label: '3-5 years', value: '3-5' },
    { label: 'More than 5 years', value: '5+' },
  ];
editdata: any;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private router :Router,
    private http: HttpClient
     ) {}

  ngOnInit(): void {
    this.editform = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      mobileNumbers: this.fb.array(
        [this.fb.control('', Validators.required)],
        Validators.required
      ),
      skills: [[],Validators.required],
      experience: ['', Validators.required],
      hobbies: [[],Validators.required],
      employmentStatus: [[false],Validators.required],
      expected_salary:['',Validators.required],
      image: [null,[Validators.required]],
    });

    this.formDataService.selectuser$.subscribe((data)=>
    {
     this.editform.patchValue({...data,dateOfBirth:new Date(data.dateOfBirth)});
    }
  );
  
  
}

  get mobileNumbers() {
    return this.editform.get('mobileNumbers') as FormArray;
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

          this.editform.patchValue({ image: response.secure_url });
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
    if (this.editform.valid) {
      this.formDataService.updateFormData(this.editform.value).subscribe(
        (response) => {
          this.messageservice.add({ severity: 'success', summary: 'success', detail: 'User updated successfully', life: 3000 });

          console.log('User updated successfully', response);
          this.ngOnInit();

        },
        (error) => {
          console.error('Error updating user', error);
        }
      );
      this.router.navigate(['/userdata'])
    }
  }
}
