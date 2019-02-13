import {Component, Input, OnChanges, OnInit, AfterViewChecked, ViewChild, ElementRef} from '@angular/core';
import {FormService} from '../../services/form/form.service';
import {Contact} from '../../models/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit, OnChanges, AfterViewChecked {

  // TODO: focus on first field in modal for accessibility
  // @ViewChild('name') nameField: ElementRef;

  @Input() contact;
  controls: any[];
  open = false;

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.getContactControls();
  }

  getContactControls() {
      this.formService.getContactsControlsObs(this.contact || new Contact({})).subscribe(controls => this.controls  = controls);
  }

  ngOnChanges(): void {
    if (this.contact) {
      // console.log('Output from contact detail component: ' + JSON.stringify(this.contact));
      this.getContactControls();
      this.open = true;

      // TODO: Fix error when clicking on the same contact after closing the contact edit modal.

    }
  }

  ngAfterViewChecked(): void {
    // this.nameField.nativeElement.focus();
  }

  onClose(): void {
    this.open = false;
  }

}
