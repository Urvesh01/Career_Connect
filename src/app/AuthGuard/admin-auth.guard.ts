import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FormDataService } from '../services/form-data.service';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';



export const adminAuthGuard: CanActivateFn = (route, state):Observable<boolean> => {

  const router = inject(Router);
  const formDataService = inject(FormDataService);

  const isLoggedIn = localStorage.getItem("isLoggedIn");

return formDataService.getUsers().pipe(
    map((users) => {
      const userExists = users.find((user) => user.id === isLoggedIn);
      if (userExists && userExists.isAdmin) {
    
        return true;
      } else {
        alert('Access Denied! Only Admin access.');
        router.navigate(['/home'], {
          queryParams: { returnUrl: state.url }
        });
        return false;
      }
    }),
    
  );

};
