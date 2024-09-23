// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFromComponent } from '../login-from/login-from.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';

import { Observable, reduce } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';

import { CommonModule } from '@angular/common';
// import { selectProducts } from './store/selector';
// import { AppState } from './store/state';
// import { StoreModuleWrapper } from './store/store.module';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule, // Add CommonModule here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed `styleUrl` to `styleUrls`
})
export class AppComponent {
 // Observable for state
//  products$: Observable<string[]>;

  constructor() {
    // this.products$ = this.store.select(selectProducts);
  }


  title = 'authentication';
  
  }

