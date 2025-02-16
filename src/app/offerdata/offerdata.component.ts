import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { FormDataService } from '../services/form-data.service';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { Ripple } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offerdata',
  imports: [
    FormsModule,
    ButtonModule,
    DialogModule,
    Toast,
    Ripple,
    ToastModule,
    CardModule,
    AvatarModule,
    OverlayBadgeModule,
    NgIf,
    NgFor,
  ],
  templateUrl: './offerdata.component.html',
  styleUrl: './offerdata.component.css',
  providers: [MessageService],
})
export class OfferdataComponent implements OnInit {
  alldata: any[] = [];
  Length!: any;
  price: any = 49.99;
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
  subscriptions: any[] = [];
  userBuySubscriptionList:any[]=[]
  selectedSubscription: any = null;
  displayDialog: boolean = false;
  confirmationDialogVisible: boolean = false;

  constructor(
    private formDataService: FormDataService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user_pro = localStorage.getItem('Subscription');

    this.formDataService.getUsers().subscribe((data) => {
      this.userId = localStorage.getItem('isLoggedIn');
      const findUser = data.find((data) => {
        return data.id == this.userId;
      });
      this.user_email = findUser.email;
      this.isAdmin = findUser.isAdmin;
      this.viewcnt = findUser.viewProfile;
      this.select = findUser.isvisible;
      this.userBuySubscriptionList=findUser.subscriptionName

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


    
    this.loadSubscriptions();
  }


  loadSubscriptions() {
    this.formDataService.getSubscription().subscribe((data) => {
      this.subscriptions = data;
    });
  }
  openDialog(subscription: any) {
    console.log('1');
    this.selectedSubscription = subscription;
    this.displayDialog = true;
  }
  closeDialog() {
    this.displayDialog = false;
    if (this.confirmationDialogVisible == false) {
      this.selectedSubscription = null;
    }
  }
  confirmBuy() {
    this.displayDialog = false;
    this.confirmationDialogVisible = true;
  }
  closeConfirmationDialog() {
    this.confirmationDialogVisible = false;
  }
  finalizePurchase() {
    console.log(this.selectedSubscription);
    this.messageService.add({
      severity: 'success',
      summary: 'Purchase Successful',
      detail: 'You have successfully subscribed',
    });
    this.call(this.selectedSubscription);
    this.confirmationDialogVisible = false;
  }

  change_price() {
    this.price_change_visible = true;
  }

  changeSuccessfull() {
    this.formDataService.changePrice(this.selectedSubscription.id,this.changeprice).subscribe(()=>{
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Sucessful update Price',
      });
      this.ngOnInit()
    })

    setTimeout(() => {
      this.price_change_visible = false;
    }, 1500);
  }

  cancle() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Chance!',
    });
    setTimeout(() => {
      this.price_change_visible = false;
    }, 1000);
  }

  showMeassage() {
    if (this.cnt > 0) {
      this.visible1 = true;
    }
  }
  showInfo() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'You Missed the Chance!',
    });
    setTimeout(() => {
      this.visible = false;
    }, 1000);
  }
  call(subscriptionData: any) {

    if (localStorage.getItem('isLoggedIn')) {
      if (this.check_register) {
  
        this.userBuySubscriptionList.push(subscriptionData.heading)
        let userId = localStorage.getItem('isLoggedIn');
        this.formDataService
          .setSubscription(userId, true,this.userBuySubscriptionList)
          .subscribe((res) => {
            console.log(res);
          });
          localStorage.setItem('Subscription','true')
        setTimeout(() => {
          this.visible = false;
        }, 1500);
        this.router.navigate(['/']);
        this.ngOnInit();
      } else {
        this.router.navigate(['register']);
      }
    } else {
      this.router.navigate(['auth/signin']);
      this.visible = false;
    }
  }
}
