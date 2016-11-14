import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'sui-confirm',
    templateUrl: '/sui.confirm.modal.component.html'
})
export class ConfirmModalComponent {
    @Input() confirmMessage: string;
    @Input() headerText: string = 'Confrim';
    @Input() yesBtnText: string = 'Yes';
    @Input() noBtnText: string = 'No';
    @Input() visible: boolean;
    @Output() response: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor() { }
    confirm() {
        this.visible = !this.visible;
        this.response.emit(true);
    }
    reject() {
        this.visible = !this.visible;
        this.response.emit(false);

    }
}
