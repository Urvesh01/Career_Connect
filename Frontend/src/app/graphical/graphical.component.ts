import { NgIf } from '@angular/common';
import { FormDataService } from '../services/form-data.service';
import { Component, OnInit } from '@angular/core';
import {
  ChangeDetectorRef,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import * as _ from 'underscore';
@Component({
  selector: 'app-graphical',
  imports: [ChartModule,NgIf],
  templateUrl: './graphical.component.html',
  styleUrl: './graphical.component.css'
})
export class GraphicalComponent implements OnInit{
  users: any[] = [];
    data: any;
    genderdata:any;
    skillsdata:any;
    employmentStatusdata:any;
    options: any;
    genderoption:any;
    skillsoption:any;
    employmentStatusoption:any;

    platformId = inject(PLATFORM_ID);
    cd = inject(ChangeDetectorRef);
constructor(private formDataService:FormDataService){}
  ngOnInit(): void {
      this.fetchdata();
  }
  fetchdata(){
    this.formDataService.getFormData().subscribe((data)=>{
      this.users = data;

      this.processExperienceData();
    })
  }

  datasets(){
    
  }

  processExperienceData(){
     const experienceCounts = _.countBy(this.users, 'experience');
        const labels = Object.keys(experienceCounts);
        const data = Object.values(experienceCounts);

        
        this.data = {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                '#42A5F5',
                '#66BB6A',
                '#FFA726',
                '#26C6DA',
                '#7E57C2',
              ],
              hoverBackgroundColor: [
                '#64B5F6',
                '#81C784',
                '#FFB74D',
                '#4DD0E1',
                '#B39DDB',
              ],
            },
          ],
        };
        this.options = {
          plugins: {
            legend: { labels: { usePointStyle: true, color: '#495057' } },
          },
        };


        const genderCounts = _.countBy(this.users, 'gender');
        const genderlabels = Object.keys(genderCounts);
        const genderdata = Object.values(genderCounts);

        this.genderdata = {
          labels: genderlabels,
          datasets: [
            {
              data: genderdata,
              backgroundColor: [
                '#42A5F5',
                '#66BB6A',
                '#FFA726',
                '#26C6DA',
                '#7E57C2',
              ],
              hoverBackgroundColor: [
                '#64B5F6',
                '#81C784',
                '#FFB74D',
                '#4DD0E1',
                '#B39DDB',
              ],
            },
          ],
        };
        this.genderoption = {
          plugins: {
            legend: { labels: { usePointStyle: true, color: '#495057' } },
          },
        };


        const skillsCounts = _.countBy(this.users, 'skills');
        const skillslabels = Object.keys(skillsCounts);
        const skillsdata = Object.values(skillsCounts);

        this.skillsdata = {
          labels: skillslabels,
          datasets: [
            {
              data: skillsdata,
              backgroundColor: [
                '#42A5F5',
                '#66BB6A',
                '#FFA726',
                '#26C6DA',
                '#7E57C2',
              ],
              hoverBackgroundColor: [
                '#64B5F6',
                '#81C784',
                '#FFB74D',
                '#4DD0E1',
                '#B39DDB',
              ],
            },
          ],
        };
        this.skillsoption = {
          plugins: {
            legend: { labels: { usePointStyle: true, color: '#495057' } },
          },
        };



        const employmentStatus = _.countBy(this.users, 'employmentStatus');

        const employmentStatuslabels = ['Employee', 'Unemployee']
        const employmentStatusdata = Object.values(employmentStatus);

        this.employmentStatusdata = {
          labels: employmentStatuslabels,
          datasets: [
            {
              data: employmentStatusdata,
              backgroundColor: [
                '#42A5F5',
                '#66BB6A',
                '#FFA726',
                '#26C6DA',
                '#7E57C2',
              ],
              hoverBackgroundColor: [
                '#64B5F6',
                '#81C784',
                '#FFB74D',
                '#4DD0E1',
                '#B39DDB',
              ],
            },
          ],
        };
        this.employmentStatusoption = {
          plugins: {
            legend: { labels: { usePointStyle: true, color: '#495057' } },
          },
        };

        this.cd.detectChanges();
  }

}
