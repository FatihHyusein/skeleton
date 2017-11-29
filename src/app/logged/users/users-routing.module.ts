import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: UsersComponent },
            { path: ':userId', component: UserDetailsComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule {
}
