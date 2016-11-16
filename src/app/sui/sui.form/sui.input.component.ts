import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBase, ImageModel } from '../sui.util/sui.util.formBase';
import { ValidatiorService, ValidatorModal } from '../sui.util/sui.util.validatiorService';

@Component({
    selector: 'sui-input',
    templateUrl: './sui.input.component.html',
    providers: [ValidatiorService]

})
export class InputComponent {
    @Input() field: FormBase;
    @Output('valid') valid: EventEmitter<any> = new EventEmitter();
    validate: ValidatorModal = new ValidatorModal();
    constructor(private _validator: ValidatiorService) { }
    isValid(field: FormBase) {
        let validMessage = this._validator.checkFieldValid(field);
        if (validMessage.valid) {
            this.valid.emit(true);
        }
        this.validate = validMessage;
    }
    fileChange(event: any, field: FormBase) {
        let selectedFiles = event.srcElement.files;
        field.value = selectedFiles;
        if (field.accepts === 'image/*') {
            field.controlType = 'image';
            let images: ImageModel[] = [];
            for (let i = 0; i < selectedFiles.length; i++) {
                let reader = new FileReader();
                let image = new ImageModel();
                console.log(selectedFiles[i]);
                image.name = selectedFiles[i].name;
                image.type = selectedFiles[i].type;
                reader.onload = function() {
                    image.base64 = reader.result;
                };
                reader.readAsDataURL(selectedFiles[i]);
                images.push(image);
            }
            field.value = images;
        }

        this.isValid(field);
    }
}
