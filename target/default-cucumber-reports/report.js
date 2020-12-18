$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/neolacagibelliolmayanUS.feature");
formatter.feature({
  "name": "Admin manage customers",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bellidegil"
    }
  ]
});
formatter.background({
  "name": "entrance on the page",
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
  "name": "user click to My Operations button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_My_Operations_button()"
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
formatter.scenario({
  "name": "delete func",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bellidegil"
    },
    {
      "name": "@tc05"
    }
  ]
});
formatter.step({
  "name": "Click on delete button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.NeOlacagiBelliOlmayanUS.click_on_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify warning that warning message contains \"Are you sure you want to delete\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.NeOlacagiBelliOlmayanUS.verify_warning_that_warning_message_contains_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});