@CreateCustomer
################################ login
Feature: Go to login
  Background: Go to login
    Given user click to login icon
    And user click link sign in
    And user enter username as  "team21user"
    And user enter password as  "team21User"
    And user click to sign in button

    And user click to my operations link
    And user clcik to manage customer
    And user click to button create new customer

  Scenario: Verify SSN
    And user enter valid ssn
    And user click to searchButton on create new customer
    Then Check FirstName should see textBox

################################ Create new customer

#  Scenario: Create new customer
#
#    And put  "Robert" into create firstname form
#    And put "Sabin" into create lastname form
#    And put "R.S." into middle initial customer form
#    And put "infor@gmail.com" into mail customer form
#    And put "412-123-4589" into mobile phoneNumber
#    And put "123-485-7889" into phonenumber customer form
#    And put "900180" into zibcode customer form
#    And put "izmir buca" into address customer form
#    And put "Sakarya" cityForm into create customer form
#    And put "789-45-9523"into ssnForm customer form
#    And select date into customer form
#    And select country from customer form
#    And put "USA" into state customer form
#    And select user from customer form
#    And select  account from customer form
#    Then click to save button into customer form

  ############################### negative scenario

  Scenario: Data validation on create customer-address
    Then click to save button into customer form
    And User should see an error message under address textbox

  Scenario: Data validation on create customer-city
    Then click to save button into customer form
    And User should see an error message under city textbox

