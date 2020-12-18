package gmibank.stepdefinitions;

import gmibank.pages.ManageCustomerPage;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.internal.common.assertion.AssertionSupport;
import org.junit.Assert;
import org.openqa.selenium.By;

import java.util.ArrayList;
import java.util.List;

public class NeOlacagiBelliOlmayanUS {
    ManageCustomerPage manageCustomerPage = new ManageCustomerPage();

    @Then("Verify that {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}")
    public void verify_that(String string1, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
        List<String> str = new ArrayList<>();
        str.add("aa");
        str.add(string1);
        str.add(string2);
        str.add(string3);
        str.add(string4);
        str.add(string5);
        str.add(string6);
        str.add(string7);
        str.add(string8);
        for(int i=0;i<manageCustomerPage.thead.size()-2;i++){
            Assert.assertTrue(manageCustomerPage.thead.get(i+1).getText().equals(str.get(i+1)));
        }
    }

    @Then("verify that view button is displayed")
    public void verify_that_view_button_is_displayed() {
        Assert.assertTrue(manageCustomerPage.viewButton.isDisplayed());

    }

    @Then("click on view button")
    public void click_on_view_button() {
        manageCustomerPage.viewButton.click();

    }
    @Then("Verify that edit button is displayed")
    public void verify_that_edit_button_is_displayed() {
        Assert.assertTrue(manageCustomerPage.customerEditButton.isDisplayed());

    }

    @Given("click on edit button")
    public void click_on_edit_button() {
        manageCustomerPage.editButton.click();

    }

    @Then("verify that create or update page is displayed")
    public void verify_that_create_or_update_page_is_displayed() {
        Assert.assertTrue(manageCustomerPage.text.isDisplayed());

    }

    @Given("clear address text box")
    public void clear_address_text_box() {
        manageCustomerPage.addressTextBox.clear();

    }

    @Given("type {string} into address textbox")
    public void type_into_address_textbox(String string) {
        manageCustomerPage.addressTextBox.sendKeys(string);

    }
    @Then("Verify that user's address changed {string}")
    public void verify_that_user_s_address_changed(String string) {
        Driver.getDriver().navigate().back();
        Assert.assertTrue(manageCustomerPage.address.getText().contains(string));
    }


    @Given("Click on delete button")
    public void click_on_delete_button() {
        manageCustomerPage.deleteButton.click();

    }

    @Then("Verify warning that warning message contains {string} text")
    public void verify_warning_that_warning_message_contains_text(String string) {
        Driver.wait(2);
        System.out.println(manageCustomerPage.warningMessage.getText());
        Assert.assertTrue(manageCustomerPage.warningMessage.getText().contains(string));

    }

}
