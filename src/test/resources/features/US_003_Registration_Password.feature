@gmihomepage

Feature: Go to Registration Page
  Background: User go to GMI Bank homepage
    Given user got to GMI Bank homepage


  Scenario: TC_0001 User type to New Password_There should be at least 1 lowercase char
   Given user click to dropdown button
    Then user click to register button
    And  user click to New Password button
    Then user type New "Password"_There should be at least 1 lowercase char

  Scenario: TC_0002 User type to New Password_There should be at least 1 lowercase char
    Given user click to dropdown button
    Then user click to register button
    And  user click to New Password button
    Then user type New "Password"_There should be at least 1 lowercase char

  Scenario: TC_0003 User type to New Password_There should be at least 1 digit
    Given user click to dropdown button
    Then user click to register button
    And  user click to New Password button
    Then user type New "Password"_There should be at least 1 digit

  Scenario: TC_0004 User type to New Password_There should be  at least 1 special char
    Given user click to dropdown button
    Then user click to register button
    And  user click to New Password button
    Then user type New "Password"_There should be  at least 1 special char

  Scenario: TC_0005 User type to New Password_There should be at least 7 chars
    Given user click to dropdown button
    Then user click to register button
    And  user click to New Password button
    Then user type New "Password"_There should be at least 7 chars