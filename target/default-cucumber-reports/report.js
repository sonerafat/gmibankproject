$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_003_Registration_Password.feature");
formatter.feature({
  "name": "Go to Registration Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@registrationpage"
    }
  ]
});
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
  "name": "user type New \"\u003cAaaaaaa\u003e\"",
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
  "name": "user type New \"\u003cAaaa\u003e\"",
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
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat gmibank.stepdefinitions.US_003_Registration_Password_sd.verify_level(US_003_Registration_Password_sd.java:84)\r\n\tat ✽.verify level(file:///C:/Users/user/IdeaProjects/gmibankproject/src/test/resources/features/US_003_Registration_Password.feature:15)\r\n",
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
  "name": "user type New \"\u003caAAAAAA\u003e\"",
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
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0003 User type to New Password_There should be at least 1 digit",
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
  "name": "user type New \"Aaaaaaa\"",
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
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat gmibank.stepdefinitions.US_003_Registration_Password_sd.verify_level(US_003_Registration_Password_sd.java:84)\r\n\tat ✽.verify level(file:///C:/Users/user/IdeaProjects/gmibankproject/src/test/resources/features/US_003_Registration_Password.feature:70)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshots");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US_015_Manage_Account.feature");
formatter.feature({
  "name": "go to Registration Page",
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
formatter.step({
  "name": "user click to dropdown button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_dropdown_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to Sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click User name button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_User_name_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027username\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-VEALI02\u0027, ip: \u0027172.30.16.211\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:65482}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 34602d3a23844c2b736ef96fd5c0d85f\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_User_name_button(US_015_Manege_Account_sd.java:29)\r\n\tat ✽.user click User name button(file:///C:/Users/user/IdeaProjects/gmibankproject/src/test/resources/features/US_015_Manage_Account.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user type Username \"team21customer\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_type_Username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to Password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_to_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user type Password \"team21Customer\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_type_Password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click Sign in",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_Sign_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click My Operation button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_My_Operation_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click Manage Accounts button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_Manage_Accounts_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC_0001 User should see all account types and balace populated",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@registrationpage"
    }
  ]
});
formatter.step({
  "name": "check all account types",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.check_all_account_types()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "check all balance",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.check_all_balance()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", "screenshots");
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to dropdown button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_003_Registration_Password_sd.user_click_to_dropdown_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to Sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.EmpAccCreationStepDefinitions.user_click_to_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click User name button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_User_name_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027username\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-VEALI02\u0027, ip: \u0027172.30.16.211\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:65516}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f8cf2701b8ab438f72ff6e665786b306\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_User_name_button(US_015_Manege_Account_sd.java:29)\r\n\tat ✽.user click User name button(file:///C:/Users/user/IdeaProjects/gmibankproject/src/test/resources/features/US_015_Manage_Account.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user type Username \"team21customer\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_type_Username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to Password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_to_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user type Password \"team21Customer\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_type_Password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click Sign in",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_Sign_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click My Operation button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_My_Operation_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click Manage Accounts button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_click_Manage_Accounts_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC_0002 User can view transaction",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@registrationpage"
    }
  ]
});
formatter.step({
  "name": "user view transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_015_Manege_Account_sd.user_view_transaction()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png", "screenshots");
formatter.after({
  "status": "passed"
});
});