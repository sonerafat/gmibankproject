package gmibank.stepdefinitions;

import gmibank.pages.CreateCustomerPages;
import gmibank.pages.CreateCustomerPages_negative;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

public class CreateCustomer_negativeStepDefinitions {
    CreateCustomerPages_negative errCustomerPage =new CreateCustomerPages_negative();

    @And("User should see an error message under address textbox")
    public void userShouldSeeAnErrorMessageUnderAddressTextbox() {

        String textActual= errCustomerPage.errAdress.getText();
        Assert.assertEquals("This field is required.", textActual);

    }

    @And("User should see an error message under city textbox")
    public void userShouldSeeAnErrorMessageUnderCityTextbox() {
        String textActual=errCustomerPage.errCity.getText();
        Assert.assertEquals("This field is required.",textActual);

    }

    @And("User should see an error message under country dropdown")
    public void userShouldSeeAnErrorMessageUnderCountryDropdown() {
        String textActual=errCustomerPage.errCity.getText();
        Assert.assertEquals("This field is required.",textActual);
    }

    @Then("User should see an error message under state textbox")
    public void userShouldSeeAnErrorMessageUnderStateTextbox() {
        String textActual=errCustomerPage.errCity.getText();
        Assert.assertEquals("This field is required.",textActual);

    }
}
