({
    onFormSubmit : function(component, event, helper) {
        var formData = event.getParam("formData");
        var boatTypeId = formData.boatTypeId;
        let boatSearchResults = component.find('boatSearchResult');
        boatSearchResults.search(boatTypeId);
    },
})