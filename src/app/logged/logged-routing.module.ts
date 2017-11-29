import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoggedComponent } from './logged.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: LoggedComponent,
                children: [
                    {
                        path: '',
                        loadChildren: 'app/logged/logged-dashboard/logged-dashboard.module#LoggedDashboardModule',
                    },
                    {
                        path: 'users',
                        loadChildren: 'app/logged/users/users.module#UsersModule',
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class LoggedRoutingModule {
}
