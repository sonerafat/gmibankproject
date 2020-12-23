package gmibank.stepdefinitions;

import com.fasterxml.jackson.databind.ObjectMapper;
import gmibank.pojos.Country;
import gmibank.pojos.Customer;
import gmibank.utilities.ConfigReader;
import gmibank.utilities.ReadTxt;
import gmibank.utilities.WriteToTxt;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.testng.Assert;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import static io.restassured.RestAssured.given;

public class ApiCountryStepDefinition {
    Response response;
    Customer[] customer;
    List<String> expected;
    Country[]country;
    List<String> expectedC;
    @Given("user go to api end point {string}")
    public void user_go_to_api_end_point(String api_endpoint) {
        response = given().auth().
                oauth2(ConfigReader.getProperty("api_bearer_token")).
                contentType(ContentType.JSON).when().get(api_endpoint).then().contentType(ContentType.JSON).statusCode(200).extract().response();
        //response.prettyPrint();
    }
    @Given("deserialize all customer data")
    public void deserialize_all_customer_data() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        customer = objectMapper.readValue(response.asString(), Customer[].class);
        System.out.println(customer[0].getFirstName());
        for (int i=0;i<customer.length;i++){
            if (customer[i].getSsn().equals("612-15-5726")){
                System.out.println("========================================");
                System.out.println(customer[i].getFirstName());
            }
        }
    }
    @Given("User sets all Customer information to related files")
    public void user_sets_all_Customer_information_to_related_files() {
        //WriteToText.saveDataInFile("C:\\Users\\user\\IdeaProjects\\gmibankproject\\src\\test\\java\\gmibank\\test-data\\all-customer.txt",customer);
    }
    @Then("user validate all customer data")
    public void user_validate_all_customer_data() {
        expected = new ArrayList<>();
        for(int i=0;i<customer.length;i++){
            expected.add(customer[i].getSsn());
        }
        List<String> alldata= ReadTxt.returnCustomerSNNList("C:\\Users\\user\\IdeaProjects\\gmibankproject\\src\\test\\java\\gmibank\\test-data\\all-customer.txt");
        System.out.println(alldata);
        Assert.assertEquals(alldata,expected);
    }
    @Given("read all countries and write")
    public void read_all_countries_and_write() throws IOException {
        response=given().auth().oauth2(ConfigReader.getProperty("api_bearer_token")).contentType(ContentType.JSON).when()
                .get("https://www.gmibank.com/api/tp-countries").then().contentType(ContentType.JSON).extract().response();
        ObjectMapper objectMapper = new ObjectMapper();
        country = objectMapper.readValue(response.asString(), Country[].class);
        for(int i=0;i<country.length;i++){
            System.out.println(country[i].getId()+" | " + country[i].getName());
        }
        WriteToTxt.saveAllCountryId("C:\\Users\\user\\IdeaProjects\\gmibankproject\\src\\test\\java\\gmibank\\test-data\\countryId.txt", country);
    }
    @Then("validate countries")
    public void validate_countries() {
        List<String> expCount = new ArrayList<>();
        for (int i=0;i<country.length;i++){
            expCount.add(String.valueOf(country[i].getId()));
        }
        List<String> allCount = ReadTxt.returnCountryId("C:\\Users\\user\\IdeaProjects\\gmibankproject\\src\\test\\java\\gmibank\\test-data\\countryId.txt");
        Assert.assertEquals(expCount, allCount);
    }
}


