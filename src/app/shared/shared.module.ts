import { NgModule } from '@angular/core';
import { TimesDirective } from './times.directive';
import { CompTitleComponent } from './comp-title/comp-title.component';

@NgModule({
    declarations: [TimesDirective, CompTitleComponent],
    exports: [TimesDirective, CompTitleComponent]
})
export class SharedModule {}
