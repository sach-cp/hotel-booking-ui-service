import { Routes } from '@angular/router';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        title: 'Login',
        component: Login
    },
    { path: '**', redirectTo: 'login' }
];
