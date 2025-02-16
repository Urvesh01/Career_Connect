import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../services/form-data.service';
import { Subscription } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  imports: [NgClass],
})
export class DisplayComponent implements OnInit {
  isZoomed = false;
  isWideZoomed = false;
  isAdmin!: boolean;
  private subscription!: Subscription;

  constructor(
    private router: Router,
    private formDataService: FormDataService
  ) {}

  ngOnInit(): void {
    // Subscribe to isAdmin observable
    this.subscription = this.formDataService.isAdmin.subscribe(
      (isAdmin) => (this.isAdmin = isAdmin)
    );

    // Apply zoom effects
    setTimeout(() => (this.isZoomed = true), 100);
    setTimeout(() => (this.isWideZoomed = true), 1500);

    // Redirect after animation
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
