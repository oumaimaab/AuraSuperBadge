import { LightningElement,wire } from 'lwc';
import CONTACT_FirstName from "@salesforce/schema/Contact.FirstName";
import CONTACT_LastName from "@salesforce/schema/Contact.LastName";
import CONTACT_Email from "@salesforce/schema/Contact.Email";
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { reduceErrors } from 'c/ldsUtils';
const COLUMNS = [
    { label: 'First Name', fieldName: CONTACT_FirstName.fieldApiName, type: 'text' },
    { label: 'Last Name', fieldName: CONTACT_LastName.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: CONTACT_Email.fieldApiName, type: 'email' }
];

export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;
    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}