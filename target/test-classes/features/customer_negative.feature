@DataValidateCustomer
Feature: Go to login
  Background: Go to login
    Given user click to login icon
    And user click link sign in
    And user enter username as  "team21employee"
    And user enter password as  "team21Employee"
    And user click to sign in button
    And user click to my operations link
    And user clcik to manage customer
    And user click to button create new customer
    When click to save button into customer form

  Scenario: Data validation on create customer-address
    And User should see an error message under address textbox

  Scenario: Data validation on create customer-city
    And User should see an error message under city textbox

  Scenario: Data validation on create customer-country
    And User should see an error message under country dropdown

  Scenario: Data validation on create customer-state
    Then User should see an error message under state textbox