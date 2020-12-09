package gmibank.stepdefinitions;

import gmibank.pages.ManageCustomerPage;
import gmibank.utilities.DateUtil;
import gmibank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.text.ParseException;

public class CreateCustomerStepDefinitions {
    ManageCustomerPage customerPage =new ManageCustomerPage();

    //////////////////////////search ssn /////////////////////////////////////////////////////
    @And("user enter valid ssn")
    public void userEnterValidSsn() {
        Driver.waitAndSendText(customerPage.ssnTextbox,"123-12-1234",1);
    }

    @And("user click to searchButton on create new customer")
    public void userClickToSearchButtonOnCreateNewCustomer() {
        Driver.waitAndClick(customerPage.searchButton,5);

    }

    @Then("Check FirstName should see textBox")
    public void checkFirstNameShouldSeeTextBox() throws InterruptedException {
        //Driver.waitAndClick(customerPage.serachButton,5);

       Driver.waitAndClick(customerPage.ssnForm,2);

        String val2 = customerPage.firstNameForm.getAttribute("value");
        System.out.println("val:"+val2);
        Assert.assertEquals(val2,"Pehlivan");
    }

    //////////////////////////cretate customer ///////////////////////////////////////////////////////

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
       // customerPage.ssnForm.sendKeys(arg0);
        String ssn=Driver.getRandomInteger(1000,100)+"-"+Driver.getRandomInteger(100,10)+"-"+Driver.getRandomInteger(10000,1000);
        customerPage.ssnForm.sendKeys(ssn);

    }

    @And("select date into customer form")
    public void selectDateIntoCustomerForm() throws ParseException {
        customerPage.createDateForm.sendKeys(DateUtil.todaysDate2());

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

        Driver.selectDropdown(customerPage.userForm,0);
        Driver.selectCheckBox(customerPage.zelleChecBbox,true);


    }

    @And("select  account from customer form")
    public void selectAccountFromCustomerForm() {
        Driver.selectDropdown(customerPage.accountForm,2);
    }

    @Then("click to save button into customer form")
    public void clickToSaveButtonIntoCustomerForm() {

        customerPage.saveForm.click();

    }

//////////////////////////Negative ADRESS-CITY-STATE- //////////////////////////////////////////////





}