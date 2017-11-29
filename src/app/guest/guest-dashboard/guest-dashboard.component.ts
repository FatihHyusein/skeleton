import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentBase } from '../../shared/common/app-component-base';

@Component({
    templateUrl: './guest-dashboard.component.html'
})
export class GuestDashboardComponent extends AppComponentBase {
    constructor(injector: Injector,
                private _router: Router) {
        super(injector);
    }

    login(): void {
    }
}
