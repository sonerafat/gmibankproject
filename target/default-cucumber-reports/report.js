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
        "user@.com"
      ]
    },
    {
      "cells": [
        "user@gmailcom"
      ]
    },
    {
      "cells": [
        ".com@"
      ]
    },
    {
      "cells": [
        "212.com@"
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
  "location": "gmibank.stepdefinitions.UserInfo.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in as \"user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.sign_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user name and click on User info",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.click_on_user_name_and_click_on_User_info()"
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
      "name": "@userInfoPositiveTest"
    },
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
  "location": "gmibank.stepdefinitions.UserInfo.type_in_email_textbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the error message is \"This field is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.verify_the_error_message_is(java.lang.String)"
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
  "location": "gmibank.stepdefinitions.UserInfo.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in as \"user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.sign_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user name and click on User info",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.click_on_user_name_and_click_on_User_info()"
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
      "name": "@userInfoPositiveTest"
    },
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
  "location": "gmibank.stepdefinitions.UserInfo.type_in_email_textbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the error message is \"This field is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.verify_the_error_message_is(java.lang.String)"
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
  "location": "gmibank.stepdefinitions.UserInfo.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in as \"user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.sign_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user name and click on User info",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.click_on_user_name_and_click_on_User_info()"
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
      "name": "@userInfoPositiveTest"
    },
    {
      "name": "@userInfoNegativeTest"
    },
    {
      "name": "@NegativeEmail"
    }
  ]
});
formatter.step({
  "name": "Type \"user@.com\" in email textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.type_in_email_textbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the error message is \"This field is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.verify_the_error_message_is(java.lang.String)"
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
  "location": "gmibank.stepdefinitions.UserInfo.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in as \"user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.sign_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user name and click on User info",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.click_on_user_name_and_click_on_User_info()"
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
      "name": "@userInfoPositiveTest"
    },
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
  "location": "gmibank.stepdefinitions.UserInfo.type_in_email_textbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the error message is \"This field is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.verify_the_error_message_is(java.lang.String)"
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
  "location": "gmibank.stepdefinitions.UserInfo.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in as \"user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.sign_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user name and click on User info",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.click_on_user_name_and_click_on_User_info()"
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
      "name": "@userInfoPositiveTest"
    },
    {
      "name": "@userInfoNegativeTest"
    },
    {
      "name": "@NegativeEmail"
    }
  ]
});
formatter.step({
  "name": "Type \".com@\" in email textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.type_in_email_textbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the error message is \"This field is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.verify_the_error_message_is(java.lang.String)"
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
  "location": "gmibank.stepdefinitions.UserInfo.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in as \"user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.sign_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user name and click on User info",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.click_on_user_name_and_click_on_User_info()"
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
      "name": "@userInfoPositiveTest"
    },
    {
      "name": "@userInfoNegativeTest"
    },
    {
      "name": "@NegativeEmail"
    }
  ]
});
formatter.step({
  "name": "Type \"212.com@\" in email textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.type_in_email_textbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the error message is \"This field is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.UserInfo.verify_the_error_message_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});