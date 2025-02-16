import { FormDataService } from './../services/form-data.service';
import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { WhatsAppMessageService } from '../services/whats-app-message.service';
@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    ButtonModule,
    DialogModule,
    Toast,
    ToastModule,
    CardModule,
    AvatarModule,
    OverlayBadgeModule,
    NgIf,
    NgFor,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [MessageService],
})
export class HomeComponent implements OnInit {
  alldata: any[] = [];
  Length!: any;

  selectedPrice: number | null = null;
  visible: boolean = false;
  visible1: boolean = false;
  price_change_visible: boolean = false;
  viewcnt!: number;
  message!: any;
  select!: any;
  cnt!: any;
  isAdmin: boolean = false;
  userId!: any;
  changeprice!: any;
  user_email: any;
  check_register!: any;
  user_pro!: any;
  images: any[] = [];
  isNameVisible: boolean[] = [];

  constructor(
    private formDataService:FormDataService,
    private messageService: MessageService,
    private router: Router,
    private wh_message: WhatsAppMessageService
  ) {}

  ngOnInit(): void {
    this.formDataService.getFormData().subscribe((data) => {
      this.alldata = data;
      this.Length = this.alldata.length;
      this.alldata = data.slice(-5);
    });

    this.formDataService.getUsers().subscribe((data) => {
      this.userId = localStorage.getItem('isLoggedIn');
      const findUser = data.find((data) => {
        return data.id == this.userId;
      });

      this.user_email = findUser.email;
      this.isAdmin = findUser.isAdmin;
      this.viewcnt = findUser.viewProfile;
      this.select = findUser.isvisible;
      this.user_pro = findUser.subscription;
   

      if (this.select) {
        this.formDataService.cnt.next(1);
      }

      this.formDataService.cnt$.subscribe((res) => {
        this.cnt = res;
      });
    });

    this.formDataService.getFormData().subscribe((data) => {
      this.check_register = data.find((item) => item.email == this.user_email);
    });

  
    this.checkActiveSession();
  }

  checkActiveSession() {
    const storedSessionId = localStorage.getItem('sessionId');
    if (storedSessionId) {
      this.formDataService.getUsers().subscribe((users) => {
        const user = users.find((u) => u.sessionId === storedSessionId);
        if (!user) {
          localStorage.clear();
          this.messageService.add({
            severity: 'warn',
            summary: 'Warn',
            detail: 'You have been logged in another device.',
            life: 3000,
          });

          alert('You have been logged in another device.');
          this.formDataService.isLoggin.next(false);
          this.formDataService.isAdmin.next(false);
          this.router.navigate(['/home']);
          this.ngOnInit();
        }
      });
    }
  }

 
  showName(index: number): void {
    this.isNameVisible[index] = true;
  }

  hideName(index: number): void {
    this.isNameVisible[index] = false;
  }

  read() {
    this.formDataService.select.next(false);
    this.visible1 = false;
    this.formDataService.cnt.next(0);
    this.formDataService.setUserVisible(this.userId, false).subscribe(() => {});
  }

  showMeassage() {
    if (this.cnt > 0) {
      this.visible1 = true;
    }
  }

  onSubscription() {
    this.router.navigate(['/offer']);
  }

  onmessage() {
    const toPhoneNumber = '+919925841925';
    const contentVariables = { '1': 'hiiii' };

    this.wh_message.sendMessage(toPhoneNumber, contentVariables).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'Message sent successfully:',
          life: 3000,
        });

        console.log('Message sent successfully:', response);
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error sending message:',
          life: 3000,
        });

        console.error('Error sending message:', error);
      }
    );
  }
}
