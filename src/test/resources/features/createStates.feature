@createStates
  Feature:US_24 System should allow to create new states using api end point "https://www.gmibank.com/api/tp-states" if not created already
    Scenario Outline: TC_01 User can Just create each state 1 by 1
      Given user sets the response using api end point "https://www.gmibank.com/api/tp-states" using "<head>" and "<id>"
      Then user validates created states using "https://www.gmibank.com/api/tp-states"
      Examples:

      |head       |id                |
      |name       |Province_0015     |
      |name       |Province_0016     |
      |name       |Province_0017     |



