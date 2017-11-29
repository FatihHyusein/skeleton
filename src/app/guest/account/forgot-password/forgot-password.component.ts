import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentBase } from '../../../shared/common/app-component-base';

@Component({
    templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent extends AppComponentBase {
    constructor(injector: Injector,
                private _router: Router) {
        super(injector);
    }

    save(): void {
    }
}
