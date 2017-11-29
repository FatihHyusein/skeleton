import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedDashboardRoutingModule } from './logged-dashboard-routing.module';
import { LoggedDashboardComponent } from './logged-dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        LoggedDashboardRoutingModule
    ],
    declarations: [LoggedDashboardComponent]
})
export class LoggedDashboardModule {
}
