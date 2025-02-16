import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../services/form-data.service';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { SubscriptionHighlightsDirective } from '../Directive/subscription-highlights.directive';
import { IgxButtonModule, IgxDropDownModule, IgxGridModule, IgxToggleModule } from 'igniteui-angular';

@Component({
  selector: 'app-show-data',
  imports: [
    IgxDropDownModule,
    IgxToggleModule,
    TableModule,
    CommonModule,
    ButtonModule,
    IgxGridModule,
    IgxButtonModule,
    SubscriptionHighlightsDirective
  ],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.css',
  providers:[DatePipe]
})
export class ShowDataComponent implements OnInit {
  formData: any[] = [];
  userData: any[] = [];
  replicaData : any[]=[];
  userId!: any;
  cnt: number = 0;
  isAdmin: boolean = false;
  localUserId!: any;
  localUserEmail!: any;
  public items: { field: string }[] = [
    { field: '0-1' },
    { field: '1-3' },
    { field: '3-5' },
    { field: '5+' }
];
public employmentStatus: any[] = [
  { field: 'Select', value: 'null' },
  { field: 'Employed', value: 'true' },
  { field: 'Unemployed', value: 'false' },
];

  constructor(
    private formDataService: FormDataService,
    private router: Router,
    private date:DatePipe,

  ) {}
  birthdate(d:any){
    return this.date.transform(d,'dd-MM-yyyy')
  }
  ngOnInit(): void {
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
      this.replicaData = data;
      if (!this.isAdmin) {
        const UserfindByEmail = data.find((result) => {
          return this.localUserEmail == result.email;
        });
        this.formData.push(UserfindByEmail);
      } else {
        this.formData = data;
      }
    });
  }
  refreshdata(){
    this.formData=this.replicaData
  }

  filter(range: string) {
    this.formData=this.replicaData
    const filteredData = this.formData.filter((item) => {

      switch (range) {
        case "0-1":
          return item.experience === "0-1";
        case "1-3":
          return item.experience === "1-3";
        case "3-5":
          return item.experience === "3-5";
        case "5+":
          return item.experience === "5+";
        default:
          return this.replicaData; 
      }
    });
  
    this.formData = filteredData; 
   
  }

  filterEmp(data:any){
    this.formData=this.replicaData
    const filteredData = this.formData.filter((item) => {

      switch (data) {
        case "false":
          return item.employmentStatus.toString() == "false";
        case "true":
          return item.employmentStatus.toString() == "true";
        default:
          return this.replicaData; 
      }
    });
  
    this.formData = filteredData; 

  }


  editData(data: any) {
    this.formDataService.sendData(data);
    this.router.navigate(['/showdata/editdata']);
  }

  deleteData(userId: any) {
    console.log("🚀 ~ ShowDataComponent ~ deleteData ~ userId:", userId)
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

  viewdata(data: any) {

    console.log(this.userData);
    const viewData = this.userData.find((val) => {
      return data.email == val.email;
    });
    if (viewData) {
      const newdata = viewData;
      newdata.viewProfile = newdata.viewProfile + 1;

      this.formDataService
        .setUser(viewData.id, newdata.viewProfile)
        .subscribe(() => {});

      data = JSON.stringify(data);
      this.router.navigate(['/resumeLayout'], { queryParams: { user: data } });
    } else {
      data = JSON.stringify(data);
      this.router.navigate(['/resumeLayout'], { queryParams: { user: data } });
    }
  }
}
