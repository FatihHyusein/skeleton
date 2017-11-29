import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoggedDashboardComponent } from './logged-dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: LoggedDashboardComponent,
                children: []
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class LoggedDashboardRoutingModule {
}
