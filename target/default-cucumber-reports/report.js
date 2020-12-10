$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/customer.feature");
formatter.feature({
  "name": "Go to login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateCustomer"
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
  "name": "user enter valid ssn",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userEnterValidSsn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to searchButton on create new customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToSearchButtonOnCreateNewCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check FirstName should see textBox",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.checkFirstNameShouldSeeTextBox()"
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
  "name": "User should see an error message under city textbox \"This field is required.\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userShouldSeeAnErrorMessageUnderCityTextbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});