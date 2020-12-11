@userInfoNegativeTest
Feature: User Info Page Test
  Background: Entrance of the page
    Given user is on the home page
    And Click on the icon and click on sign in
    And Enter username and password
    And Click on sign in button
    And Click on user name and click on User info
  @NegativeEmail
  Scenario Outline: Testing Update email functionality
    And Type "<email>" in email textbox
    And Click on save button
    Then Verify the error message is "This field is invalid"
    Examples: Negative cases for email
    |email          |
    |44321          |
    |usergmail.com  |
    |user@gmailcom  |

    @langtest
    Scenario: Testing language options
      Then Verify that "English" and "Turkish" are only options in the drop box
