import { Injector } from '@angular/core';

export abstract class AppComponentBase {
    constructor(injector: Injector) {
        // this.localization = injector.get(LocalizationService);
    }
}
