import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponentBase } from '../../../shared/common/app-component-base';


@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent extends AppComponentBase implements OnInit {
    constructor(injector: Injector,
                private _router: Router) {
        super(injector);
    }

    ngOnInit() {

    }

    save(): void {

    }
}
