import { FormDataService } from './../services/form-data.service';
import { Component, inject, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { BadgeModule } from 'primeng/badge';
import { GraphicalComponent } from '../graphical/graphical.component';
import { ShowDataComponent } from '../show-data/show-data.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BadgeModule,
    ButtonModule,
    DialogModule,
    ToastModule,
    CardModule,
    AvatarModule,
    OverlayBadgeModule,
    GraphicalComponent,
    ShowDataComponent,
    NgIf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [MessageService],
})
export class DashboardComponent implements OnInit {
  public messageservice = inject(MessageService);

  addSubscriptionForm!: FormGroup;
  displayDialog: boolean = false;
  alldata: any[] = [];
  Length!: any;
  userId!: any;

  constructor(
    private formDataService: FormDataService,
    private fb: FormBuilder,
  ) {
    // Initialize the form group with validators
    this.addSubscriptionForm = this.fb.group({
      heading: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  // Function to close the dialog
  closeDialog() {
    this.displayDialog = false;
  }

  // ngOnInit: Lifecycle hook to fetch data when component initializes
  ngOnInit() {
    this.formDataService.getFormData().subscribe((data) => {
      this.alldata = data;
      this.Length = this.alldata.length;
    });
  }

  // Function to show the subscription form dialog
  addSubscription() {
    this.displayDialog = true;
  }

  // Function to handle form submission
  onSubmit() {
    if (this.addSubscriptionForm.valid) {
      const formdata = this.addSubscriptionForm.value;
      this.formDataService.saveSubscription(formdata).subscribe((res) => {
        // Display success message and reset form
        console.log('Form data saved:', res);
        this.messageservice.add({
          severity: 'success',
          summary: 'success',
          detail: 'Subscription added successfully!',
          life: 3000,
        });
        alert('Subscription added successfully!');
        this.closeDialog();
        this.addSubscriptionForm.reset();
      }, (error) => {
        // Handle error during form data submission
        console.error('Error saving form data:', error);
      });
    } else {
      // Display error message if form is invalid
      this.messageservice.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill all fields correctly.',
        life: 3000,
      });
      // alert('Please fill all fields correctly.');
    }
  }
}
