import { FormBase } from './sui.util.formBase';
export class Validatons {
  checkValidEmail(email: string): boolean {
    let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailReg.test(email);
  }

  checkRequired(field: FormBase): boolean {
    if (field.required) {
      if (field.value) {
        if (field.value === '') {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
    return true;
  }

  checkFieldValid(field: FormBase): boolean {
    let reqValid = this.checkRequired(field);
    if (reqValid) {
      if (field.type === 'email') {
        return this.checkValidEmail(field.value);
      }
    }
    return reqValid;
  }
}
