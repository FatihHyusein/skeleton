import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentBase } from '../../../shared/common/app-component-base';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent extends AppComponentBase {
    constructor(injector: Injector,
                private _router: Router) {
        super(injector);
    }

    login(): void {
    }
}
