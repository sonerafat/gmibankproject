package gmibank.stepdefinitions;

import gmibank.pages.RegisterPage;
import gmibank.utilities.ConfigReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class InvalidCredentialRegistrationStepDefs {
   RegisterPage inv= new RegisterPage();
    @Given("user goes to  homepage")
    public void user_goes_to_homepage() {
        Driver.getDriver().get(ConfigReader.getProperty("gmiBank_url"));
    }

    @When("user clicks user icon")
    public void user_clicks_user_icon() {
        inv.userIcon.click();

    }

    @When("user clicks register button")
    public void user_clicks_register_button() {
        inv.registerButton.click();
    }

    @When("user clicks register")
    public void user_clicks_register() {
        inv.registerButton2.click();
    }


    @Then("user verifies SSN message {string}")
    public void user_verifies_SSN_message(String ssnText) {
        Assert.assertTrue(inv.ssnMessage.getText().equals(ssnText));
    }
    @Then("user verifies firstname message {string}")
    public void user_verifies_firstname_message(String firstnameText) {
        Assert.assertTrue(inv.firstnameMessage.getText().equals(firstnameText));
    }

    @Then("user verifies lastname message {string}")
    public void user_verifies_lastname_message(String lastnameText) {
        Assert.assertTrue(inv.lastnameMessage.getText().equals(lastnameText));
    }

    @Then("user verifies username message {string}")
    public void user_verifies_username_message(String usernameText) {
        Assert.assertTrue(inv.usernameMessage.getText().equals(usernameText));
    }

    @Then("user verifies email message {string}")
    public void user_verifies_email_message(String emailText) {
        Assert.assertTrue(inv.emailMessage.getText().equals(emailText));
    }

    @Then("user verifies new password message {string}")
    public void user_verifies_new_password_message(String newPasswordText) {
        Assert.assertTrue(inv.passwordMessage.getText().equals(newPasswordText));
    }

    @Then("user verifies confirmation password message {string}")
    public void user_verifies_confirmation_password_message(String confirmationPasswordText) {
        Assert.assertTrue(inv.confirmPasswordMessage.getText().equals(confirmationPasswordText));
    }

    @Then("And user verifies the visibility of message")
    public void and_user_verifies_the_visibility_of_message() {
        Driver.verifyElementDisplayed(inv.pageMessage);
    }

    @When("User enters SSN number {string}")
    public void user_enters_SSN_number(String ssnNumber) {
            Driver.waitAndSendText(inv.ssnBox, ssnNumber, 2);
    }
    @When("user enters firstname {string}")
    public void user_enters_firstname(String firstname) {
        Driver.waitAndSendText(inv.firstnameBox, firstname,2);
    }

    @When("user enters lastname {string}")
    public void user_enters_lastname(String lastname) {
        Driver.waitAndSendText(inv.lastnameBox, lastname,2);
    }

    @When("user enters address {string}")
    public void user_enters_address(String address) {
        Driver.waitAndSendText(inv.addressBox, address,2);
    }

    @When("user enters mobile phone {string}")
    public void user_enters_mobile_phone(String mobilePhone) {
       Driver.waitAndSendText(inv.mobilePhoneBox, mobilePhone,2);
    }

    @When("user enters username {string}")
    public void user_enters_username(String username) {
        Driver.waitAndSendText(inv.usernameBox, username,2);
    }

    @When("user enters email {string}")
    public void user_enters_email(String email) {
        Driver.waitAndSendText(inv.emailBox, email,2);
    }

    @When("user enters new password {string}")
    public void user_enters_new_password(String password) {
       Driver.waitAndSendText(inv.newPasswordBox, password,2);
    }

    @When("user enters new password confirmation {string}")
    public void user_enters_new_password_confirmation(String password) {
        Driver.waitAndSendText(inv.passwordConfirmBox, password,2);
    }


    @Then("User verifies the SSN invalid message {string}")
    public void user_verifies_the_SSN_invalid_message(String ssnInvalidMessage) {
        System.out.println(inv.ssnInValid.getText());
        Assert.assertEquals(ssnInvalidMessage, inv.ssnInValid.getText());

    }
    @When("When user clicks user icon")
    public void when_user_clicks_user_icon() {
        inv.userIcon.click();
    }

    @Then("user verifies the message {string}")
    public void user_verifies_the_message(String expectedMessage) {
        Assert.assertEquals(expectedMessage, inv.mobilephoneInvalid.getText());
    }

    @Then("user verifies the mail message {string}")
    public void user_verifies_the_mail_message(String expectedMessage) {
        Assert.assertEquals(expectedMessage, inv.emailMessage.getText());

    }






}
