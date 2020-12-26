package gmibank.stepdefinitions;
import gmibank.pojos.Country;
import gmibank.utilities.ConfigReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import java.util.ArrayList;
import java.util.List;
import static io.restassured.RestAssured.*;

public class US_025_Country_Create {

    Response responseAll;

    @Given("User set response with end point {string} and post {string} {string}")
    public void user_set_response_with_end_point_and_post(String string, String string2, String string3) {
        Response response = given().accept(ContentType.JSON).auth().oauth2(ConfigReader.getProperty("token")).when().get(string).then().extract().response();
//       response.prettyPrint();

        responseAll= given().contentType(ContentType.JSON).auth().oauth2(ConfigReader.getProperty("token")).when().body("{\""+string2+"\":\""+string3+"\"}").post(string).then().extract().response();
        responseAll.prettyPrint();

    }

    @Then("User validate countries using {string}")
    public void user_validate_countries_using(String string) {

        responseAll = given().accept(ContentType.JSON).auth().oauth2(ConfigReader.getProperty("token")).when().get(string).then().extract().response();
        responseAll.prettyPrint();

        JsonPath jsonPath= responseAll.jsonPath();
        List<String> countries = jsonPath.getList("name");
        System.out.println(countries);
        Assert.assertTrue(countries.contains("JUSTICE COUNTRY"));

    }

}
