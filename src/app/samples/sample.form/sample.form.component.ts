import { Component } from '@angular/core';
import { FormBase, TextboxField, DropdownField, FileField } from '../../sui/sui.util/sui.util.formBase';

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
                key: 'gender',
                label: 'Male',
                type: 'radio',
                required: true,
                value: 'male',
                placeholder: 'Male',
                order: 11
            }),
            new TextboxField({
                key: 'gender',
                label: 'Female',
                type: 'radio',
                required: true,
                value: 'female',
                placeholder: 'Female',
                order: 12
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
            new FileField({
                key: 'file',
                label: 'File',
                required: true,
                accepts: '*',
                value: '',
                order: 6
            }),
            new DropdownField({
                key: 'gender',
                label: 'Gender',
                required: true,
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
