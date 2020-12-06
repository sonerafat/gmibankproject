package gmibank.stepdefinitions;

import gmibank.pages.CreateCustomerPages;
import gmibank.utilities.DateUtil;
import gmibank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.openqa.selenium.support.ui.Select;

import java.text.ParseException;

public class CreateCustomerStepDefinitions {
    CreateCustomerPages customerPage =new CreateCustomerPages();
    @And("user click to my operations link")
    public void userClickToMyOperationsLink() {
        customerPage.link_myOperation.click();

    }

    @And("user clcik to manage customer")
    public void userClcikToManageCustomer() {
customerPage.link_manage_customer.click();
    }

    @And("user click to button create new customer")
    public void userClickToButtonCreateNewCustomer() {
    customerPage.btn_create_new_customer.click();
    }

    @And("put  {string} into create firstname form")
    public void putIntoCreateFirstnameForm(String arg0) {
        customerPage.firstNameForm.sendKeys(arg0);
    }

    @And("put {string} into create lastname form")
    public void putIntoCreateLastnameForm(String arg0) {
        customerPage.lastNameForm.sendKeys(arg0);

    }

    @And("put {string} into middle initial customer form")
    public void putIntoMiddleInitialCustomerForm(String arg0) {
        customerPage.middileInitial.sendKeys("M");
    }

    @And("put {string} into mail customer form")
    public void putIntoMailCustomerForm(String arg0) {
        customerPage.emailForm.sendKeys(arg0);
    }

    @And("put {string} into mobile phoneNumber")
    public void putIntoMobilePhoneNumber(String arg0) {
        customerPage.mobileNumber.sendKeys(arg0);
    }

    @And("put {string} into phonenumber customer form")
    public void putIntoPhonenumberCustomerForm(String arg0) {
        customerPage.phoneNumberForm.sendKeys(arg0);
    }

    @And("put {string} into zibcode customer form")
    public void putIntoZibcodeCustomerForm(String arg0) {
        customerPage.zipCodeForm.sendKeys(arg0);
    }

    @And("put {string} into address customer form")
    public void putIntoAddressCustomerForm(String arg0) {
        customerPage.addressForm.sendKeys(arg0);

    }

    @And("put {string} cityForm into create customer form")
    public void putCityFormIntoCreateCustomerForm(String arg0) {
        customerPage.cityForm.sendKeys(arg0);
    }

    @And("put {string}into ssnForm customer form")
    public void putIntoSsnFormCustomerForm(String arg0) {
        customerPage.ssnForm.sendKeys(arg0);

    }

    @And("select date into customer form")
    public void selectDateIntoCustomerForm() throws ParseException {
        customerPage.createDateForm.sendKeys(DateUtil.todaysDate4());

    }

    @And("select country from customer form")
    public void selectCountryFromCustomerForm() {
       // Driver.selectRandomTextFromDropdown();
        Driver.selectDropdown(customerPage.countryForm,5);
    }

    @And("put {string} into state customer form")
    public void putIntoStateCustomerForm(String arg0) {
        customerPage.stateForm.sendKeys(arg0);
    }

    @And("select user from customer form")
    public void selectUserFromCustomerForm() {
        // Driver.selectRandomTextFromDropdown();

        Driver.selectDropdown(customerPage.userForm,3);
    }

    @And("select  account from customer form")
    public void selectAccountFromCustomerForm() {
        Driver.selectDropdown(customerPage.accountForm,4);
    }

    @Then("click to save button into customer form")
    public void clickToSaveButtonIntoCustomerForm() {

        customerPage.saveForm.click();
        //test
        //..
        //son hali
        //..
//hagi bey
        //
    }



}
