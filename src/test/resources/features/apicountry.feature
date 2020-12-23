@CustomerReader
Feature: read all customer data
  Background:
    Given user go to api end point "https://www.gmibank.com/api/tp-customers"
  Scenario: read
    And deserialize all customer data
    And User sets all Customer information to related files
    Then user validate all customer data
  @country
  Scenario: country
    And read all countries and write
    Then validate countries