import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBase } from '../sui.util/sui.util.formBase';
import { Validatons } from '../sui.util/sui.util.validations';

@Component({
  selector: 'sui-form',
  templateUrl: './sui.form.component.html',
})
export class FormComponent {
  @Input() fields: FormBase[] = [];
  @Output('send') submitted: EventEmitter<any> = new EventEmitter();
  isFormValid: boolean = false;
  validator = new Validatons();
  isValid(field: FormBase): boolean {
    let isValid = this.validator.checkFieldValid(field);
    if (isValid) {
      this.isFormValid = this.checkFormValid();
    }
    return isValid;
  }


  checkFormValid(): boolean {
    let isFormValid = true;
    this.fields.forEach(y => {
      let fv = this.validator.checkFieldValid(y);
      if (!fv) {
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



