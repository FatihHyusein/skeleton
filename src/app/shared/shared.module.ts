import {NgModule} from "@angular/core";
import {MatButtonModule, MatCheckboxModule, MatToolbarModule} from "@angular/material";
const materialComponents = [MatButtonModule, MatCheckboxModule, MatToolbarModule];

@NgModule({
    imports: [...materialComponents],
    exports: [...materialComponents],
})
export class SharedModule {
}
