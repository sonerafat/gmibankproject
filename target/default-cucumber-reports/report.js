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
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@employeeAccCreation"
=======
      "name": "@registrationpage"
    }
  ]
});
<<<<<<< HEAD
formatter.scenarioOutline({
  "name": "TC_0001 User type to New Password_There should be at least 1 uppercase char",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click to dropdown button",
  "keyword": "Given "
});
formatter.step({
  "name": "user click to register button",
  "keyword": "Then "
});
formatter.step({
  "name": "user click to New Password button",
  "keyword": "And "
});
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
  "name": "TC_0001 User type to New Password_There should be at least 1 uppercase char",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@registrationpage"
    }
  ]
});
formatter.step({
  "name": "user click to dropdown button",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_dropdown_button()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
  "name": "User go to GMI Bank homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user got to GMI Bank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_got_to_GMI_Bank_homepage()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
  "name": "check the bar level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.check_the_bar_level()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.verify_level()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat gmibank.stepdefinitions.US_003_Registration_Password_sd.verify_level(US_003_Registration_Password_sd.java:82)\r\n\tat ✽.verify level(file:///C:/Users/Administrator/IdeaProjects/gmibankproject/src/test/resources/features/US_003_Registration_Password.feature:15)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshots");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0002 User type to New Password_There should be at least 1 lowercase char",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click to dropdown button",
  "keyword": "Given "
});
formatter.step({
  "name": "user click to register button",
  "keyword": "Then "
});
formatter.step({
  "name": "user click to New Password button",
  "keyword": "And "
});
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
  "name": "TC_0002 User type to New Password_There should be at least 1 lowercase char",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@registrationpage"
    }
  ]
});
formatter.step({
  "name": "user click to dropdown button",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_dropdown_button()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
formatter.scenarioOutline({
  "name": "TC_0003 User type to New Password_There should be at least 1 digit",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click to dropdown button",
  "keyword": "Given "
});
formatter.step({
  "name": "user click to register button",
  "keyword": "Then "
});
formatter.step({
  "name": "user click to New Password button",
  "keyword": "And "
});
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
        "\"\u003c1aaaaaa\u003e\""
      ]
    }
  ]
});
formatter.background({
  "name": "User go to GMI Bank homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user got to GMI Bank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_got_to_GMI_Bank_homepage()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
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
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_dropdown_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to register button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to New Password button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_New_Password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user type New \"\u003c1aaaaaa\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_type_New(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the bar level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.check_the_bar_level()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.verify_level()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0004 User type to New Password_There should be  at least 1 special char",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click to dropdown button",
  "keyword": "Given "
});
formatter.step({
  "name": "user click to register button",
  "keyword": "Then "
});
formatter.step({
  "name": "user click to New Password button",
  "keyword": "And "
});
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
        "\"\u003c.aaaaaa\u003e\""
      ]
    }
  ]
});
formatter.background({
  "name": "User go to GMI Bank homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user got to GMI Bank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_got_to_GMI_Bank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0004 User type to New Password_There should be  at least 1 special char",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@registrationpage"
    }
  ]
});
formatter.step({
  "name": "user click to dropdown button",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_dropdown_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to register button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to New Password button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_New_Password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user type New \"\u003c.aaaaaa\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_type_New(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the bar level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.check_the_bar_level()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.verify_level()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0005 User type to New Password_There should be at least 7 chars",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click to dropdown button",
  "keyword": "Given "
});
formatter.step({
  "name": "user click to register button",
  "keyword": "Then "
});
formatter.step({
  "name": "user click to New Password button",
  "keyword": "And "
});
formatter.step({
  "name": "user type New \"\u003cPassword\u003e\"",
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
        "Aaaaaaa"
      ]
    },
    {
      "cells": [
        "Aaaa12"
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
  "name": "TC_0005 User type to New Password_There should be at least 7 chars",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@registrationpage"
    }
  ]
});
formatter.step({
  "name": "user click to dropdown button",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_dropdown_button()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
=======
>>>>>>> master
formatter.background({
  "name": "User go to GMI Bank homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user got to GMI Bank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_got_to_GMI_Bank_homepage()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
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
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_dropdown_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to register button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_register_button()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_New_Password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user type New \"Aaaa12\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_type_New(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the bar level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.check_the_bar_level()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.verify_level()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat gmibank.stepdefinitions.US_003_Registration_Password_sd.verify_level(US_003_Registration_Password_sd.java:82)\r\n\tat ✽.verify level(file:///C:/Users/Administrator/IdeaProjects/gmibankproject/src/test/resources/features/US_003_Registration_Password.feature:70)\r\n",
>>>>>>> master
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshots");
formatter.after({
  "status": "passed"
});
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
  "description": "",
  "keyword": "Scenario",
>>>>>>> master
  "tags": [
    {
      "name": "@registrationpage"
    }
  ]
});
<<<<<<< HEAD
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click to Password box and send \"team21Employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Password_box_and_send(java.lang.String)"
=======
  "name": "user type Username \"team21customer\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_type_Username(java.lang.String)"
=======
formatter.step({
  "name": "user clik to register box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_clik_to_register_box()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click to Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Sign_in_button()"
=======
<<<<<<< HEAD
  "name": "user click to Password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_to_Password()"
=======
  "name": "user clik to register button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_clik_to_register_button()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click to Create New Account button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Create_New_Account_button()"
=======
  "name": "user click My Operation button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_My_Operation_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Manage Accounts button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_Manage_Accounts_button()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
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
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.check_all_account_types()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check all balance",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.check_all_balance()"
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
  "name": "Employee goes to GMI Bank homepage",
=======
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
=======
  "name": "user clik to SSn number box and send \"454-42-1223\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_clik_to_SSn_number_box_and_send(java.lang.String)"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
=======
  "name": "user click to first name box and send \"Hans\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_first_name_box_and_send(java.lang.String)"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click to Username box and send \"team21employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Username_box_and_send(java.lang.String)"
=======
<<<<<<< HEAD
  "name": "user click User name button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_User_name_button()"
=======
  "name": "user click to last name box and send \"Kern\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_last_name_box_and_send(java.lang.String)"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click to Password box and send \"team21Employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Password_box_and_send(java.lang.String)"
=======
<<<<<<< HEAD
  "name": "user type Username \"team21customer\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_type_Username(java.lang.String)"
=======
  "name": "user click to address box and send \"Ernst Straße 2, 17299 Hamburg\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_address_box_and_send(java.lang.String)"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click to Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Sign_in_button()"
=======
<<<<<<< HEAD
  "name": "user click to Password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_to_Password()"
=======
  "name": "user click to mobile phone number box and send \"404-421-2236\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_mobile_phone_number_box_and_send(java.lang.String)"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click My Operation button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_My_Operation_button()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click to Create New Account button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Create_New_Account_button()"
=======
  "name": "user click Manage Accounts button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_Manage_Accounts_button()"
=======
  "name": "user click to username box and send \"hanskern1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_username_box_and_send(java.lang.String)"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
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
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_view_transaction()"
=======
formatter.step({
  "name": "user click to email box and send \"hanskern@fakemail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_email_box_and_send(java.lang.String)"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
>>>>>>> master
formatter.after({
  "status": "passed"
});
});