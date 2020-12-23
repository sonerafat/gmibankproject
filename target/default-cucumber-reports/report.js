$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/apicountry.feature");
formatter.feature({
  "name": "read all country data",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@country"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@country"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user go to api end point \"https://www.gmibank.com/api/tp-countries\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ApiCountryStepDefinition.user_go_to_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "read all countries and write",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ApiCountryStepDefinition.read_all_countries_and_write()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate countries",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ApiCountryStepDefinition.validate_countries()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});