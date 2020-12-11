@employeesignin
  Feature: Go to homepage
    Background: Employee goes to GMI Bank homepage
      Given employee goes to GMI Bank homepage
      And user click to login icon
      And user click to Sign in
      And user click to Username box and send "team21employee"
      And user click to Password box and send "team21Employee"
      And user click to Sign in button
      And user click to My Operations button
      And user click to Manage Accounts button
      And user click to Create New Account button

      Scenario: TC001 Employee Creates Description
      And user leaves the description box blank
      Then verify the message is "This field is required."
      And user click again to Description box and send "My Account"
      Then verify the warning message is not displayed

      Scenario: TC002 Employee Provides Balance
      And user leaves the Balance box blank
      Then verify the message is "This field is required."
      And user provides Balance "A"
      Then verify the message is "This field should be a number"
      And user provides Balance "*"
      Then verify the message is "This field should be a num  ber"
      And user provides Balance "1000"
      Then verify the warning message is not displayed

      Scenario: User provides negative balance
        And user provides negative Balance "-100"


      Scenario: TC003 Employee Selects AccountType
      And user click to Account Type box and select Account Type

      Scenario:
      And user click to Account Status Type box and select Account Status Type
      Then user click to Employee box and select an employee

