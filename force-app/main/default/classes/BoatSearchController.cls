public with sharing class BoatSearchController {
    public BoatSearchController() {

    }

    @AuraEnabled
    public static List<BoatType__c> getBoatType() {
        try {
            List<BoatType__c> boatTypes = [SELECT Id, Name FROM BoatType__c];
            return boatTypes;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
