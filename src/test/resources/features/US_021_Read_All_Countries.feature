@Countries
Feature:System should allow to read all countries info using api end point "https://www.gmibank.com/api/tp-countries"

  Background:  user read all country names
    Given user set response using api end point "https://www.gmibank.com/api/tp-countries"

    Scenario: Read all countries you created and validate them from your data set
      And  user verfy all countries from api with data set
          | MEXICO  |
          | GERMANY |
          | Finland |
          | Cibuti  |

      Scenario Outline: Read all countries you created and validate then 1 by 1
        Given user verify all countries one by one from data set "<countries>"
        Examples:
          | countries |
          | MEXICO    |
          | GERMANY   |
          | Finland   |
          | Cibuti    |

