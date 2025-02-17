import { FormDataService } from '../services/form-data.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {
  IgxGridModule,
  IgxProgressBarModule,
  IgxButtonModule,
} from 'igniteui-angular';
import { MessageService } from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect';
interface Skill {
  label: string;
  value: string;
}

@Component({
  selector: 'app-hiring',
  imports: [
    CommonModule,
    IgxGridModule,
    IgxButtonModule,
    NgMultiSelectDropDownModule,
    MultiSelectModule,
    ToastModule,
    SelectModule,
    ButtonModule,
    InputGroupAddonModule,
    InputGroupModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    IgxProgressBarModule,
  ],
  templateUrl: './hiring.component.html',
  styleUrl: './hiring.component.css',
  providers: [MessageService]
})
export class HiringComponent implements OnInit {
  
  form!: FormGroup;
  experienceOptions!: any[];
  salaryOptions!: any[];
  hiringData!: any[];
  skillOptions!: Skill[];
  selectedSkill!: Skill[];
  users!: any[];
  matchedUser: any[] = [];
  matchingPercentage: any;
  check: boolean = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private formDataService: FormDataService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      experience: [null, [Validators.required]],
      salary: [null, [Validators.required]],
      skills: [[], [Validators.required]],
    });

    this.skillOptions = [
      { label: 'Angular', value: 'Angular' },
      { label: 'PrimeNG', value: 'PrimeNG' },
      { label: 'JavaScript', value: 'JavaScript' },
    ];

    this.experienceOptions = [
      { label: 'Less than 1 year', value: '0-1' },
      { label: '1-3 years', value: '1-3' },
      { label: '3-5 years', value: '3-5' },
      { label: 'More than 5 years', value: '5+' },
    ];
    this.salaryOptions = [
      { label: 'Less than 50k', value: '0-50000' },
      { label: '50k-100k', value: '50000-100000' },
      { label: '100k-150k', value: '100000-150000' },
      { label: 'More than 150k', value: '150000' },
    ];

    this.formDataService.getFormData().subscribe((data) => {
      this.users = data;
    });
  }

  onSubmit() {
    if (this.form.value) {
      this.match();
    }
  }

  match() {
    const [minSalary, maxSalary] = this.form.value.salary
      .split('-')
      .map(Number);
    const selectedSkills = this.form.value.skills.map(
      (skill: Skill) => skill.value
    );

    this.matchedUser = this.users.filter((user) => {
      const formSalary = Number(user.expected_salary);
      const matchingSkills = selectedSkills.filter((skill: string) =>
        user.skills.includes(skill)
      );
      user.matchingPercentage = parseFloat(
        ((matchingSkills.length / selectedSkills.length) * 100).toFixed(2)
      );
      return (
        user.experience == this.form.value.experience &&
        matchingSkills.length > 0 &&
        formSalary >= minSalary &&
        formSalary <= (maxSalary || Infinity)
      );
    });

    this.matchedUser.sort(
      (a, b) => b.matchingPercentage - a.matchingPercentage
    );

    if (this.matchedUser.length > 0) {
      this.show(
        'success',
        'Match Found',
        'A user with matching data was found.'
      );
    } else {
      console.log('Not Matched User');
    }
  }

  select(data: any) {
    console.log('--------', data);
    // const checkId = localStorage.getItem('isLoggedIn');
    this.formDataService.getUsers().subscribe((user) => {
      user.find((u) => {
        if (u.email === data) {
          this.check = u.id;
          console.log('checkkkk',this.check);
          
          if(this.check){
            this.formDataService.setUserVisible(this.check,true).subscribe(()=>{})
          }
          return true;
        } else {

          return false;
        }
      }
      );
    });
  }

  show(v1: string, v2: string, v3: string) {
    this.messageService.add({
      severity: v1,
      summary: v2,
      detail: v3,
      life: 3000,
    });
  }
}
