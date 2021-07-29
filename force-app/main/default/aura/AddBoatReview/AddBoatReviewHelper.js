/*eslint-disable */

({
    onInit : function(component, event) {
        component.find("service").getNewRecord(
            "BoatReview__c", // sObject type (objectApiName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.simpleNewBoatReview");
                var boat = component.get("v.boat");
                var error = component.get("v.recordError");
                if(error || (rec === null )) {
                    console.log("Error initializing record template: " + error);
                    return;
                }
                else {                    
                    // rec.Boat__c = component.get('v.boat').Id;
                    // debugger;
                    // component.set("v.boatReview",rec);


                    // component.set('v.simpleNewBoatReview', rec.Boat__c);
                }     
                console.log("Record template initialized: " + rec.apiName);
            })
        );

    }
})
