import { Component } from '@angular/core';
import { FormDataService } from '../services/form-data.service';
import { CommonModule, NgFor } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { PanelModule } from 'primeng/panel';
import { ActivatedRoute } from '@angular/router';
import { WhatsAppMessageService } from '../services/whats-app-message.service';

@Component({
  selector: 'app-resume-layout',
  imports: [
    ButtonModule,
    PanelModule,
    TagModule,
    CardModule,
    CommonModule,
    ButtonModule,
    NgFor,
  ],
  templateUrl: './resume-layout.component.html',
  styleUrl: './resume-layout.component.css',
})
export class ResumeLayoutComponent {
  User!: any;
  userNo!: any;
  constructor(
    private formDataService: FormDataService,
    private route: ActivatedRoute,
    private message: WhatsAppMessageService
  ) {}

  ngOnInit(): void {
    this.UserData();
  }
  UserData() {
    this.route.queryParams.subscribe((data) => {
      this.User = JSON.parse(data['user']);
    });
  }

  sendMessage() {
    this.userNo = this.User.mobileNumbers;
    console.log(this.userNo);
    const toPhoneNumber = `+91${this.userNo}`;
    console.log(toPhoneNumber);
    const contentVariables = { '1': '12/1','2':'3pm' };

    this.message.sendMessage(toPhoneNumber, contentVariables).subscribe(
      (response) => {
        console.log('Message sent successfully:', response);
      },
      (error) => {
        console.error('Error sending message:', error);
      }
    );
  }
}
