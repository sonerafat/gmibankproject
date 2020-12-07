package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateCustomerPages_negative {
    public CreateCustomerPages_negative(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//div[text()='This field is required.'])[8]")
    public WebElement errAdress;

    @FindBy(xpath = "(//div[text()='This field is required.'])[9]")
    public WebElement errCity;

    @FindBy(xpath = "(//div[text()='This field is required.'])[8]")
    public WebElement errcountry;

    @FindBy(xpath = "(//div[text()='This field is required.'])[8]")
    public WebElement  errState;

}
