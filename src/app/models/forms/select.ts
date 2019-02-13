import {ControlBase} from './control-base';

export class Select extends ControlBase<string> {

  controlType = 'select';
  options: {key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }

}
