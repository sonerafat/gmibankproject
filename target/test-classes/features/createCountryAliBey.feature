@CreateCountry
Feature: post new country
  Scenario: User set response with end point
    Given User set response with end point "https://www.gmibank.com/api/tp-countries" and post "name" "JUSTICE COUNTRY"
    Then User validate countries using "https://www.gmibank.com/api/tp-countries"