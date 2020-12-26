package gmibank.stepdefinitions;

import com.fasterxml.jackson.databind.ObjectMapper;
import gmibank.pojos.Customer;
import gmibank.pojos.States;
import gmibank.utilities.ConfigReader;
import gmibank.utilities.ReadTxt;
import gmibank.utilities.WriteTxt;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.mapper.ObjectMapperDeserializationContext;
import io.restassured.mapper.ObjectMapperSerializationContext;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import static io.restassured.RestAssured.given;


public class US_22_StateApiStepDefinitions {

    Response response;
    Response responseAll;
    States[] states;

    @Given("user sets the response using api endpoint {string} and creates state using {string} and {string}")
    public void user_sets_the_response_using_api_endpoint_and_creates_state_using_and(String url, String type, String state) {

//        response = given().headers(
//                "Authorization",
//                "Bearer " + ConfigReader.getProperty("token"),
//                "Content-Type",
//                ContentType.JSON,
//                "Accept",
//                ContentType.JSON)
//                .when().body("{\"" + type + "\":\"" + state + "\"}")
//                .post(url)
//                .then()
//                .contentType(ContentType.JSON)
//                .extract()
//                .response();
//        response.prettyPrint();
    }

    @Given("user sets the states to response using {string}")
    public void userSetsTheStatesToResponseUsing(String url) {
        responseAll = given().headers(
                "Authorization",
                "Bearer " + ConfigReader.getProperty("token"),
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON)
                .when()
                .get(url)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();

//           responseAll.prettyPrint();
    }

    @Given("user is deserializing state data to Java and validates")
    public void user_Is_Deserializing_state_data_to_java_and_validates() throws IOException {

        ObjectMapper obj = new ObjectMapper();
        states = obj.readValue(responseAll.asString(), States[].class);

        List<String> allStates = new ArrayList<>();
        for (int i = 0; i < states.length; i++) {
            allStates.add(String.valueOf(states[i].getId()));
        }

        WriteTxt.saveAllStates("src/test/resources/test_data/StatesInfo.txt", states);

        List<String> allStateIDs = new ArrayList<>();
        allStateIDs = ReadTxt.returnAllStates("src/test/resources/test_data/StatesInfo.txt");

        System.out.println(allStates);
        System.out.println(allStateIDs);
        Assert.assertEquals("not verify", allStates, allStateIDs);

        List<String> expectedStates = new ArrayList<>();
        expectedStates.add("61538");
        expectedStates.add("61539");
        expectedStates.add("61540");

//        System.out.println(allStateIDs);

        Assert.assertTrue(allStateIDs.containsAll(expectedStates));

        System.out.println("Data validation is successful!");

//        JsonPath jsonPath = responseAll.jsonPath();
//
//        String id = jsonPath.getString("id");
//        System.out.println(id);
//        Assert.assertTrue("not verify", id.contains("60661"));
            }

}