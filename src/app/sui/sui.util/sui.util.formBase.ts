export class ImageModel {
  public alt: string = '';
  public name: string = '';
  public base64: string = '';
  public type: string = '';
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
  multiple: boolean = false;
  accepts: string = 'image/*';
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
    placeholder?: string,

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

export class FileField extends FormBase {
  controlType = 'file';
  constructor(options: {
    multiple?: boolean,
    accepts?: string,
    value?: any,
    key?: string,
    label?: string,
    required?: boolean,
    readonly?: boolean,
    disabled?: boolean,
    order?: number
  } = {}) {
    super();
    this.multiple = !!options.multiple;
    this.accepts = options.accepts || 'image/*';
    this.key = options.key || '';
    this.type = 'file';
    this.label = options.label || '';
    this.required = !!options.required;
    this.readonly = !!options.readonly;
    this.disabled = !!options.disabled;
    this.order = options.order === undefined ? 1 : options.order;
  }
}

export class RadioField extends FormBase {
  controlType = 'radio';
  type = 'radio';
  options: string [];
  constructor(options: {
    value?: any,
    key?: string,
    label?: string,
    required?: boolean,
    readonly?: boolean,
    disabled?: boolean,
    order?: number,
    options?: string[]
  } = {}) {
    super();
    this.key = options.key || '';
    this.type = 'radio';
    this.label = options.label || '';
    this.required = !!options.required;
    this.readonly = !!options.readonly;
    this.disabled = !!options.disabled;
    this.order = options.order === undefined ? 1 : options.order;
    this.options = options['options'] || [];
  }
}


export class DropdownField extends FormBase {
  controlType = 'dropdown';
  type = 'select';
  options: { key: string, value: string }[] = [];
  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
