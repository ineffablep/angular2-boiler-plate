import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'sui-form',
  templateUrl: './sui.form.component.html',
})
export class FormComponent implements OnInit {
  @Input() fields: FormBase[] = [];
  @Output('send') submitted: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  ngOnInit() {
    let group = {};

    this.fields.forEach(field => {
      group[field.key] = field.required ?
        new FormControl({ value: field.value || '', disabled: field.disabled }
          , Validators.required) :
        new FormControl({ value: field.value || '', disabled: field.disabled });
    });
    this.form = new FormGroup(group);
  }
  isValid(field: FormBase): boolean {
    if (field && field.key) {
      let acc = this.form.controls[field.key];
      if (acc)
        return acc.valid;
    }
    return true;
  }
  onSuiFormSubmit() {
    this.submitted.emit(this.form.value);
  }
}

export class FormBase {
  value: any;
  key: string;
  label: string;
  required: boolean;
  readonly: boolean;
  disabled: boolean;
  order: number;
  controlType: string;
  type: string;
  placeholder: string;
  constructor(options: {
    value?: any,
    key?: string,
    label?: string,
    required?: boolean,
    readonly?: boolean,
    disabled?: boolean,
    order?: number,
    controlType?: string,
    type?: string,
    placeholder?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.type = 'textbox';
    this.label = options.label || '';
    this.required = !!options.required;
    this.readonly = !!options.readonly;
    this.disabled = !!options.disabled;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || '';
  }
}

export class TextboxField extends FormBase {
  controlType = 'textbox';

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}

export class DropdownField extends FormBase {
  controlType = 'dropdown';
  type= 'select';
  options: { key: string, value: string }[] = [];
  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
