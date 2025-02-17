import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormDataService } from '../services/form-data.service';
@Component({
  selector: 'app-authentication',
  imports: [ButtonModule, RouterModule, ToastModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
  providers: [MessageService],
})
export class AuthenticationComponent {
  
  // Injecting MessageService for displaying toast messages
  public messageservice = inject(MessageService);

  isLogin!: any;
  constructor(
    private router: Router,
    private formDataService: FormDataService
  ) {}

  // Method to handle login logic
  onLogin(): void {
    this.isLogin = localStorage.getItem('isLoggedIn');
    if (this.isLogin) {
      // Show a success message if the user is already logged in
      this.messageservice.add({
        severity: 'success',
        summary: 'success',
        detail: 'You have already login.',
        life: 3000,
      });
      // alert('You have already login.');
    } else {

      // Navigate to the login page if the user is not logged in
      this.router.navigate(['/auth/signin']);
    }
  }

  // Method to handle logout logic
  onLogout(): void {
    const userId = localStorage.getItem('isLoggedIn');
    if (userId) {
      this.formDataService
        .updateUserLoginStatus(userId, false, false, null)
        .subscribe(() => {
          // Clear user session data
          localStorage.clear();

          // Show a success message upon logout
          this.messageservice.add({
            severity: 'success',
            summary: 'success',
            detail: 'You have been logged out.',
            life: 3000,
          });
          alert('You have been logged out.');

          // Update application state to reflect logout
          this.formDataService.isLoggin.next(false);
          this.formDataService.isAdmin.next(false);

          // Redirect to the home page
          this.router.navigate(['/']);
        });
    }
  }
}
