import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideCloudinary ,CloudinaryConfiguration} from '@cloudinary/angular-5.x';
import { Cloudinary } from '@cloudinary/url-gen';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from "@angular/platform-browser/animations";


const cloudinaryConfig: CloudinaryConfiguration = {
	cloud_name: 'dc4aobtkq', 
	
  };
export const appConfig: ApplicationConfig = {
	providers: [
		provideCloudinary(Cloudinary, cloudinaryConfig),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		
		provideHttpClient(),
		provideAnimationsAsync(),
		providePrimeNG({
			csp: {
				nonce: '...'
			},
			translation: {
				accept: 'Aceptar',
				reject: 'Rechazar',
			},
			theme: {
				preset: Aura,
				options: {
					prefix: 'p',
					darkModeSelector: 'light',
					cssLayer: false
				}
			}
		}),
		provideAnimations()
	],
};
