@userInfoPositiveTest
  Feature: User Info Page Test
    Background: Entrance of the page
      Given user is on the home page
      And Click on the icon and click on sign in
      And Enter username and password
      And Click on sign in button
      And Click on user name and click on User info
      @function
    Scenario: testing the page functionalities
      Then Verify that "First Name", "Last Name", "Email", and "Language" textboxes is on the page
    @drop
    Scenario: testing Language drop down menu
      Then Verify that "English" and "Turkish" are in the dropbox
     @firstname
    Scenario Outline: Testing Update first name functionality
      And Type "<firstname>" in first name textbox
      And Click on save button
      Then Verify the success message is "Settings saved!"
       Examples:
       |firstname |
       |team21    |
       |team21new |
    @last
    Scenario Outline: Testing Update last name functionality
      And Type "<lastname>" in last name textbox
      And Click on save button
      Then Verify the success message is "Settings saved!"
      Examples:
      |lastname   |
      |newlastname|
      |user       |

      @email
    Scenario: Testing Update email functionality
      And Type "team210@gmail.com" in email textbox
      And Click on save button
        Then Verify the success message is "Settings saved!"