package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_003_Registration_Password {

    public US_003_Registration_Password() {
        PageFactory.initElements(Driver.getDriver(), this);}

    @FindBy(id = "account-menu")
    public WebElement dropDown;

    @FindBy(linkText = "Register")
    public WebElement registerButton;

    @FindBy(id = "firstPassword")
    public WebElement newPassword;

    @FindBy(id = "strengthBar")
    public WebElement strengthBar;


    @FindBy(xpath = "//body/div[@id='root']/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[9]/ul[1]/li[1]")
    public WebElement level_1;

    @FindBy(xpath = "//body/div[@id='root']/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[9]/ul[1]/li[2]")
    public WebElement level_2;

    @FindBy(xpath = "//body/div[@id='root']/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[9]/ul[1]/li[3]")
    public WebElement level_3;

    @FindBy(xpath = "//body/div[@id='root']/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[9]/ul[1]/li[4]")
    public WebElement level_4;

    @FindBy(xpath = "//body/div[@id='root']/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[9]/ul[1]/li[5]")
    public WebElement level_5;
}
