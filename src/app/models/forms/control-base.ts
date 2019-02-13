import { ValidatorFn } from '@angular/forms';

export class ControlBase<T> {
  value: T;
  name: string;
  label: string;
  validation: ValidatorFn[];
  order: number;
  controlType: string;
  placeholder: string;

  constructor(options: {
    value?: T,
    name?: string,
    label?: string,
    validation?: ValidatorFn[],
    order?: number,
    controlType?: string,
    placeholder?: string
  } = {}) {
    this.value = options.value;
    this.name = options.name || '';
    this.label = options.label || '';
    this.validation = options.validation || [];
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || '';
  }
}
