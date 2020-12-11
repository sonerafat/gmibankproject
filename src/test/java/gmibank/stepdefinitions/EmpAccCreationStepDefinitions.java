package gmibank.stepdefinitions;

import gmibank.pages.EmpAccCreationPage;
import gmibank.pages.LoginPage;
import gmibank.utilities.ConfigReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import java.util.List;

import static org.junit.Assert.assertFalse;

public class EmpAccCreationStepDefinitions {

    EmpAccCreationPage empAccCreationPage = new EmpAccCreationPage();
    LoginPage loginPage = new LoginPage();

    @Given("employee goes to GMI Bank homepage")
    public void employee_goes_to_GMI_Bank_homepage() {
        Driver.getDriver().get(ConfigReader.getProperty("gmiBank_url"));
    }

    @Given("user click to login icon")
    public void user_clik_to_login_icon() { loginPage.login_icon.click();
    }

    @Given("user click to Sign in")
    public void user_clik_to_Sign_in() { loginPage.link_signIn.click();
    }

    @Given("user click to Username box and send {string}")
    public void user_clik_to_Username_box_and_send(String username) {
        Driver.waitAndSendText(loginPage.txt_username, username, 5 );
    }

    @Given("user click to Password box and send {string}")
    public void user_click_to_Password_box_and_send(String password) {
        Driver.waitAndSendText(loginPage.txt_password, password, 5);
    }

    @Given("user click to Sign in button")
    public void user_click_to_Sign_in_button() {
       empAccCreationPage.submit.click();
    }

    @Given("user click to My Operations button")
    public void user_click_to_My_Operations_button() {
        empAccCreationPage.myOperations.click();
    }

    @Given("user click to Manage Accounts button")
    public void user_click_to_Manage_Accounts_button() {
        empAccCreationPage.manageAccounts.click();
    }

    @Given("user click to Create New Account button")
    public void user_click_to_Create_New_Account_button() {
        empAccCreationPage.createNewAccount.click();
    }

    @Given("user leaves the description box blank")
    public void user_leaves_the_description_box_blank() {
        empAccCreationPage.descriptionBox.click();
        empAccCreationPage.clickAnywhere.click();
        System.out.println(empAccCreationPage.descriptionBoxWarning.getText());
          }

    @Then("verify the message is {string}")
    public void verify_the_message_is (String message){
        Assert.assertEquals(empAccCreationPage.descriptionBoxWarning.getText(), message);
        }

    @Given("user click again to Description box and send {string}")
    public void user_click_again_to_Description_box_and_send(String desc) {
        empAccCreationPage.descriptionBox.sendKeys(desc);
    }

    @Then("verify the warning message is not displayed")
    public void verify_the_warning_message_is_not_displayed() throws InterruptedException {
        try {
            Assert.assertFalse(empAccCreationPage.descriptionBoxWarning.isDisplayed());
        } catch (Exception e) {
        }
    }

    @Given("user leaves the Balance box blank")
    public void user_user_leaves_the_Balance_box_blank() {
        empAccCreationPage.balanceBox.click();
        empAccCreationPage.clickAnywhere.click();
        //WAIT KONULACAKKKKKKK
        Assert.assertEquals(empAccCreationPage.balanceBoxWarning.getText(), "This field is required.");
    }

    @Given("user provides Balance {string}")
    public void user_provides_Balance(String balance) throws InterruptedException {

        Driver.waitAndSendText(empAccCreationPage.balanceBox, balance, 15);
        empAccCreationPage.clickAnywhere.click();
        Assert.assertEquals(empAccCreationPage.balanceBoxNumberWarning.getText(), "This field should be a number.");

        empAccCreationPage.balanceBox.clear();

        Driver.waitAndSendText(empAccCreationPage.balanceBox, balance, 15);
        empAccCreationPage.clickAnywhere.click();
        Assert.assertEquals(empAccCreationPage.balanceBoxNumberWarning.getText(), "This field should be a number.");

        empAccCreationPage.balanceBox.clear();

        Driver.waitAndSendText(empAccCreationPage.balanceBox, balance, 15);
        empAccCreationPage.clickAnywhere.click();
        try {
            Assert.assertFalse(empAccCreationPage.descriptionBoxWarning.isDisplayed());
        } catch (Exception e) {
        }
    }

    @Given("user click to Account Type box and select Account Type")
    public void user_click_to_Account_Type_box_and_select_Account_Type() throws InterruptedException {
        Driver.selectDropdown(empAccCreationPage.accountTypeBox, 0);
        Thread.sleep(50);
        Assert.assertEquals(empAccCreationPage.accountTypeBox.getAttribute("value"), "CHECKING");
        Thread.sleep(50);

          //HOW CAN I MAKE LIST

        Driver.selectDropdown(empAccCreationPage.accountTypeBox, 1);
        Assert.assertEquals(empAccCreationPage.accountTypeBox.getAttribute("value"), "SAVING");
        Thread.sleep(50);

        Driver.selectDropdown(empAccCreationPage.accountTypeBox, 2);
        Assert.assertEquals(empAccCreationPage.accountTypeBox.getAttribute("value"), "CREDIT_CARD");
        Thread.sleep(50);

        Driver.selectDropdown(empAccCreationPage.accountTypeBox, 3);
        Assert.assertEquals(empAccCreationPage.accountTypeBox.getText(), "INVESTING");
    }

    @Given("user click to Account Status Type box and select Account Status Type")
    public void user_click_to_Account_Status_Type_box_and_select_Account_Status_Type() throws InterruptedException {
        Driver.selectDropdown(empAccCreationPage.accountStatusBox, 0);
        //assert
        Thread.sleep(50);
        Driver.selectDropdown(empAccCreationPage.accountStatusBox, 1);
        //assert
        Thread.sleep(50);
        Driver.selectDropdown(empAccCreationPage.accountStatusBox, 2);
        //assert
    }

    @Then("user click to Employee box and select an employee")
    public void user_click_to_Employee_box_and_select_an_employee() {
        empAccCreationPage.employeeBox.click();
    }   //assert
    }