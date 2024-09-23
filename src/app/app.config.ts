import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './token.interceptor';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effect';
import { userReducer } from './user-store/user.reducer';
import { UserEffects } from './user-store/user.effects';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    provideEffects(AuthEffects),
    provideEffects(UserEffects),
    provideStore(),
    provideState({ name: 'auth', reducer: authReducer }),
    provideState({ name: 'users', reducer: userReducer })
  ]
};
