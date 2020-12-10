package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_015_Manage_Account {
    public US_015_Manage_Account() {
        PageFactory.initElements(Driver.getDriver(), this);}

    @FindBy(id = "account-menu")
    public WebElement dropDown;

    @FindBy(linkText = "Register")
    public WebElement registerButton;


    @FindBy(xpath = "//a[@id='login-item']")
    public WebElement signin;

    @FindBy(xpath = "//input[@id='username']")
    public WebElement username;

    @FindBy(xpath = "//input[@id='password']")
    public WebElement Password;

    @FindBy(xpath = "//button[@class=\"btn btn-primary\"]")
    public WebElement Sign_in_enter;

    @FindBy(xpath = "//li[@id='entity-menu']")
    public WebElement My_Operation;

    @FindBy(xpath = "//span[contains(text(),'Manage Accounts')]")
    public WebElement Manege_Account;

    @FindBy(xpath = "//thead/tr[1]/th[4]")
    public WebElement Account_Types;

    @FindBy(xpath = "//thead/tr[1]/th[3]")
    public WebElement Balance;

    @FindBy(xpath = "//tbody/tr[1]/td[9]/div[1]/a[1]")
    public WebElement View;



}
