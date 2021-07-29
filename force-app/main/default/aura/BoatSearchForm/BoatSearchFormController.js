({
  doInit: function (component, event, helper) {
    helper.LoadBoatTypes(component, event);
    var createRecordEvent = $A.get("e.force:createRecord");
    if (createRecordEvent) {
      component.set("v.hideNewButtonVar", true);
    }
  },

  handleClick: function (component, event, helper) {
    
    var boatType = component.find("boatTypes").get("v.value");
    var createRecordEvent = $A.get("e.force:createRecord");
    createRecordEvent.setParams({
      entityApiName: "Boat__c",
      defaultFieldValues: {
        BoatType__c: boatType
      }
    });
    createRecordEvent.fire();
  },

  onboatTypechange: function (component, event, helper) {
    var boatType = component.find("boatTypes").get("v.value");
    component.set("v.selectedBoatType", boatType);
  },

  onFormSubmit: function (component, event, helper) {
    let formsubmit = component.getEvent("formsubmit");
    let selectedBoatType = component.get("v.selectedBoatType");
    formsubmit.setParams({ formData: {boatTypeId:selectedBoatType} });
    formsubmit.fire();
  }
});
