import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { FormDataService } from '../services/form-data.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionHighlightsDirective } from '../Directive/subscription-highlights.directive';


@Component({
  selector: 'app-user-find',
  imports: [TableModule, CommonModule,SubscriptionHighlightsDirective],
  templateUrl: './user-find.component.html',
  styleUrls: ['./user-find.component.css'],
})
export class UserFindComponent implements OnInit {

  constructor(
    private formDataService: FormDataService,
    private route: ActivatedRoute,

  ) {}

  experienceData: any;
  users: any[] = [];
  filteredUsers: any[] = [];
  flag: boolean = false;
  number_of_user!: number;
  currUrl!: string;
  show!: boolean;

  ngOnInit(): void {
 
 
    this.route.queryParams.subscribe((params) => {
      this.experienceData = params['experience'];
  
    });


    this.fetchData();
  }

  fetchData() {
    this.formDataService.getFormData().subscribe((data) => {
      this.users = data;
      if (this.experienceData && this.users.length > 0) {
        this.filteredUsers = _.filter(this.users, (user) => {
          return user.experience === this.experienceData;
        });
        this.number_of_user = this.filteredUsers.length;
        this.flag = true;
      }

    });
  }

 
}
