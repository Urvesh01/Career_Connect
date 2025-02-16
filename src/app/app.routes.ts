import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './AuthGuard/auth.guard';
import { AnalysisComponent } from './analysis/analysis.component';
import { SalaryAnalysComponent } from './salary-analys/salary-analys.component';
import { HiringComponent } from './hiring/hiring.component';
import { DisplayComponent } from './display/display.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserShowDataComponent } from './user-show-data/user-show-data.component';
import { OfferdataComponent } from './offerdata/offerdata.component';
import { adminAuthGuard } from './AuthGuard/admin-auth.guard';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'CareerConnect',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component:HomeComponent,
    title: 'homepage',
  },
  {
    path: 'dashboard',
    component:DashboardComponent,
    title: 'dashboard',
    canActivate: [authGuard,adminAuthGuard]
  },
  {
    path: 'offer',
    component:OfferdataComponent,
    title: 'Subscription',
  },
  {
    path: 'CareerConnect',
    component:DisplayComponent,
    title: 'CareerConnect'
  },
  {
    path: 'userdata',
    component:UserShowDataComponent,
    title: 'Profile',
    canActivate: [authGuard]
  },
  {
    path: 'showdata',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./show-data/show-data.component').then(
            (c) => c.ShowDataComponent
          ),
      },
      {
        path: 'editdata',
        loadComponent: () =>
          import('./edit-form/edit-form.component').then(
            (c) => c.EditFormComponent
          ),
      },
    ],
    title: 'Show-data',
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then((c) => c.RegisterComponent),
    title: 'register',
    canActivate: [authGuard],
  },

  {
    path: 'Analysis',
    
    children:[
      {
        path: '',
       component:AnalysisComponent,
      },
      {
        path: 'graphical',
        loadComponent: () =>
          import('./graphical/graphical.component').then(
            (c) => c.GraphicalComponent
          ),
      },
    ],
    title: 'AnalysisPage',
    canActivate: [authGuard,adminAuthGuard]
  },
  {
    path: 'experience_filter',
    loadComponent: () =>
      import('./user-find/user-find.component').then(
        (c) => c.UserFindComponent
      ),
    title: 'experience',
    canActivate: [authGuard,adminAuthGuard]
  },
  {
    path: 'auth',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./authentication/authentication.component').then(
            (c) => c.AuthenticationComponent
          ),
      },
        {
    path: 'signin',
    loadComponent: () =>
      import('./sign-in/sign-in.component').then((c) => c.SignInComponent),
  },
     
      {
        path: 'signup',
        loadComponent: () =>
          import('./sign-up/sign-up.component').then((c) => c.SignUpComponent),
      },
    ],
    title: 'Authentication',
  },
  {
    path: 'salary-analys',
    component:SalaryAnalysComponent,
    title: 'salary-analys',
    canActivate: [authGuard,adminAuthGuard]
  },
  {
    path: 'graphical',
    loadComponent: () =>
      import('./graphical/graphical.component').then(
        (c) => c.GraphicalComponent
      ),
    title: 'graphicalView',
    canActivate: [authGuard,adminAuthGuard]
  },
  {
    path:'resumeLayout',
    loadComponent:()=>import('./resume-layout/resume-layout.component').then((c)=>c.ResumeLayoutComponent),
    title: 'resumeLayout',
  },
  {
    path:'hiring',
   component:HiringComponent,
    title: 'HiringPage',
    canActivate: [authGuard,adminAuthGuard]
  },

  {
    path: '**',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        (c) => c.PageNotFoundComponent
      ),
    title: 'Invalids-Page',
  },
];
