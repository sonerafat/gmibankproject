@bellidegil
  Feature: Admin manage customers
    Background: entrance on the page
      Given user is on the home page
      And sign in as "user"
      And user click to My Operations button
      And user clcik to manage customer
     @tc01
     Scenario: all info of the accounts populated
       Then Verify that "First Name", "Last Name", "Middle Initial", "Email", "Mobile Phone Number", "Phone Number", "Address", "Create Date"
     @tc02
     Scenario: View option
       Then verify that view button is displayed
       And click on view button
       Then Verify that edit button is displayed
     @tc03
     Scenario: edit page
       And click on edit button
       Then verify that create or update page is displayed
     @tc04
     Scenario: update info
       And click on edit button
       And clear address text box
       And type "Den Helder" into address textbox
       And Click on save button
       Then Verify that user's address changed "Den Helder"
      @tc05
      Scenario: delete func
        And Click on delete button
        Then Verify warning that warning message contains "Are you sure you want to delete" text