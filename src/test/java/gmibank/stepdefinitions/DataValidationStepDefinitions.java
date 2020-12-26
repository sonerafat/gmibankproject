package gmibank.stepdefinitions;

import gmibank.utilities.DatabaseUtility;
import gmibank.utilities.WriteToTxt;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;

public class DataValidationStepDefinitions {

    List<Object> allDatas;

    @Given("user connects to the database with credentials {string}  {string} and {string}")
    public void user_connects_to_the_database_with_credentials_and(String url, String userName, String password) {
        DatabaseUtility.createConnection(url, userName, password);
    }

    @Given("user gets all user info from query {string} and validates the user datas")
    public void user_gets_all_user_info_from_query_and_validates_the_user_datas(String user_query) {
        allDatas= DatabaseUtility.getQueryResultLists(user_query);
         String fileName = "test_data\\allUserDatas03FromDB.txt";
         WriteToTxt.saveAllUSerDatasFromDataBase(fileName, allDatas);

        String expectedList =allDatas.toString();

        List<Object> validationList= new ArrayList<>();
        validationList.add("mickey.dubuque");
        validationList.add("aubrey.kohler");
        //System.out.println(validationList);

        for (int i =0; i<validationList.size();i++){
            Assert.assertTrue(expectedList.contains(validationList.get(i).toString()));
        }
    }

    @Given("user gets all customer info from query {string} and validates the employee datas")
    public void user_gets_all_customer_info_from_query_and_validates_the_employee_datas(String string) {
        // no datas found in the database with our credentials

    }

    @When("user gets all country info from query {string} and validates the country data")
    public void user_gets_all_country_info_from_query_and_validates_the_country_data(String string) {

    }

}
