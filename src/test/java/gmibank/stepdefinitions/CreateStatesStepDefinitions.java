package gmibank.stepdefinitions;

import gmibank.utilities.ConfigReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.junit.CucumberOptions;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;

import static io.restassured.RestAssured.given;
public class CreateStatesStepDefinitions {
    Response responseAll=  given().
            accept(ContentType.JSON).
            auth().
            oauth2(ConfigReader.getProperty("token")).
            when().
            get("https://www.gmibank.com/api/tp-states").then().
            extract().
            response();
    JsonPath jsonPath =responseAll.jsonPath();
    List<String> statesName = jsonPath.getList("name");
    List<Integer> statesId =jsonPath.getList("id");
    @Given("user sets the response using api end point {string} using {string} and {string}")
    public void user_sets_the_response_using_api_end_point_using_and(String endpoint, String head, String id) {
        /*Response response = given().
                accept(ContentType.JSON).
                auth().
                oauth2(ConfigReader.getProperty("token")).
                when().
                get(endpoint).then().
                extract().
                response();
      // response.prettyPrint();*/



        responseAll= given().
                contentType(ContentType.JSON).
                auth().
                oauth2(ConfigReader.getProperty("token")).
                when().
                body("{\""+head+"\":\""+id+"\"}").
                post(endpoint).
                then().
                extract().
                response();
        responseAll.prettyPrint();


    }

    @Then("user validates created states using {string} and {string}")
    public void user_validates_created_states_using_and(String string, String stateName) {
        responseAll = given().
                accept(ContentType.JSON).
                auth().
                oauth2(ConfigReader.getProperty("token")).
                when().
                get(string).then().
                extract().
                response();
        //responseAll.prettyPrint();

        JsonPath jsonPath = responseAll.jsonPath();

        //System.out.println("IntLastId: "+ lastId);

        //System.out.println(statesId);


        Assert.assertTrue(statesName.contains(stateName));

        // System.out.println(statesId.get(statesId.size()-1));


    }
















}
