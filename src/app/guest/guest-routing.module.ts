import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { GuestComponent } from './guest.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { GuestDashboardComponent } from './guest-dashboard/guest-dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: GuestComponent,
                children: [
                    <Route>{ path: '', component: GuestDashboardComponent },
                    <Route>{ path: 'login', component: LoginComponent },
                    <Route>{ path: 'register', component: RegisterComponent },
                    <Route>{ path: 'forgotten-password', component: ForgotPasswordComponent },
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class GuestRoutingModule {
}
