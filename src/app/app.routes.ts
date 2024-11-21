import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'environment',
        loadComponent: () => import('./environment-setup/environment-setup.component').then((component) => component.EnvironmentSetupComponent),
    },
    {
        path: '',
        loadComponent: () => import('./layout/layout.component').then((c) => c.LayoutComponent),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent)
            },
            {
                path: 'component',
                title: 'Component',
                loadComponent: () => import('./learning-component/learning-component.component').then(c => c.LearningComponentComponent)
            },
            {
                path: 'router',
                title: 'Router',
                loadComponent: () => import('./router-learning/router-learning.component').then(c => c.RouterLearningComponent)
            },
            {
                path: 'forms-learning',
                title: 'FOrm Learning',
                loadComponent: () => import('./form-learning/form-learning.component').then(c => c.FormLearningComponent),
                children: [
                    {
                        path: 'reactive-form',
                        title: 'Reactivce Form',
                        loadComponent: () => import('./form-learning/reactive-form/reactive-form.component').then(c => c.ReactiveFormComponent)
                    },
                    {
                        path: 'template-driven-form',
                        title: 'Template Driven',
                        loadComponent: () => import('./form-learning/template-driven-form/template-driven-form.component').then(c => c.TemplateDrivenFormComponent)
                    },
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'reactive-form'
                    }
                ]
            },
            {
                path: 'api-call-learning',
                loadComponent: () => import('./api-call-learning/api-call-learning.component').then(c => c.ApiCallLearningComponent)
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard',
            },
        ]
    }

];
