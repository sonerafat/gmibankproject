package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegistrationPage {

    public RegistrationPage() {
        PageFactory.initElements(Driver.getDriver(), this);}

    @FindBy(id = "account-menu")
    public WebElement userIcon;

    @FindBy(linkText = "Register")
    public WebElement registerButton;

    @FindBy(id="ssn")
    public WebElement ssnBox;

    @FindBy(id = "firstname")
    public WebElement firstnameBox;

    @FindBy(id="lastname")
    public WebElement lastnameBox;

    @FindBy(id="address")
    public WebElement addressBox;

    @FindBy(id="mobilephone")
    public WebElement mobilePhoneBox;

    @FindBy(id="username")
    public WebElement usernameBox;

    @FindBy(id="email")
    public WebElement emailBox;

    @FindBy(id = "register-title")
    public WebElement registerTitle;


}





