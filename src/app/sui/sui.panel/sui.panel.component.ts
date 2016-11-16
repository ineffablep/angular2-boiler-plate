import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'sui-panel',
    templateUrl: './sui.panel.component.html',

})
export class PanelComponent  {
    @Input() headerText: string;
    @Input() headerClass: string;
    @Input() headerStyle: Object = {};
    @Input() headerIcon: string;
    @Input() panelClass: string;
    @Input() panelStyle: Object = {};
    @Input() closable = true;

    isClosed: boolean = false;
    onClose(event: any) {
        this.isClosed = true;
    }
}
