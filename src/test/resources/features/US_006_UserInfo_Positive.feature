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
    Scenario: Testing Update first name functionality
      And Type "team21new" in first name textbox
      And Click on save button
      Then Verify the success message is "Settings saved!"
    @last
    Scenario: Testing Update last name functionality
      And Type "NewUser" in last name textbox
      And Click on save button
      Then Verify the success message is "Settings saved!"
      @email
    Scenario: Testing Update email functionality
      And Type "team210@gmail.com" in email textbox
      And Click on save button
        Then Verify the success message is "Settings saved!"