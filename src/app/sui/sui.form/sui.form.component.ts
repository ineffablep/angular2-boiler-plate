import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBase } from '../sui.util/sui.util.formBase';
import { ValidatiorService } from '../sui.util/sui.util.validatiorService';
import { AlertType } from '../sui.alert/sui.alert.component';

@Component({
    selector: 'sui-form',
    templateUrl: './sui.form.component.html',
    providers: [ValidatiorService]

})
export class FormComponent {
    @Input() fields: FormBase[] = [];
    @Output('send') submitted: EventEmitter<any> = new EventEmitter();
    validationSummary: string = '';
    alertType: AlertType = AlertType.error;
    constructor(private _validator: ValidatiorService) { }

    validateForm(): boolean {
        let isFormValid = true;
        this.fields.forEach(y => {
            let fv = this._validator.checkFieldValid(y);
            if (!fv.valid) {
                {
                    isFormValid = false;
                    this.validationSummary += ' <br> ' + fv.errorMessage;
                }
            }
        });
        return isFormValid;
    }

    onSuiFormSubmit() {
        this.validationSummary = '';
        let isFormValid = this.validateForm();
        if (isFormValid) {
            let obj = {};
            this.fields.forEach(y => {
                obj[y.key] = y.value;
            });
            this.submitted.emit(obj);
        }
    }
    onSuiFormCancel() {
        this.submitted.emit(false);
    }
}



