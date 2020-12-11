$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/empAccCreation.feature");
formatter.feature({
  "name": "Go to homepage",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@employeesignin"
    }
  ]
});
formatter.background({
  "name": "Employee goes to GMI Bank homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "employee goes to GMI Bank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.employee_goes_to_GMI_Bank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login icon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_login_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to Sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to Username box and send \"team21employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Username_box_and_send(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to Password box and send \"team21Employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Password_box_and_send(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Sign_in_button()"
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
  "name": "user click to Manage Accounts button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Manage_Accounts_buttton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to Create New Account button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Create_New_Account_buttton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC001 Employee Creates Description",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@employeesignin"
    }
  ]
});
formatter.step({
  "name": "user click to Description box and send \" \"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Description_box_and_send(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the message is \"This field is required.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.verify_the_message_is(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"This field is required.\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KNL8SGH\u0027, ip: \u0027192.168.1.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59567}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7056656276b4b7bcc5581b91d9d37e05\n*** Element info: {Using\u003dlink text, value\u003dThis field is required.}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat gmibank.stepdefinitions.EmpAccCreationStepDefinitions.verify_the_message_is(EmpAccCreationStepDefinitions.java:68)\r\n\tat ✽.verify the message is \"This field is required.\"(file:///C:/Users/User/IdeaProjects/GmiBankFramework/src/test/resources/features/empAccCreation.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to change window state to \u0027normal\u0027, current state is \u0027maximized\u0027\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KNL8SGH\u0027, ip: \u0027192.168.1.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59567}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7056656276b4b7bcc5581b91d9d37e05\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:55)\r\n\tat gmibank.stepdefinitions.Hooks.tearDown(Hooks.java:19)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Employee goes to GMI Bank homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "employee goes to GMI Bank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.employee_goes_to_GMI_Bank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login icon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_login_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to Sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Sign_in()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#login\\-item\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KNL8SGH\u0027, ip: \u0027192.168.1.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59567}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7056656276b4b7bcc5581b91d9d37e05\n*** Element info: {Using\u003did, value\u003dlogin-item}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Sign_in(EmpAccCreationStepDefinitions.java:27)\r\n\tat ✽.user click to Sign in(file:///C:/Users/User/IdeaProjects/GmiBankFramework/src/test/resources/features/empAccCreation.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click to Username box and send \"team21employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_clik_to_Username_box_and_send(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to Password box and send \"team21Employee\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Password_box_and_send(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to My Operations button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_My_Operations_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to Manage Accounts button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Manage_Accounts_buttton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to Create New Account button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Create_New_Account_buttton()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@employeesignin"
    }
  ]
});
formatter.step({
  "name": "user click to Description box and send \"My Account\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Description_box_and_send(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the message is not displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.verify_the_message_is_not_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshots");
formatter.after({
  "status": "passed"
});
});