import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'sui-alert',
    templateUrl: './sui.alert.component.html',

})
export class Alertomponent implements OnInit {
    @Input() message: string;
    @Input() type: AlertType;
    @Input() heading: string;
    isClosed: boolean = false;
    cssClass: string = '';
    onClose(event: any) {
        this.isClosed = true;
    }
    ngOnInit() {
        if (this.type === AlertType.success) {
            this.cssClass = 'sui-success';
        } else if (this.type === AlertType.error) {
            this.cssClass = 'sui-danger';
        } else if (this.type === AlertType.info) {
            this.cssClass = 'sui-info';
        }
    }
}

export enum AlertType {
    success = 0,
    error = 1,
    info = 2
}
