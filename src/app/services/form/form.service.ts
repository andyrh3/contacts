import { Injectable } from '@angular/core';
import { ControlBase } from '../../models/forms/control-base';
import { Textbox } from '../../models/forms/textbox';
import {Validators} from '@angular/forms';
import {Contact} from '../../models/contact';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  // TODO: move to getContactsControlsObs to a contact service??

  constructor() {}

  getContactsControlsObs(contact?: Contact): Observable<ControlBase<any>[]> {
    const controls: ControlBase<any>[] = [
      new Textbox({
        name: 'name',
        label: 'Name',
        value: contact.name || '',
        order: 1,
        validation: [Validators.required, Validators.minLength(1)]
      }),
      new Textbox({
        name: 'street',
        label: 'Street',
        value: contact.street || '',
        order: 1,
        validation: [Validators.required, Validators.minLength(3)]
      }),
      new Textbox({
        name: 'email',
        label: 'email',
        value: contact.email || '',
        order: 1,
        validation: [Validators.required, Validators.minLength(4), Validators.email]
      }),
      new Textbox({
        name: 'phone',
        label: 'phone',
        value: contact.phone || '',
        order: 1,
        validation: [Validators.required, Validators.minLength(3), Validators.pattern('^\\([0-9]+\\) [0-9]+-[0-9]+$')]
      }),
      new Textbox({
        name: 'age',
        label: 'age',
        value: contact.age || '',
        order: 1,
        validation: [Validators.required, Validators.max(130), Validators.minLength(1), Validators.pattern('^[0-9]{1,3}$')]
      })
    ];
    return of(controls.sort((a, b) => a.order - b.order));
  }

}
