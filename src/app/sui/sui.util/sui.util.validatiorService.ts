import { FormBase } from './sui.util.formBase';
import { Injectable } from '@angular/core';
@Injectable()
export class ValidatiorService {
  checkValidEmail(email: string): boolean {
    let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailReg.test(email);
  }

  checkRequired(field: FormBase): ValidatorModal {
    let vm = new ValidatorModal();
    if (field.required) {
      if (field.value) {
        if (field.value === '') {
          vm.valid = false;
          vm.errorMessage = field.label + ' is required';
        } else {
          vm.valid = true;
        }
      } else {
        vm.valid = false;
        vm.errorMessage = field.label + ' is required';
      }
    } else {
      vm.valid = true;
    }

    return vm;
  }

  checkFieldValid(field: FormBase): ValidatorModal {
    let reqValid = this.checkRequired(field);
    if (reqValid.valid) {
      if (field.type === 'email') {
        let vm = new ValidatorModal();
        vm.valid = this.checkValidEmail(field.value);
        vm.errorMessage = 'Invalid Email Address';
        return vm;
      }
    }
    return reqValid;
  }
}

export class ValidatorModal {
  valid: boolean = false;
  errorMessage: string = '';
}
