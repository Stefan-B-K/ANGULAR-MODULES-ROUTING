import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
    @Input() items: { title: string, content: string }[] = []
    activeItem = -1

    activateItem (item: number): void {
        if (this.activeItem !== item) this.activeItem = item
        else this.activeItem = -1
    }
}
