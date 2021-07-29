/*eslint-disable */

({
  doSearch: function (component, event, helper) {
    helper.onSearch(component);
  },
  search: function (component, event, helper) {
    var params = JSON.stringify(event.getParams("arguments").arguments);

    if (params) {
      component.set(
        "v.boatTypeId",
        JSON.stringify(event.getParams("arguments").arguments.boatTypeId)
      );

      helper.onSearch(component);
    }
  },
  onBoatSelect: function (component, event, helper) {
    let boatId = event.getParams("boatId").boatId;
    component.set('v.selectedBoatId',boatId);  
    console.log(boatId);  
  }
});

