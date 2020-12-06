package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateCustomerPages {
    public CreateCustomerPages(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//*[@id=\"entity-menu\"]/a/span")
    public WebElement link_myOperation;

    @FindBy(xpath = "//*[@id=\"entity-menu\"]/div/a[1]/span")
    public WebElement link_manage_customer;

    @FindBy(xpath = "//*[@id=\"jh-create-entity\"]")
    public WebElement btn_create_new_customer;

    ////registration from webelement

    @FindBy(xpath = "//*[@id=\"tp-customer-firstName\"]")
    public WebElement  firstNameForm;

    @FindBy(xpath = "//*[@id=\"tp-customer-lastName\"]")
    public WebElement  lastNameForm;

    @FindBy(xpath = "//*[@id=\"tp-customer-middleInitial\"]")
    public WebElement middileInitial;

    @FindBy(xpath = "//*[@id=\"tp-customer-email\"]")
    public WebElement  emailForm;

    @FindBy(xpath = "//*[@id=\"tp-customer-mobilePhoneNumber\"]")
    public  WebElement mobileNumber;

    @FindBy(xpath = "//*[@id=\"tp-customer-phoneNumber\"]")
    public WebElement  phoneNumberForm;

    @FindBy(xpath = "//*[@id=\"tp-customer-zipCode\"]")
    public WebElement  zipCodeForm;

    @FindBy(xpath = "//*[@id=\"tp-customer-address\"]")
    public WebElement  addressForm;

    @FindBy(xpath = "//*[@id=\"tp-customer-city\"]")
    public WebElement  cityForm;

    @FindBy(xpath = "//*[@id=\"tp-customer-ssn\"]")
    public WebElement  ssnForm;

    @FindBy(xpath = "//*[@id=\"tp-customer-createDate\"]")
    public WebElement  createDateForm;

    @FindBy(xpath = "//*[@id=\"tp-customer-country\"]")
    public WebElement  countryForm;

    @FindBy(xpath = "//*[@id=\"tp-customer-state\"]")
    public WebElement  stateForm;

    @FindBy(xpath = "//*[@id=\"tp-customer-user\"]")
    public WebElement  userForm;

    @FindBy(xpath = "//*[@id=\"tp-customer-account\"]")
    public WebElement  accountForm;

    @FindBy(xpath = "//*[@id=\"save-entity\"]")
    public WebElement  saveForm;


}
