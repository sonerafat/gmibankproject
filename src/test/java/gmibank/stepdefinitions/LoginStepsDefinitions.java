package gmibank.stepdefinitions;

import gmibank.pages.LoginPage;
import gmibank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import org.openqa.selenium.WebDriver;
import gmibank.utilities.ConfigReader;

public class LoginStepsDefinitions {
WebDriver driver;
LoginPage loginPage = new LoginPage();
    @Given("user click to login icon")
    public void userClickToLoginIcon() {
        Driver.getDriver().get(ConfigReader.getProperty("gmiBank_url"));
        loginPage.login_icon.click();
    }

    @And("user click link sign in")
    public void userClickLinkSignIn() {
        loginPage.link_signIn.click();
    }

    @And("user enter username as  {string}")
    public void userEnterUsernameAs(String val_username) {
        loginPage.txt_username.sendKeys(val_username);
    }

    @And("user enter password as  {string}")
    public void userEnterPasswordAs(String val_password) {
        loginPage.txt_password.sendKeys(val_password);
    }

    @And("user click to sign in button")
    public void userClickToSignInButton() {
        loginPage.btn_login_signIn.click();
    }
}
