import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                children: [
                    {
                        path: 'guest',
                        loadChildren: 'app/guest/guest.module#GuestModule'
                    },
                    {
                        path: 'logged',
                        loadChildren: 'app/logged/logged.module#LoggedModule'
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
