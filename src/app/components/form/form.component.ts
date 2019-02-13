import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ControlBase} from '../../models/forms/control-base';
import {FormGroup} from '@angular/forms';
import {FormControlService} from '../../services/form/form-control.service';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../services/contacts.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {

  @Input() controls: ControlBase<any>[] = [];
  @Output() formSubmitted = new EventEmitter();

  form: FormGroup;
  payLoad = '';

  constructor(private formControlService: FormControlService, private contactsService: ContactsService) {}

  ngOnInit() {
    this.buildForControls();
  }

  buildForControls() {
    this.form = this.formControlService.createFormGroup(this.controls);
  }

/*  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }*/

  onSubmit() {
    // Update contacts with changes
    this.contactsService.updateContact(this.form.value);
    this.formSubmitted.emit(this.form.value);
  }

  ngOnChanges(): void {
    this.buildForControls();
  }


}
