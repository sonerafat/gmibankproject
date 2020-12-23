package gmibank.stepdefinitions;

import com.github.javafaker.Country;
import gmibank.pojos.Customer;
import gmibank.utilities.ConfigReader;
import io.cucumber.java.en.Given;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

import java.util.List;

public class US_021_Read_All_Countries {
    Response response;
    Customer[] customers;

    @Given("user set response using api end point {string}")
    public void user_set_response_using_api_end_point(String uri) {
       response = given().headers("Authorization", "Bearer " + ConfigReader.getProperty("api_bearer_token"),
               "Content-Type", ContentType.JSON, "Accept", ContentType.JSON)
               .when()
               .get().then().contentType(ContentType.JSON)
               .extract().response();

       response.prettyPrint();

    }

    @Given("user verfy all countries from api with data set")
    public void user_verfy_all_countries_from_api_with_data_set(io.cucumber.datatable.DataTable dataTable) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
        // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
        // Double, Byte, Short, Long, BigInteger or BigDecimal.
        //
        // For other transformations you can register a DataTableType.
        throw new io.cucumber.java.PendingException();
    }

    @Given("user verify all countries one by one from data set {string}")
    public void user_verify_all_countries_one_by_one_from_data_set(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
}
