import { Component } from '@angular/core';
import { FormBase, TextboxField, DropdownField } from '../../sui/sui.util/sui.util.formBase';

@Component({
  templateUrl: './sample.form.component.html'
})
export class SampleFormComponent {
  fields: FormBase[] = [];
  constructor() {
    this.createFormFields();
  }
  save(object: any) {
    alert(JSON.stringify(object));
  }

  createFormFields() {
    this.fields.push(
      new TextboxField({
        key: 'username',
        label: 'Name',
        required: true,
        value: '',
        placeholder: 'Username',
        order: 1
      }),

      new TextboxField({
        key: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        value: '',
        placeholder: 'Email',
        order: 2
      }),
      new DropdownField({
        key: 'gender',
        label: 'Gender',
        options: [
          { key: 'male', value: 'male' },
          { key: 'female', value: 'female' }
        ],
        value: '',
        order: 3
      }),

      new TextboxField({
        key: 'birthdate',
        label: 'Birthdate',
        type: 'date',
        required: true,
        value: '',
        placeholder: 'Birthdate',
        order: 4
      }),
    );
  }
}
