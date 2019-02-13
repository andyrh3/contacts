import {Component, Input} from '@angular/core';
import {ControlBase} from '../../../models/forms/control-base';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent {

  @Input() control: ControlBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.control.name].valid;
  }

}
