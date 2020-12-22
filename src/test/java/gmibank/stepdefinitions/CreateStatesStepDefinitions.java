package gmibank.stepdefinitions;

import gmibank.utilities.ConfigReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import static io.restassured.RestAssured.given;

public class CreateStatesStepDefinitions {
    Response responseAll;
    @Given("user sets the response using api end point {string} using {string} and {string}")
    public void user_sets_the_response_using_api_end_point_using_and(String endpoint, String head, String id) {
        Response response = given().
                accept(ContentType.JSON).
                auth().
                oauth2(ConfigReader.getProperty("token")).
                when().
                get(endpoint).then().
                extract().
                response();
       // response.prettyPrint();

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
        //responseAll.prettyPrint();
    }

    @Then("user validates created states using {string}")
    public void user_validates_created_states_using(String string) {
        responseAll= given().
                accept(ContentType.JSON).
                auth().
                oauth2(ConfigReader.getProperty("token")).
                when().
                get(string).then().
                extract().
                response();
        responseAll.prettyPrint();

        JsonPath jsonPath= responseAll.jsonPath();


        String name =jsonPath.getString("name");
        String id= jsonPath.getString("id");

        Assert.assertTrue(name.contains("Province_0015"));
        Assert.assertTrue(name.contains("Province_0016"));
        Assert.assertTrue(id.contains("60586")); //Province_0017





    }
}
