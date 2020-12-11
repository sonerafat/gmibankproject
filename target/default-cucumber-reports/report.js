$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_007_UserInfo_Negative.feature");
formatter.feature({
  "name": "User Info Page Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@userInfoNegativeTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Testing Update email functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeEmail"
    }
  ]
});
formatter.step({
  "name": "Type \"\u003cemail\u003e\" in email textbox",
  "keyword": "And "
});
formatter.step({
  "name": "Click on save button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify the error message is \"This field is invalid\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "Negative cases for email",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email"
      ]
    },
    {
      "cells": [
        "44321"
      ]
    },
    {
      "cells": [
        "usergmail.com"
      ]
    },
    {
      "cells": [
        "user@gmailcom"
      ]
    }
  ]
});
formatter.background({
  "name": "Entrance of the page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the icon and click on sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.click_on_the_icon_and_click_on_sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username and password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user name and click on User info",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.click_on_user_name_and_click_on_User_info()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing Update email functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@userInfoNegativeTest"
    },
    {
      "name": "@NegativeEmail"
    }
  ]
});
formatter.step({
  "name": "Type \"44321\" in email textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.type_in_email_textbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the error message is \"This field is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_007_UserInfoNegative.verify_the_error_message_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Entrance of the page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the icon and click on sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.click_on_the_icon_and_click_on_sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username and password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user name and click on User info",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.click_on_user_name_and_click_on_User_info()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing Update email functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@userInfoNegativeTest"
    },
    {
      "name": "@NegativeEmail"
    }
  ]
});
formatter.step({
  "name": "Type \"usergmail.com\" in email textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.type_in_email_textbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the error message is \"This field is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_007_UserInfoNegative.verify_the_error_message_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Entrance of the page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the icon and click on sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.click_on_the_icon_and_click_on_sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username and password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user name and click on User info",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.click_on_user_name_and_click_on_User_info()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing Update email functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@userInfoNegativeTest"
    },
    {
      "name": "@NegativeEmail"
    }
  ]
});
formatter.step({
  "name": "Type \"user@gmailcom\" in email textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.type_in_email_textbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the error message is \"This field is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_007_UserInfoNegative.verify_the_error_message_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Entrance of the page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the icon and click on sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.click_on_the_icon_and_click_on_sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username and password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user name and click on User info",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.click_on_user_name_and_click_on_User_info()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing language options",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@userInfoNegativeTest"
    },
    {
      "name": "@langtest"
    }
  ]
});
formatter.step({
  "name": "Verify that \"English\" and \"Turkish\" are only options in the drop box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_007_UserInfoNegative.verify_that_and_are_only_options_in_the_drop_box(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cT[ürkçe]\u003e but was:\u003cT[urkish]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat gmibank.stepdefinitions.US_007_UserInfoNegative.verify_that_and_are_only_options_in_the_drop_box(US_007_UserInfoNegative.java:25)\r\n\tat ✽.Verify that \"English\" and \"Turkish\" are only options in the drop box(file:///C:/Users/user/IdeaProjects/gmibankproject/src/test/resources/features/US_007_UserInfo_Negative.feature:22)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshots");
formatter.after({
  "status": "passed"
});
});