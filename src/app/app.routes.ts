import { Routes } from '@angular/router';
import { LoginFromComponent } from '../login-from/login-from.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';

export const routes: Routes = [
    // {path:'', component:LoginFromComponent},

    {
        path: 'login', loadComponent: () =>
            import('../login-from/login-from.component').then((m) => m.LoginFromComponent)
    },
    {
        path: 'register', loadComponent: () =>
            import('../user-registration/user-registration.component').then((m) => m.UserRegistrationComponent)
    },
    {
        path: 'users', loadComponent: () =>
            import('../app/user-list/user-list.component').then((m) => m.UserListComponent)
    }



];
