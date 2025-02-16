import { UserFilterComponent } from './../user-filter/user-filter.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FormDataService } from '../services/form-data.service';

import { SubscriptionHighlightsDirective } from '../Directive/subscription-highlights.directive';
@Component({
  selector: 'app-analysis',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    DatePickerModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    CheckboxModule,
    ButtonModule,
    ToggleButtonModule,
    UserFilterComponent,
    TableModule,
    SubscriptionHighlightsDirective,
  ],
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.css',
})
export class AnalysisComponent implements OnInit {
  analysisForm!: FormGroup;
  number_of_user!: number;
  check!: boolean;
  formdata!: any;
  selectedStatus: boolean | null = null;
  users: any[] = [];
  experienceData: any = 'null';

  sortOptions: any[] = [
    { label: 'Select', value: 'null' },
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' },
  ];
  employmentStatus: any[] = [
    { label: 'Select', value: 'null' },
    { label: 'Employed', value: 'true' },
    { label: 'Unemployed', value: 'false' },
  ];

  experienceOptions: any[] = [
    { label: 'Select', value: 'null' },
    { label: 'Less than 1 year', value: '0-1' },
    { label: '1-3 years', value: '1-3' },
    { label: '3-5 years', value: '3-5' },
    { label: 'More than 5 years', value: '5+' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formDataService: FormDataService
  ) {}

  ngOnInit(): void {
    this.analysisForm = this.fb.group({
      employmentStatusvalue: ['null'],
      sortOrder: ['asc'],
    });
  }

  // Method to handle sorting change event
  onSortChange(event: any) {
    this.formDataService.selectedSortOrder.next(event.value);
    this.router.navigate(['/salary-analys']);
  }

  // Method to handle search event
  onSearch() {
    this.check = true;
    this.selectedStatus = this.analysisForm.value.employmentStatusvalue;
  }

  // Method to update the user list based on filtered results
  onFilteredUsers(filteredUsers: any[]) {
    this.users = filteredUsers;
    this.number_of_user = this.users.length;
  }

  // Method to handle form submission
  onSubmit() {
    this.router.navigate(['/experience_filter'], {
      queryParams: { experience: this.experienceData },
    });
  }

  // Method to navigate to graphical analysis
  viewgraph() {
    this.router.navigate(['/Analysis/graphical']);
  }
}
