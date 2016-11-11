import { Component, Injectable, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
    selector: 'sui-form',
    templateUrl: './sui.form.component.html'
})
export class FormComponent  implements OnInit {
 @Input() fields: FormBase<any>[] = [];
  @Output('send') submitted: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  constructor(private qcs: FormControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toControlGroup(this.fields);
  }

  onSuiFormSubmit() {
    this.submitted.emit(this.form.value);
  }
}


export class FormBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  readonly: boolean;
  disabled: boolean;
  order: number;
  controlType: string;
  placeholder: string;
  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      readonly?: boolean,
      disabled?: boolean,
      order?: number,
      controlType?: string,
      placeholder?: string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.readonly = !!options.readonly;
    this.disabled = !!options.disabled;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || '';
  }
}

export class TextboxField extends FormBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}

export class DropdownField extends FormBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}


@Component({
    selector: 'sui-field',
    templateUrl: './sui.formField.component.html'
})
export class FormFieldComponent {
  @Input() field: FormBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
}


@Injectable()
export class FormControlService {

    constructor(private fb: FormBuilder) { }

    toControlGroup(fields: FormBase<any>[] ) {
        let group = {};

        fields.forEach(field => {
            group[field.key] = field.required ? [field.value || '',
                               Validators.required] : [field.value || ''];
        });
        return this.fb.group(group);
    }
}
