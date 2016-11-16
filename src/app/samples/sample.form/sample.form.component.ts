import { Component } from '@angular/core';
import { FormBase, TextboxField, DropdownField, FileField, RadioField } from '../../sui/sui.util/sui.util.formBase';

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
            new RadioField({
                key: 'eyeColor',
                label: 'Eye Color',
                value: 'Brown',
                  options: ['Brown' , 'Blue', 'Black' ],
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
                required: false,
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
