@StateReader
Feature: Read all states
#  Scenario Outline: Create a state
#    Given user sets the response using api endpoint "https://www.gmibank.com/api/tp-states" and creates state using "<id>" and "<name>"
#    Examples: create state
#    |id|name|
#    |name|Arizona|
#    |name|Kansas|
#    |name|Colorado|


      Scenario: read all states
      Given user sets the states to response using "https://www.gmibank.com/api/tp-states"
      Given user is deserializing state data to Java and validates
