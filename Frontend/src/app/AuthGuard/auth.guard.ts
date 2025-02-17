import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FormDataService } from '../services/form-data.service';
import { map } from 'rxjs';

/**
 * Auth Guard function to protect routes by checking user authentication.
 * It prevents unauthorized access by verifying if the user is logged in.
 */

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  const formDataService = inject(FormDataService);

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return formDataService.getUsers().pipe(
    map(users => {
      const userExists = users.some(user => user.id === isLoggedIn);
      if (userExists) {
        return true;
      } else {
        alert('Access Denied! Please log in first.');
        router.navigate(['/auth/signin'], {
          queryParams: { returnUrl: state.url }
        });
        return false;
      }
    })
  );
};
