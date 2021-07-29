public with sharing class BoatSearchResults {
    public BoatSearchResults() {

    }
    
    @AuraEnabled
    public static String getBoats(String boatTypeId){
        System.debug('boatTypeId'+boatTypeId);

        String ids = (String) JSON.deserialize(boatTypeId,String.class);
        System.debug('boatTypeId'+ids);
        List<Boat__c> boats = new List<Boat__c>();
        try {
            if (!String.isEmpty(boatTypeId)) {
                boats = [SELECT Id,Name,Contact__c, Contact__r.Name ,Picture__c,Description__c,Geolocation__c,Length__c,Price__c,Year_Built__c FROM Boat__c WHERE BoatType__c =:ids];
            }
            else {
                boats = [SELECT Id,Name,Contact__c,Contact__r.Name,Picture__c,Description__c,Geolocation__c,Length__c,Price__c,Year_Built__c FROM Boat__c];
            }
            System.debug(boats);
            return JSON.serialize(boats, true);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
