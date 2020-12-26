package gmibank.stepdefinitions;

import gmibank.pages.EmpAccCreationPage;
import gmibank.pages.LoginPage;
import gmibank.utilities.ConfigReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;

public class US_019__AdmAccCreationStepDefinitions {

    EmpAccCreationPage empAccCreationPage = new EmpAccCreationPage();
    LoginPage loginPage = new LoginPage();

    @Given("admin goes to GMI Bank homepage")
    public void admin_goes_to_GMI_Bank_homepage() {
        Driver.getDriver().get(ConfigReader.getProperty("gmiBank_url"));
    }

    @Given("admin clicks to login icon")
    public void admin_clicks_to_login_icon() {loginPage.login_icon.click();    }

    @Given("admin clicks to Sign in")
    public void admin_clicks_to_Sign_in() {loginPage.link_signIn.click();    }

    @Given("admin clicks to Username box and send {string}")
    public void admin_clicks_to_Username_box_and_send(String username)
    {Driver.waitAndSendText(loginPage.txt_username, username, 5);    }

    @Given("admin clicks to Password box and send {string}")
    public void admin_clicks_to_Password_box_and_send(String password) {
        Driver.waitAndSendText(loginPage.txt_password, password, 5);    }

    @Given("admin clicks to Sign in button")
    public void admin_clicks_to_Sign_in_button() {
        empAccCreationPage.submit.click();  }

    @Given("admin clicks to My Operations button")
    public void admin_clicks_to_My_Operations_button() {
        empAccCreationPage.myOperations.click();
    }
    @Given("admin clicks to Manage Accounts button")
    public void admin_clicks_to_Manage_Accounts_button() {
        empAccCreationPage.manageAccounts.click();
    }

    @Given("admin clicks to Create New Account button")
    public void admin_clicks_to_Create_New_Account_button() {
        empAccCreationPage.createNewAccount.click();    }

    @Given("admin clicks on description")
    public void admin_clicks_on_description() {
        empAccCreationPage.descriptionBox.click();
        empAccCreationPage.clickAnywhere.click();
        System.out.println(empAccCreationPage.descriptionBoxWarning.getText());
    }

}
