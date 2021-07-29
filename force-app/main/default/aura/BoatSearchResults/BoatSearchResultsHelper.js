/*eslint-disable */

({
  onSearch: function (component, event) {
    var data = component.get("v.boatTypeId");
    var boatsList = component.get("c.getBoats");
    boatsList.setParams({ boatTypeId: data });
    boatsList.setCallback(this, function (response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        component.set("v.boatsList", JSON.parse(response.getReturnValue()));
      } else {
        var errors = response.getError();
        if (errors) {
          if (errors[0] && errors[0].message) {
            console.log(
              "BoatSearchResultsHelper.onSearch-Encountered Error:" +
                errors[0].message
            );
          }
        } else {
          console.log(
            "BoatSearchResultsHelper.onSearch-Encountered Error: Unknown"
          );
        }
      }

      console.log("Failed with state: " + state);
    });
    $A.enqueueAction(boatsList);
  }
});
