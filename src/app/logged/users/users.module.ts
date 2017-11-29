import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule
    ],
    declarations: [UsersComponent, UserDetailsComponent]
})
export class UsersModule {
}
