/*eslint-disable */

({
    onBoatSelected : function(component, event, helper) {
        let boat= event.getParams("boat");
        component.set("v.id",JSON.parse(boat.boat).Id);
        let data = component.find('service');
        data.reloadRecord();
    },
    onBoatReviewAdded  : function(component, event, helper) {
       component.find('tabSetReviews').set('v.selectedTabId','boatreviewtab');
       var boatReviewsRefresh = component.find("boatReviewsRefresh");
        if(typeof BoatReviews != 'undefined'){
        	var auraMethodResult = boatReviewsRefresh.refresh();        
        }
	
    }
})
