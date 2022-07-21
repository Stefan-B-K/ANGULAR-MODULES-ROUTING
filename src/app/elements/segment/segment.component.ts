import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent {
    @Input() icon = 'pdf file outline'
    @Input() showButton = true
    @Input() buttonCaption = 'Add Document'
}
