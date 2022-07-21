import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent {
    @Input() data: { image: string, title: string, description: string }[] = []
}
