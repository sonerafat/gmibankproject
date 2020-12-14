<<<<<<< HEAD
<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/empAccCreation.feature");
formatter.feature({
  "name": "Go to homepage",
=======
<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_003_Registration_Password.feature");
formatter.feature({
  "name": "Go to Registration Page",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/registration.feature");
formatter.feature({
  "name": "Go to homepage",
>>>>>>> master
>>>>>>> master
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/customer.feature");
formatter.feature({
  "name": "Go to Customer",
>>>>>>> refs/remotes/origin/master
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      "name": "@employeeAccCreation"
=======
      "name": "@registrationpage"
=======
      "name": "@CreateCustomer"
>>>>>>> refs/remotes/origin/master
    }
  ]
});
formatter.background({
  "name": "Go to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click to login icon",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToLoginIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click link sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickLinkSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "verify level",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Password"
      ]
    },
    {
      "cells": [
        "\"\u003cAaaaaaa\u003e\""
      ]
    },
    {
      "cells": [
        "\"\u003cAaaa\u003e\""
      ]
>>>>>>> master
    }
  ]
});
formatter.background({
<<<<<<< HEAD
  "name": "Employee goes to GMI Bank homepage",
=======
  "name": "User go to GMI Bank homepage",
>>>>>>> master
  "description": "",
  "keyword": "Background"
=======
  "name": "user enter username as  \"team21user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterUsernameAs(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "employee goes to GMI Bank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.employee_goes_to_GMI_Bank_homepage()"
=======
  "name": "user got to GMI Bank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_got_to_GMI_Bank_homepage()"
>>>>>>> master
=======
  "name": "user enter password as  \"team21User\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterPasswordAs(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
<<<<<<< HEAD
formatter.step({
  "name": "user click to login icon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_login_icon()"
=======
formatter.scenario({
  "name": "TC_0001 User type to New Password_There should be at least 1 uppercase char",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@registrationpage"
    }
  ]
=======
formatter.step({
  "name": "user click to sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToSignInButton()"
});
formatter.result({
  "status": "passed"
>>>>>>> refs/remotes/origin/master
});
formatter.step({
  "name": "user click to my operations link",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_dropdown_button()"
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToMyOperationsLink()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Sign_in()"
=======
  "name": "user click to register button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_register_button()"
>>>>>>> master
=======
  "name": "user clcik to manage customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClcikToManageCustomer()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Username box and send \"team21employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Username_box_and_send(java.lang.String)"
=======
  "name": "user click to New Password button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_New_Password_button()"
>>>>>>> master
=======
  "name": "user click to button create new customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToButtonCreateNewCustomer()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify SSN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Password box and send \"team21Employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Password_box_and_send(java.lang.String)"
=======
  "name": "user type New \"\u003cAaaaaaa\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_type_New(java.lang.String)"
>>>>>>> master
=======
  "name": "user enter valid ssn",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userEnterValidSsn()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Sign_in_button()"
=======
  "name": "check the bar level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.check_the_bar_level()"
>>>>>>> master
=======
  "name": "user click to searchButton on create new customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToSearchButtonOnCreateNewCustomer()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to My Operations button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_My_Operations_button()"
=======
  "name": "verify level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.verify_level()"
>>>>>>> master
=======
  "name": "Check FirstName should see textBox",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.checkFirstNameShouldSeeTextBox()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.step({
  "name": "user click to Manage Accounts button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Manage_Accounts_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to Create New Account button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Create_New_Account_button()"
=======
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Go to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click to login icon",
  "keyword": "Given "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_got_to_GMI_Bank_homepage()"
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToLoginIcon()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.scenario({
<<<<<<< HEAD
  "name": "TC001 Employee Creates Description",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@employeeAccCreation"
    },
    {
      "name": "@Description"
=======
  "name": "TC_0001 User type to New Password_There should be at least 1 uppercase char",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@registrationpage"
>>>>>>> master
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "user leaves the description box blank",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_leaves_the_description_box_blank()"
=======
  "name": "user click to dropdown button",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_dropdown_button()"
>>>>>>> master
=======
formatter.step({
  "name": "user click link sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickLinkSignIn()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "verify the message is \"This field is required.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.verify_the_message_is(java.lang.String)"
=======
  "name": "user click to register button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_register_button()"
>>>>>>> master
=======
  "name": "user enter username as  \"team21user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterUsernameAs(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click again to Description box and send \"My Account\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_again_to_Description_box_and_send(java.lang.String)"
=======
  "name": "user click to New Password button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_New_Password_button()"
>>>>>>> master
=======
  "name": "user enter password as  \"team21User\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterPasswordAs(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "verify the warning message is not displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.verify_the_warning_message_is_not_displayed()"
=======
  "name": "user type New \"\u003cAaaa\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_type_New(java.lang.String)"
>>>>>>> master
=======
  "name": "user click to sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToSignInButton()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Employee goes to GMI Bank homepage",
=======
formatter.step({
  "name": "user click to my operations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToMyOperationsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clcik to manage customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClcikToManageCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to button create new customer",
  "keyword": "And "
});
<<<<<<< HEAD
formatter.step({
  "name": "user type New \u003cPassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "check the bar level",
  "keyword": "Then "
});
formatter.step({
  "name": "verify level",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Password"
      ]
    },
    {
      "cells": [
        "\"\u003caAAAAAA\u003e\""
      ]
    }
  ]
});
formatter.background({
  "name": "User go to GMI Bank homepage",
>>>>>>> master
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "employee goes to GMI Bank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.employee_goes_to_GMI_Bank_homepage()"
=======
  "name": "user got to GMI Bank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_got_to_GMI_Bank_homepage()"
>>>>>>> master
=======
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToButtonCreateNewCustomer()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.step({
  "name": "user click to login icon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_login_icon()"
=======
formatter.scenario({
  "name": "Create new customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "name": "put  \"Robert\" into create firstname form",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_dropdown_button()"
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoCreateFirstnameForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Sign_in()"
=======
  "name": "user click to register button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_register_button()"
>>>>>>> master
=======
  "name": "put \"Sabin\" into create lastname form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoCreateLastnameForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Username box and send \"team21employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Username_box_and_send(java.lang.String)"
=======
  "name": "user click to New Password button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_New_Password_button()"
>>>>>>> master
=======
  "name": "put \"R.S.\" into middle initial customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMiddleInitialCustomerForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Password box and send \"team21Employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Password_box_and_send(java.lang.String)"
=======
  "name": "user type New \"\u003caAAAAAA\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_type_New(java.lang.String)"
>>>>>>> master
=======
  "name": "put \"infor@gmail.com\" into mail customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMailCustomerForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Sign_in_button()"
=======
  "name": "check the bar level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.check_the_bar_level()"
>>>>>>> master
=======
  "name": "put \"412-123-4589\" into mobile phoneNumber",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMobilePhoneNumber(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to My Operations button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_My_Operations_button()"
=======
  "name": "verify level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.verify_level()"
>>>>>>> master
=======
  "name": "put \"123-485-7889\" into phonenumber customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoPhonenumberCustomerForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
<<<<<<< HEAD
formatter.step({
  "name": "user click to Manage Accounts button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Manage_Accounts_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to Create New Account button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Create_New_Account_button()"
=======
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0003 User type to New Password_There should be at least 1 digit",
  "description": "",
  "keyword": "Scenario Outline"
});
=======
>>>>>>> refs/remotes/origin/master
formatter.step({
  "name": "put \"900180\" into zibcode customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoZibcodeCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"izmir buca\" into address customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoAddressCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"Sakarya\" cityForm into create customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putCityFormIntoCreateCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"789-45-9523\"into ssnForm customer form",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_got_to_GMI_Bank_homepage()"
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoSsnFormCustomerForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.scenario({
<<<<<<< HEAD
  "name": "TC002 Employee Provides Balance",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@employeeAccCreation"
    },
    {
      "name": "@Balance"
=======
  "name": "TC_0003 User type to New Password_There should be at least 1 digit",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@registrationpage"
>>>>>>> master
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "user leaves the Balance box blank",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_user_leaves_the_Balance_box_blank()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [This field is required. ] but found [This field is required.]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_user_leaves_the_Balance_box_blank(EmpAccCreationStepDefinitions.java:101)\r\n\tat ✽.user leaves the Balance box blank(file:///C:/Users/User/IdeaProjects/GmiBankFramework/src/test/resources/features/empAccCreation.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the message is \"This field is required.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.verify_the_message_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides string Balance \"A\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_provides_string_Balance(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the balance message is \"This field should be a number\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.verify_the_balance_message_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides symbol Balance \"*\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_provides_symbol_Balance(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the balance message is \"This field should be a number\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.verify_the_balance_message_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides positive Balance \"1000\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_provides_positive_Balance(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the balance warning message is not displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.verify_the_balance_warning_message_is_not_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides negative Balance \"-1000\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_provides_negative_Balance(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the wrong balance warning is \"This field should not be a negative number\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.verify_the_wrong_balance_warning_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshots");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Employee goes to GMI Bank homepage",
=======
  "name": "user click to dropdown button",
  "keyword": "Given "
=======
formatter.step({
  "name": "select date into customer form",
  "keyword": "And "
>>>>>>> refs/remotes/origin/master
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectDateIntoCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select country from customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectCountryFromCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"USA\" into state customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoStateCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select user from customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectUserFromCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select  account from customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectAccountFromCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to save button into customer form",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.clickToSaveButtonIntoCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Go to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click to login icon",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToLoginIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click link sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickLinkSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as  \"team21user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterUsernameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as  \"team21User\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterPasswordAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to my operations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToMyOperationsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clcik to manage customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClcikToManageCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to button create new customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToButtonCreateNewCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Data validation-address on create customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "name": "click to save button into customer form",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.clickToSaveButtonIntoCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see an error message under address textbox \"This field is required.\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userShouldSeeAnErrorMessageUnderAddressTextbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Go to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click to login icon",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToLoginIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click link sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickLinkSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as  \"team21user\"",
  "keyword": "And "
});
<<<<<<< HEAD
formatter.background({
  "name": "User go to GMI Bank homepage",
>>>>>>> master
  "description": "",
  "keyword": "Background"
=======
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterUsernameAs(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "employee goes to GMI Bank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.employee_goes_to_GMI_Bank_homepage()"
=======
  "name": "user got to GMI Bank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_got_to_GMI_Bank_homepage()"
>>>>>>> master
=======
  "name": "user enter password as  \"team21User\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterPasswordAs(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
<<<<<<< HEAD
formatter.step({
  "name": "user click to login icon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_login_icon()"
=======
formatter.scenario({
  "name": "TC_0005 User type to New Password_There should be at least 7 chars",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@registrationpage"
    }
  ]
});
=======
>>>>>>> refs/remotes/origin/master
formatter.step({
  "name": "user click to sign in button",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_dropdown_button()"
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToSignInButton()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Sign_in()"
=======
  "name": "user click to register button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_register_button()"
>>>>>>> master
=======
  "name": "user click to my operations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToMyOperationsLink()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Username box and send \"team21employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Username_box_and_send(java.lang.String)"
=======
  "name": "user click to New Password button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_New_Password_button()"
>>>>>>> master
=======
  "name": "user clcik to manage customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClcikToManageCustomer()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Password box and send \"team21Employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Password_box_and_send(java.lang.String)"
=======
  "name": "user type New \"Aaaaaaa\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_type_New(java.lang.String)"
>>>>>>> master
=======
  "name": "user click to button create new customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToButtonCreateNewCustomer()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Data validation-city on create customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Sign_in_button()"
=======
  "name": "check the bar level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.check_the_bar_level()"
>>>>>>> master
=======
  "name": "click to save button into customer form",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.clickToSaveButtonIntoCustomerForm()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to My Operations button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_My_Operations_button()"
=======
  "name": "verify level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.verify_level()"
>>>>>>> master
=======
  "name": "User should see an error message under city textbox \"This field is required.\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userShouldSeeAnErrorMessageUnderCityTextbox(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.step({
  "name": "user click to Manage Accounts button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Manage_Accounts_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to Create New Account button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Create_New_Account_button()"
=======
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Go to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click to login icon",
  "keyword": "Given "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_got_to_GMI_Bank_homepage()"
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToLoginIcon()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.scenario({
<<<<<<< HEAD
  "name": "TC003 Employee Selects AccountType",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@employeeAccCreation"
    },
    {
      "name": "@AccountType"
=======
<<<<<<< HEAD
  "name": "TC_0005 User type to New Password_There should be at least 7 chars",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@registrationpage"
>>>>>>> master
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "user selects Account Type and verifies the options",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_selects_Account_Type_and_verifies_the_options()"
=======
  "name": "user click to dropdown button",
  "keyword": "Given "
=======
formatter.step({
  "name": "user click link sign in",
  "keyword": "And "
>>>>>>> refs/remotes/origin/master
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickLinkSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as  \"team21user\"",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_register_button()"
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterUsernameAs(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user does not select any option and checks the warning",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_does_not_select_any_option_and_checks_the_warning()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [Please select account type] but found [CHECKING]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_does_not_select_any_option_and_checks_the_warning(EmpAccCreationStepDefinitions.java:167)\r\n\tat ✽.user does not select any option and checks the warning(file:///C:/Users/User/IdeaProjects/GmiBankFramework/src/test/resources/features/empAccCreation.feature:45)\r\n",
=======
  "name": "user click to New Password button",
=======
  "name": "user enter password as  \"team21User\"",
>>>>>>> refs/remotes/origin/master
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterPasswordAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to my operations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToMyOperationsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clcik to manage customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClcikToManageCustomer()"
});
formatter.result({
<<<<<<< HEAD
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat gmibank.stepdefinitions.US_003_Registration_Password_sd.verify_level(US_003_Registration_Password_sd.java:82)\r\n\tat ✽.verify level(file:///C:/Users/Administrator/IdeaProjects/gmibankproject/src/test/resources/features/US_003_Registration_Password.feature:70)\r\n",
>>>>>>> master
  "status": "failed"
=======
  "status": "passed"
>>>>>>> refs/remotes/origin/master
});
formatter.step({
  "name": "user click to button create new customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToButtonCreateNewCustomer()"
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
<<<<<<< HEAD
formatter.background({
  "name": "Employee goes to GMI Bank homepage",
=======
formatter.uri("file:src/test/resources/features/US_015_Manage_Account.feature");
formatter.feature({
  "name": "go to Registration Page",
  "description": "",
  "keyword": "Feature",
=======
  "name": "TC_001-007 User type several informations",
=======
formatter.scenario({
  "name": "Data validation-country on create customer",
>>>>>>> refs/remotes/origin/master
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateCustomer"
    }
  ]
});
<<<<<<< HEAD
<<<<<<< HEAD
formatter.background({
  "name": "User go to GMI Bank homepage",
>>>>>>> master
  "description": "",
  "keyword": "Background"
=======
formatter.step({
  "name": "put  \"Robert\" into create firstname form",
  "keyword": "And "
>>>>>>> refs/remotes/origin/master
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoCreateFirstnameForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "employee goes to GMI Bank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.employee_goes_to_GMI_Bank_homepage()"
=======
  "name": "user got to GMI Bank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_got_to_GMI_Bank_homepage()"
>>>>>>> master
=======
  "name": "put \"Sabin\" into create lastname form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoCreateLastnameForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to login icon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_login_icon()"
=======
  "name": "user click to dropdown button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_dropdown_button()"
>>>>>>> master
=======
  "name": "put \"R.S.\" into middle initial customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMiddleInitialCustomerForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Sign_in()"
=======
  "name": "user click to Sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_to_Sign_in_button()"
>>>>>>> master
=======
  "name": "put \"infor@gmail.com\" into mail customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMailCustomerForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Username box and send \"team21employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Username_box_and_send(java.lang.String)"
=======
  "name": "user click User name button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_User_name_button()"
>>>>>>> master
=======
  "name": "put \"412-123-4589\" into mobile phoneNumber",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMobilePhoneNumber(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Password box and send \"team21Employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Password_box_and_send(java.lang.String)"
=======
  "name": "user type Username \"team21customer\"",
=======
  "name": "put \"123-485-7889\" into phonenumber customer form",
>>>>>>> refs/remotes/origin/master
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoPhonenumberCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"900180\" into zibcode customer form",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_clik_to_register_box()"
>>>>>>> master
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoZibcodeCustomerForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Sign_in_button()"
=======
<<<<<<< HEAD
  "name": "user click to Password",
=======
  "name": "put \"izmir buca\" into address customer form",
>>>>>>> refs/remotes/origin/master
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoAddressCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"Sakarya\" cityForm into create customer form",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_clik_to_register_button()"
>>>>>>> master
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putCityFormIntoCreateCustomerForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to My Operations button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_My_Operations_button()"
=======
<<<<<<< HEAD
  "name": "user type Password \"team21Customer\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_type_Password(java.lang.String)"
>>>>>>> master
=======
  "name": "put \"789-45-9523\"into ssnForm customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoSsnFormCustomerForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Manage Accounts button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Manage_Accounts_button()"
=======
  "name": "user click Sign in",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_Sign_in()"
>>>>>>> master
=======
  "name": "select date into customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectDateIntoCustomerForm()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Create New Account button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Create_New_Account_button()"
=======
  "name": "user click My Operation button",
  "keyword": "Then "
=======
  "name": "select country from customer form index \"0\"",
  "keyword": "And "
>>>>>>> refs/remotes/origin/master
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectCountryFromCustomerFormIndex(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"USA\" into state customer form",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_Manage_Accounts_button()"
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoStateCustomerForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.scenario({
<<<<<<< HEAD
  "name": "TC004 Employee Selects Account Status Type",
=======
  "name": "TC_0001 User should see all account types and balace populated",
>>>>>>> master
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@employeeAccCreation"
    },
    {
      "name": "@AccountStatusType"
=======
      "name": "@registrationpage"
>>>>>>> master
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "user selects Account Status Type and verifies the options",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_selects_Account_Status_Type_and_verifies_the_options()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [SUSPENDED] but found [SUESPENDED]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_selects_Account_Status_Type_and_verifies_the_options(EmpAccCreationStepDefinitions.java:191)\r\n\tat ✽.user selects Account Status Type and verifies the options(file:///C:/Users/User/IdeaProjects/GmiBankFramework/src/test/resources/features/empAccCreation.feature:49)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user does not select any option and gets warning",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_does_not_select_any_option_and_gets_warning()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", "screenshots");
=======
  "name": "check all account types",
=======
formatter.step({
  "name": "select user from customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectUserFromCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select  account from customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectAccountFromCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to save button into customer form",
>>>>>>> refs/remotes/origin/master
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.clickToSaveButtonIntoCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be seen error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userShouldBeSeenErrorMessage()"
});
formatter.result({
  "status": "passed"
});
>>>>>>> master
formatter.after({
  "status": "passed"
});
formatter.background({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "Employee goes to GMI Bank homepage",
=======
  "name": "User go to GMI Bank homepage",
>>>>>>> master
=======
  "name": "Go to login",
>>>>>>> refs/remotes/origin/master
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "employee goes to GMI Bank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.employee_goes_to_GMI_Bank_homepage()"
=======
  "name": "user got to GMI Bank homepage",
=======
  "name": "user click to login icon",
>>>>>>> refs/remotes/origin/master
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToLoginIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click link sign in",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_clik_to_SSn_number_box_and_send(java.lang.String)"
>>>>>>> master
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickLinkSignIn()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to login icon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_login_icon()"
=======
<<<<<<< HEAD
  "name": "user click to dropdown button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_dropdown_button()"
>>>>>>> master
=======
  "name": "user enter username as  \"team21user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterUsernameAs(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Sign_in()"
=======
  "name": "user click to Sign in button",
  "keyword": "Then "
=======
  "name": "user enter password as  \"team21User\"",
  "keyword": "And "
>>>>>>> refs/remotes/origin/master
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterPasswordAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to sign in button",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_first_name_box_and_send(java.lang.String)"
>>>>>>> master
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToSignInButton()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Username box and send \"team21employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Username_box_and_send(java.lang.String)"
=======
<<<<<<< HEAD
  "name": "user click User name button",
=======
  "name": "user click to my operations link",
>>>>>>> refs/remotes/origin/master
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToMyOperationsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clcik to manage customer",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_last_name_box_and_send(java.lang.String)"
>>>>>>> master
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClcikToManageCustomer()"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Password box and send \"team21Employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Password_box_and_send(java.lang.String)"
=======
<<<<<<< HEAD
  "name": "user type Username \"team21customer\"",
=======
  "name": "user click to button create new customer",
>>>>>>> refs/remotes/origin/master
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToButtonCreateNewCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Data validation-state on create customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "name": "put  \"Robert\" into create firstname form",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_address_box_and_send(java.lang.String)"
>>>>>>> master
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoCreateFirstnameForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Sign_in_button()"
=======
<<<<<<< HEAD
  "name": "user click to Password",
=======
  "name": "put \"Sabin\" into create lastname form",
>>>>>>> refs/remotes/origin/master
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoCreateLastnameForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"R.S.\" into middle initial customer form",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_mobile_phone_number_box_and_send(java.lang.String)"
>>>>>>> master
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMiddleInitialCustomerForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to My Operations button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_My_Operations_button()"
=======
<<<<<<< HEAD
  "name": "user type Password \"team21Customer\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_type_Password(java.lang.String)"
>>>>>>> master
=======
  "name": "put \"infor@gmail.com\" into mail customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMailCustomerForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Manage Accounts button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Manage_Accounts_button()"
=======
  "name": "user click Sign in",
  "keyword": "Then "
=======
  "name": "put \"412-123-4589\" into mobile phoneNumber",
  "keyword": "And "
>>>>>>> refs/remotes/origin/master
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMobilePhoneNumber(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"123-485-7889\" into phonenumber customer form",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_My_Operation_button()"
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoPhonenumberCustomerForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
<<<<<<< HEAD
  "name": "user click to Create New Account button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Create_New_Account_button()"
=======
  "name": "user click Manage Accounts button",
  "keyword": "Then "
=======
  "name": "put \"900180\" into zibcode customer form",
  "keyword": "And "
>>>>>>> refs/remotes/origin/master
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoZibcodeCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"izmir buca\" into address customer form",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_username_box_and_send(java.lang.String)"
>>>>>>> master
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoAddressCustomerForm(java.lang.String)"
>>>>>>> refs/remotes/origin/master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
<<<<<<< HEAD
formatter.scenario({
  "name": "TC005 Selecting employee",
=======
<<<<<<< HEAD
formatter.scenario({
  "name": "TC_0002 User can view transaction",
>>>>>>> master
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@employeeAccCreation"
    },
    {
      "name": "@EmployeeSelection"
=======
      "name": "@registrationpage"
>>>>>>> master
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "user click to Employee box and select employee as \"emrullahd\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Employee_box_and_select_employee_as(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [emrullahd] but found []\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Employee_box_and_select_employee_as(EmpAccCreationStepDefinitions.java:200)\r\n\tat ✽.user click to Employee box and select employee as \"emrullahd\"(file:///C:/Users/User/IdeaProjects/GmiBankFramework/src/test/resources/features/empAccCreation.feature:54)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png", "screenshots");
=======
  "name": "user view transaction",
=======
formatter.step({
  "name": "put \"Sakarya\" cityForm into create customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putCityFormIntoCreateCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"789-45-9523\"into ssnForm customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoSsnFormCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select date into customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectDateIntoCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select country from customer form index \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectCountryFromCustomerFormIndex(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "leave blank into state customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.leaveBlankIntoStateCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select user from customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectUserFromCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select  account from customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectAccountFromCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to save button into customer form",
>>>>>>> refs/remotes/origin/master
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.clickToSaveButtonIntoCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be seen error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userShouldBeSeenErrorMessage()"
});
formatter.result({
  "status": "passed"
});
>>>>>>> master
formatter.after({
  "status": "passed"
});
});