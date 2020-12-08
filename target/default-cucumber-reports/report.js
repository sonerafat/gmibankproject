$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/registration.feature");
formatter.feature({
  "name": "Go to homepage",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@registrationpage"
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
  "name": "TC_001-007 User type several informations",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@registrationpage"
    }
  ]
});
formatter.step({
  "name": "user clik to register box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_clik_to_register_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clik to register button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_clik_to_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clik to SSn number box and send \"454-42-1223\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_clik_to_SSn_number_box_and_send(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to first name box and send \"Hans\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_first_name_box_and_send(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to last name box and send \"Kern\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_last_name_box_and_send(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to address box and send \"Ernst Straße 2, 17299 Hamburg\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_address_box_and_send(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to mobile phone number box and send \"404-421-2236\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_mobile_phone_number_box_and_send(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to username box and send \"hanskern1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_username_box_and_send(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to email box and send \"hanskern@fakemail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepdefinition.user_click_to_email_box_and_send(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});