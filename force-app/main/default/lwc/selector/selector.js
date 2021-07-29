import { LightningElement,wire } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import id from '@salesforce/user/Id';
import USER_NAME  from "@salesforce/schema/User.Name";
export default class Selector extends LightningElement {
    selectedProductId;
    

    @wire(getRecord,{
        recordId : id,
        fields:[USER_NAME]
    })
    user;
    get name() {
        return getFieldValue(this.user.data, USER_NAME);
    }
    
    handleProductSelected(evt) {
        this.selectedProductId = evt.detail;
    }
}
