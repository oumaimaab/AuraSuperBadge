/*eslint-disable */

({
    onBoatClick : function(component, event, helper) {
        let boatSelectEvent = component.getEvent("boatselect");
        let boatId = event.getSource().get("v.name");
        boatSelectEvent.setParams({'boatId':boatId});
        boatSelectEvent.fire();

        let boatSelectedObject = $A.get("e.c:BoatSelected");
        let boat =component.get("v.boat");
        console.log(JSON.stringify(boat));
        boatSelectedObject.setParams({'boat':JSON.stringify(boat)});
        boatSelectedObject.fire();

        var mapEvent=$A.get("e.c:PlotMapMarker");
        mapEvent.setParams({"sObjectId":JSON.stringify(boat.Id),"lat":JSON.stringify(boat.Geolocation__c.latitude),"long": JSON.stringify(boat.Geolocation__c.longitude)});
        mapEvent.fire();
    }
})
