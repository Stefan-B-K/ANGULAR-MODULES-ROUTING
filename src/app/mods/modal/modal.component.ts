import { Component, OnInit, ElementRef, OnDestroy, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() config!: {
        title: string,
        content: string,
        closeButton: boolean,
        buttonCaption: string }

    @Output() close = new EventEmitter()

    constructor (private el: ElementRef) {}

    ngOnInit (): void {
        document.body.appendChild(this.el.nativeElement)
    }
    ngOnDestroy (): void {
        this.el.nativeElement.remove()
    }

    hideModal () {
        this.close.emit()
    }


}
