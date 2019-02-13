import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from '../models/contact';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  selectedContact: Contact;
  contacts: Contact[] = [];
  lastUpdatedContact: Contact;

  constructor(private http: HttpClient) {
    this.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('/assets/data/contacts.json');
  }

  updateContact(contact: Contact) {
    this.contacts.map((currContact, i) => {
      if (contact.email === currContact.email) {
        this.contacts[i] = contact;
        this.lastUpdatedContact = this.selectedContact;
      }
    });
  }

}
