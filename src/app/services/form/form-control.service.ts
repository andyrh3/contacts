import { Injectable } from '@angular/core';
import {ControlBase} from '../../models/forms/control-base';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  createFormGroup(controls: ControlBase<any>[]) {
    const group: any = {};

    controls.forEach(control => {
      group[control.name] = new FormControl(control.value || '', control.validation);
    });

    return new FormGroup(group);
  }

}
