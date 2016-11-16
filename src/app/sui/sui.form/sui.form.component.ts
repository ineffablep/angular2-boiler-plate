import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBase } from '../sui.util/sui.util.formBase';
import { ValidatiorService } from '../sui.util/sui.util.validatiorService';

@Component({
  selector: 'sui-form',
  templateUrl: './sui.form.component.html',
  providers: [ValidatiorService]

})
export class FormComponent {
  @Input() fields: FormBase[] = [];
  @Output('send') submitted: EventEmitter<any> = new EventEmitter();
  isFormValid: boolean = false;

  constructor(private _validator: ValidatiorService) { }

  checkFormValid(event: any): boolean {
    let isFormValid = true;
    this.fields.forEach(y => {
      let fv = this._validator.checkFieldValid(y);
      if (!fv.valid) {
        isFormValid = false;
      }
    });
    return isFormValid;
  }

  onSuiFormSubmit() {
    if (this.isFormValid) {
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



