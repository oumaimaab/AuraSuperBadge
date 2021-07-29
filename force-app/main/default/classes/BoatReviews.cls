public with sharing class BoatReviews {
    public BoatReviews() {

    }
    @AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId){
        List<BoatReview__c> boatsReviews = new List<BoatReview__c>();
        try {
            boatsReviews = [SELECT Id,Name,Comment__c,Rating__c,LastModifiedDate,CreatedDate,CreatedBy.Name,CreatedBy.SmallPhotoUrl,CreatedBy.CompanyName FROM BoatReview__c WHERE Boat__c =: boatId];
            System.debug(boatsReviews);
            return boatsReviews;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
