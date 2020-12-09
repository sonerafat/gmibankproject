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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"entity-menu\"]/a/span\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-GJUD146\u0027, ip: \u0027192.168.100.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\ASUS\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:56411}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8e9e746f9c31bb959965a09c4d220dc2\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"entity-menu\"]/a/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToMyOperationsLink(CreateCustomerStepDefinitions.java:42)\r\n\tat ✽.user click to my operations link(file:///C:/Users/ASUS/IdeaProjects/gmibankproject/src/test/resources/features/customer.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clcik to manage customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClcikToManageCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to button create new customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToButtonCreateNewCustomer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user click to searchButton on create new customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToSearchButtonOnCreateNewCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check FirstName should see textBox",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.checkFirstNameShouldSeeTextBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshots");
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
  "name": "Data validation on create customer-address",
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
  "name": "User should see an error message under address textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userShouldSeeAnErrorMessageUnderAddressTextbox()"
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
  "name": "Data validation on create customer-city",
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
  "name": "User should see an error message under city textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userShouldSeeAnErrorMessageUnderCityTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});