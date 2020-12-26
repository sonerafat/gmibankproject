@PrintUsers
Feature: Read all states
  Scenario: read all states
    Given user sets the users to response using "https://www.gmibank.com/api/users"
    Given user is deserializing all data to Java
    And user sets User information to related files