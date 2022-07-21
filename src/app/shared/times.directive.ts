import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
      private viewContainer: ViewContainerRef,
      private template: TemplateRef<any>)  {}

    @Input('appTimes') set render(times: number) {
      this.viewContainer.clear()
        for(let _i = 0; _i < times; _i++) {
            this.viewContainer.createEmbeddedView(this.template)
        }
    }

}
