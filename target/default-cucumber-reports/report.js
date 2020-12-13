$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/PasswordChange.feature");
formatter.feature({
  "name": "Password Strength",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PasswordStrength"
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
  "name": "Click on user icon and click on Password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordChange.click_on_user_icon_and_click_on_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"team21User\" to the current password textbox.",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordChange.enter_to_the_current_password_textbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PasswordStrength"
    },
    {
      "name": "@edit"
    }
  ]
});
formatter.step({
  "name": "Enter \"team21User\" to the New password textbox.",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordChange.enter_to_the_New_password_textbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"team21User\" to the New confirmation password textbox.",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordChange.enter_to_the_New_confirmation_password_textbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the save button.",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordChange.click_on_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.PasswordChange.there_should_be_a_Error_Message()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:969)\r\n\tat org.testng.Assert.assertTrue(Assert.java:43)\r\n\tat org.testng.Assert.assertTrue(Assert.java:53)\r\n\tat gmibank.stepdefinitions.PasswordChange.there_should_be_a_Error_Message(PasswordChange.java:52)\r\n\tat ✽.There should be a Error Message(file:///C:/Users/user/IdeaProjects/gmibankproject/src/test/resources/features/PasswordChange.feature:13)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshots");
formatter.after({
  "status": "passed"
});
});