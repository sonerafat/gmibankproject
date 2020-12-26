@createStates
  Feature:US_24 System should allow to create new states using api end point "https://www.gmibank.com/api/tp-states" if not created already
    Scenario Outline: TC_01 User can Just create each state 1 by 1
      Given user sets the response using api end point "https://www.gmibank.com/api/tp-states" using "<head>" and "<id>"
      Then user validates created states using "https://www.gmibank.com/api/tp-states" and "<id>"
      Examples:

      |head       |id            |
      |name       |Zeytinli_01   |
      |name       |Zeytinli_02   |
      |name       |Zeytinli_03   |



