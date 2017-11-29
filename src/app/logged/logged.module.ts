import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedRoutingModule } from './logged-routing.module';
import { LoggedComponent } from './logged.component';
import { LoggedDashboardModule } from './logged-dashboard/logged-dashboard.module';
import { UsersModule } from './users/users.module';

@NgModule({
    imports: [
        CommonModule,
        LoggedRoutingModule,
        LoggedDashboardModule,
        UsersModule
    ],
    declarations: [LoggedComponent]
})
export class LoggedModule {
}
