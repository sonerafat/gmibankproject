package gmibank.stepdefinitions;

import gmibank.pages.RegistrationPage;
import gmibank.utilities.ConfigReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;


public class RegistrationStepdefinition {

RegistrationPage gmiBankPage = new RegistrationPage();

    @Given("user got to GMI Bank homepage")
    public void user_got_to_GMI_Bank_homepage() {
      Driver.getDriver().get(ConfigReader.getProperty("gmiBank_url"));
    }
    @Given("user clik to register box")
    public void user_clik_to_register_box() {
    gmiBankPage.signinButton.click();
    }
    @Then("user clik to register button")
    public void user_clik_to_register_button() {
    gmiBankPage.registerButton.click();
    }
    @Then("user clik to SSn number box and send {string}")
    public void user_clik_to_SSn_number_box_and_send(String ssn) {
    Driver.waitAndSendText(gmiBankPage.ssnBox,ssn, 5);
    }

    @Then("message of {string} is not displayed")
    public void message_of_is_not_displayed(String string) {
        Driver.wait(4);
        try{
        WebElement message = Driver.getDriver().findElement(By.xpath("//*[text()='"+string+"']"));
            System.out.println(message.getText());
        Assert.assertFalse(message.isDisplayed());

        }catch(Exception e){

        }
     //   Assert.assertFalse(Driver.getDriver().findElement(By.xpath("//*[text()='"+string+"']")));

    }

    @Given("user click to first name box and send {string}")
    public void user_click_to_first_name_box_and_send(String firstName) {
    Driver.waitAndSendText(gmiBankPage.firstNameBox,firstName, 5);
    }
    @Given("user click to last name box and send {string}")
    public void user_click_to_last_name_box_and_send(String lastName) {
        Driver.waitAndSendText(gmiBankPage.lastNameBox,lastName, 5);
    }
   @Given("user click to address box and send {string}")
    public void user_click_to_address_box_and_send(String address) {
      Driver.waitAndSendText(gmiBankPage.addressBox,address, 5);
   }
    @Given("user click to mobile phone number box and send {string}")
    public void user_click_to_mobile_phone_number_box_and_send(String phone) {
        Driver.waitAndSendText(gmiBankPage.mobilePhoneBox,phone, 5);
    }
    @Given("user click to username box and send {string}")
    public void user_click_to_username_box_and_send(String userName) {
        Driver.waitAndSendText(gmiBankPage.usernameBox,userName, 5);
    }
    @Then("user click to email box and send {string}")
    public void user_click_to_email_box_and_send(String email) {
        Driver.waitAndSendText(gmiBankPage.emailBox,email, 5);
    }


}
