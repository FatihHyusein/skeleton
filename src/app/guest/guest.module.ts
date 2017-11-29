import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest.component';
import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { GuestDashboardComponent } from './guest-dashboard/guest-dashboard.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        GuestRoutingModule,
        SharedModule
    ],
    declarations: [GuestComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent, GuestDashboardComponent]
})
export class GuestModule {
}
