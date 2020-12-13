$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_006_UserInfo_Positive.feature");
formatter.feature({
  "name": "User Info Page Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@userInfoPositiveTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Testing Update first name functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@firstname"
    }
  ]
});
formatter.step({
  "name": "Type \"\u003cfirstname\u003e\" in first name textbox",
  "keyword": "And "
});
formatter.step({
  "name": "Click on save button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify the success message is \"Settings saved!\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname"
      ]
    },
    {
      "cells": [
        "team21"
      ]
    },
    {
      "cells": [
        "team21new"
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
  "name": "Testing Update first name functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@userInfoPositiveTest"
    },
    {
      "name": "@firstname"
    }
  ]
});
formatter.step({
  "name": "Type \"team21\" in first name textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.type_in_first_name_textbox(java.lang.String)"
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
  "name": "Verify the success message is \"Settings saved!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.Verify_the_success_message_is(java.lang.String)"
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
  "name": "Testing Update first name functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@userInfoPositiveTest"
    },
    {
      "name": "@firstname"
    }
  ]
});
formatter.step({
  "name": "Type \"team21new\" in first name textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.type_in_first_name_textbox(java.lang.String)"
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
  "name": "Verify the success message is \"Settings saved!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006_UserInfoPositive.Verify_the_success_message_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});