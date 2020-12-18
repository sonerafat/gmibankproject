package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class MoneyTransferPage {

    public MoneyTransferPage (){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath ="//tbody//td[2]")
    public List<WebElement> accountBalanceBody;

    @FindBy(linkText = "Transfer Money")
    public WebElement transferMoneyButton;

    @FindBy(xpath="//option[@value='2313']")
    public WebElement fromAccount;

    @FindBy(xpath="//option[@value='2346']")
    public WebElement toAccount;

    @FindBy(id="balance")
    public WebElement balanceBoX;

    @FindBy(id="balancecent")
    public WebElement balanceAccentBox;

    @FindBy(id="description")
    public WebElement descriptionBox;

    @FindBy(id="make-transfer")
    public WebElement makeTransferButton;

    @FindBy(xpath="/html/body/div/div/div/div[3]/div[1]/div/div/div/form/div[1]/select/option[2]")
    public WebElement checkingAccount;

    @FindBy(xpath="/html/body/div/div/div/div[3]/div[1]/div/div/div/form/div[2]/select/option[2]")
    public WebElement savingAccount;

    @FindBy(xpath="/html/body/div/div/div/div[3]/div[1]/div/div/div/form/div[3]/div/div[1]/div/div")
    public WebElement balanceRequiredMessage;

    @FindBy(xpath="//select[@name='fromAccountId']//option[@value='2313']")
    public WebElement fromBox;

    @FindBy(xpath="//select[@name='toAccountId']//option[@value='2346']")
    public WebElement toBox;

    @FindBy(xpath = "//html/body/div/div/div/div[1]/div/div/div[1]")
    public WebElement successMessage;



}
