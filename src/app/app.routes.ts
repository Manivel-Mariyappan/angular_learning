import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'environment',
        loadComponent: () => import('./environment-setup/environment-setup.component').then((component) => component.EnvironmentSetupComponent),
    }
];
