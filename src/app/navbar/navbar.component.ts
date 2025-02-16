import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { FormDataService } from '../services/form-data.service';
@Component({
  selector: 'app-navbar',
  imports: [Menubar],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [AuthenticationComponent],
})
export class NavbarComponent {
  items: MenuItem[] = [];
  isLoggin!: any;
  isAdmin!: any;
  constructor(
    private formservice: FormDataService,
    public auth: AuthenticationComponent
  ) {
    if (localStorage.getItem('isLoggedIn')) {
      formservice.isLoggin.next(true);
    }

    if (localStorage.getItem('isAdmin')) {
      formservice.isAdmin.next(true);
    }
  }
  ngOnInit() {
    this.formservice.isLoggin$.subscribe((data) => {
      this.isLoggin = data;
      this.Manu();
    });

    this.formservice.isAdmin$.subscribe((data) => {
      this.isAdmin = data;
      this.Manu();
    });
  }

  Manu() {
    this.items = [
      {
        label: 'Career Connect',
        routerLink: ['/'],
        routerLinkActiveOptions: false,
      },
      // {
      //   label: 'Home',
      //   icon: 'pi pi-home',
      //   routerLink: ['/home'],
      //   routerLinkActiveOptions: true,
      //   visible: !this.isAdmin
      // },
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: ['/dashboard'],
        routerLinkActiveOptions: true,
        visible: this.isAdmin
      },
      {
        label:  'Profile',
        icon:'pi pi-user',
        routerLink: ['userdata'] ,
        routerLinkActiveOptions: true,
        visible: !this.isAdmin 

      },
      // {
      //   label: this.isAdmim ? 'Analysis' : '',
      //   icon: this.isAdmim ? 'pi pi-chart-bar' : '',
      //   routerLink: this.isAdmim ? ['/Analysis'] : '',
      //   routerLinkActiveOptions: true,
      // },
      {
        label: 'Hiring',
        icon: 'fa-solid fa-users-viewfinder',
        routerLink: ['/hiring'] ,
        routerLinkActiveOptions: true,
        visible: this.isAdmin
      },
      {
        label: 'Register',
        icon: 'pi pi-user-plus',
        routerLink: ['/register'],
        routerLinkActiveOptions: true,
        visible: !this.isAdmin
      },
      {
        label: this.isLoggin ? 'Logout' : 'Login',
        icon: this.isLoggin ? 'pi pi-power-off' : 'pi pi-lock',
        command: this.isLoggin
          ? () => this.auth.onLogout()
          : () => this.auth.onLogin(),
        routerLinkActiveOptions: true,
      },
    ];
  }
}
