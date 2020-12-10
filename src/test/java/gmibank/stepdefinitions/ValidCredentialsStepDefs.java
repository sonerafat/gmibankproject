package gmibank.stepdefinitions;

import gmibank.pages.SigninPage;
import gmibank.utilities.ConfigReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ValidCredentialsStepDefs {

    SigninPage vld = new SigninPage();


    @Given("User enters homepage")
    public void user_enters_homepage() {
        Driver.getDriver().get(ConfigReader.getProperty("gmiBank_url"));
    }

    @When("user clicks account icon")
    public void user_clicks_account_icon() {
        vld.accountMenu.click();
    }

    @When("user clicks signin")
    public void user_clicks_signin() {
        vld.singInButton.click();
    }

    @When("user enters a valid user name {string}")
    public void user_enters_a_valid_user_name(String username) {
        Driver.waitAndSendText(vld.usernameBox, username,2);
    }

    @When("user enters a valid password {string}")
    public void user_enters_a_valid_password(String password) {
        Driver.waitAndSendText(vld.passwordBox, password,2);
    }


    @Then("user verifies the clickability of cancel button")
    public void user_verifies_the_clickability_of_cancel_button() {
            Driver.waitForClickablility(vld.cancelButton,2);
    }


}
