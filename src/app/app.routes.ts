import { Routes } from '@angular/router';
import { authGuardGuard } from './auth-guard.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component').then(c => c.LoginComponent)
    },
    {
        path: 'unauthorized',
        loadComponent: () => import('./shared/components/un-authorized/un-authorized.component').then(c => c.UnAuthorizedComponent)
    },
    {
        path: 'environment',
        loadComponent: () => import('./environment-setup/environment-setup.component').then((component) => component.EnvironmentSetupComponent),
    },
    {
        path: '',
        loadComponent: () => import('./layout/layout.component').then((c) => c.LayoutComponent),
        canActivate: [authGuardGuard],
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
                canActivate: [authGuardGuard]
            },
            {
                path: 'component',
                title: 'Component',
                loadComponent: () => import('./learning-component/learning-component.component').then(c => c.LearningComponentComponent),
                canActivate: [authGuardGuard]
            },
            {
                path: 'router',
                title: 'Router',
                loadComponent: () => import('./router-learning/router-learning.component').then(c => c.RouterLearningComponent),
                canActivate: [authGuardGuard]
            },
            {
                path: 'forms-learning',
                title: 'FOrm Learning',
                loadComponent: () => import('./forms/components/form-learning/form-learning.component').then(c => c.FormLearningComponent),
                canActivate: [authGuardGuard],
                children: [
                    {
                        path: 'simple-reactive-form',
                        title: 'Simple Reactive Form',
                        loadComponent: () => import('./forms/components/simple-reactive-form/simple-reactive-form.component').then(c => c.SimpleReactiveFormComponent)
                    },
                    {
                        path: 'reactive-form',
                        title: 'Reactivce Form',
                        loadComponent: () => import('./forms/components/reactive-form/reactive-form.component').then(c => c.ReactiveFormComponent)
                    },
                    {
                        path: 'reactive-formbuilder',
                        title: 'Form Builder',
                        loadComponent: () => import('./forms/components/formbuilder/formbuilder.component').then(c => c.FormbuilderComponent),
                    },
                    {
                        path: 'template-driven-form',
                        title: 'Template Driven',
                        loadComponent: () => import('./forms/components/template-driven-form/template-driven-form.component').then(c => c.TemplateDrivenFormComponent)
                    },
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'simple-reactive-form'
                    }
                ]
            },
            {
                path: 'api-call-learning',
                loadComponent: () => import('./api-call-learning/components/photos/photos.component').then(c => c.PhotosComponent),
                canActivate: [authGuardGuard]
            },
            {
                path: '**',
                loadComponent: () => import('./shared/components/not-found/not-found.component').then(c => c.NotFoundComponent),
                canActivate: [authGuardGuard]
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard',
            },
        ]
    },
];
