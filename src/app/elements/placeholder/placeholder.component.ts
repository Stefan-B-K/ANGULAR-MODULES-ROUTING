import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-placeholder',
    templateUrl: './placeholder.component.html',
    styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent {
    @Input() header = true
    @Input() headerRows = 2
    @Input() paraRows = 5
}
