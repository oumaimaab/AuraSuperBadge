/*eslint-disable */
({
    onInit : function(component, event) {
        var boat = component.get("v.boat");
        var action=component.get("c.getAll");
        console.log(boat.Id);
        action.setParams({ boatId: boat.Id });
        action.setCallback(this,function(response) {
            var state= response.getState();
            if(state==='SUCCESS'){
                console.log(response.getReturnValue());
                debugger;
                component.set("v.boatReviews",response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    }
})
