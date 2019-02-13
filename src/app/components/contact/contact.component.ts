import {Component, Input, OnInit} from '@angular/core';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact;

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
  }

}
