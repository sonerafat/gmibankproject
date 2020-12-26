@AdminAccCreation
Feature: Go to homepage
  Background: Admin goes to GMI Bank homepage
    Given admin goes to GMI Bank homepage
    And admin clicks to login icon
    And admin clicks to Sign in
    And admin clicks to Username box and send "teamadmin21"
    And admin clicks to Password box and send "teamAdmin21"
    And admin clicks to Sign in button
    And admin clicks to My Operations button
    And admin clicks to Manage Accounts button
    And admin clicks to Create New Account button

    Scenario: Admin AccountCreation
      And admin clicks on description
