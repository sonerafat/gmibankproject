
Feature: go to Registration Page
  Background: User go to GMI Bank homepage
    Given user got to GMI Bank homepage

    Scenario:TC_0001 User should see all account types and balace populated
      Given user click to dropdown button
      Then user click to Sign in button
      And user click User name button
      And user type "Username"
      And user click to Password
      And user type "Password"
      Then user click Sign in
      Then user click My Operation button
      Then user click Manage Accounts button
      Then check all account types
      Then check all balance

  Scenario:TC_0002 User can view transaction
    Given user click to dropdown button
    Then user click to Sign in button
    And user click User name button
    And user type "Username"
    And user click to Password
    And user type "Password"
    Then user click Sign in
    Then user click My Operation button
    Then user click Manage Accounts button
   Then user view transaction


















