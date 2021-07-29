/*eslint-disable */
({
    doInit : function(component, event, helper) {
        helper.onInit(component,event);
    },
    onUserInfoClick : function(component, event, helper) {
        let user = event.currentTarget.getAttribute('data-userid');
        console.log(JSON.stringify(user));
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": userId
        });
        navEvt.fire();
    },
    refresh : function(component, event, helper){
        this.doInit;
    }
})
