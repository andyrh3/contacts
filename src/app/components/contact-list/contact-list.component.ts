import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts.service';
import {Contact} from '../../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  selectedContact: Contact;
  updatedContact: Contact;

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    // this.getContacts();
  }

 /* getContacts(): void {
     this.contactsService.getContacts().subscribe(contacts => this.contacts = contacts);
  }*/

  onSelect(contact: Contact) {
    this.contactsService.selectedContact = contact;
  }



}
