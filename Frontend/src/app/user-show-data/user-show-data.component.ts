import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../services/form-data.service';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SubscriptionHighlightsDirective } from '../Directive/subscription-highlights.directive';
import { IgxButtonModule,  IgxGridModule, IgxToggleModule } from 'igniteui-angular';

@Component({
  selector: 'app-user-show-data',
  imports: [
      SubscriptionHighlightsDirective,
        TableModule,
        CommonModule,
        ButtonModule,
        IgxGridModule,
        IgxButtonModule
        
  ],
  templateUrl: './user-show-data.component.html',
  styleUrl: './user-show-data.component.css',
})
export class UserShowDataComponent implements OnInit {
  formData: any[] = [];
  userData: any[] = [];
  userId!: any;
  localUserId!: any;
  localUserEmail!: any;
  isAdmin: boolean = false;

  constructor(
    private formDataService: FormDataService,
    private router: Router,
  ) {}
  ngOnInit(){
    this.formDataService.getUsers().subscribe((data) => {
      this.userData = data;

      const userId = localStorage.getItem('isLoggedIn');
      this.localUserId = userId;
      this.userData.find((result) => {
        if (result.id === userId) {
          this.localUserEmail = result.email;
          return (this.isAdmin = result.isAdmin);
        }
      });
      console.log(this.userData);
    });

    this.formDataService.getFormData().subscribe((data) => {
      if (!this.isAdmin) {
        const UserfindByEmail = data.find((result) => {
          return this.localUserEmail == result.email;
        });
        if(!UserfindByEmail){
          alert('First do Register')
        }
        this.formData.push(UserfindByEmail);
      } else {
        this.formData = data;
      }
    });
  }
  

  editData(data: any) {
    this.formDataService.sendData(data);
    this.router.navigate(['/showdata/editdata']);
  }

  deleteData(userId: any) {
    console.log('🚀 ~ ShowDataComponent ~ deleteData ~ userId:', userId);
    this.formDataService.deleteFormData(userId).subscribe(
      (response) => {
        console.log('User deleted successfully', response);
        this.ngOnInit();
      },
      (error) => {
        console.error('Error deleting user', error);
      }
    );
  }
}
