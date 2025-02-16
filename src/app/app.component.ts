import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { PrimeNG } from 'primeng/config';
import { IgxGridModule } from 'igniteui-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {CloudinaryModule} from '@cloudinary/ng';
import { ToastModule}from 'primeng/toast'
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-root',
  imports: [ToastModule,CloudinaryModule,NgMultiSelectDropDownModule,IgxGridModule,RouterModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[MessageService]
})
export class AppComponent {
    public messageservice = inject(MessageService)
  constructor(private primeng: PrimeNG) {}


  ngOnInit() {

//dc4aobtkq
//https://api.cloudinary.com/v1_1/${cloudName}/upload
//CLOUDINARY_URL=cloudinary://793778538137394:Q8a14hevRqVS4N6_2pzaGBHAS6w@dc4aobtkq

    this.primeng.ripple.set(true);
     this.primeng.zIndex = {
       modal: 1100, 
       overlay: 1000, 
       menu: 1000, 
       tooltip: 1100,
     };
  }

}
