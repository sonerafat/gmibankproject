package gmibank.stepdefinitions;

import gmibank.pages.UserInfoPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;


public class US_007_UserInfoNegative {
    UserInfoPage userInfoPage = new UserInfoPage();


    @Then("Verify the error message is {string}")
    public void verify_the_error_message_is(String string) {
        Assert.assertTrue(userInfoPage.errorMessage.isDisplayed());
    }

    @Then("Verify that {string} and {string} are only options in the drop box")
    public void verify_that_and_are_only_options_in_the_drop_box(String string, String string2) {
        Select select = new Select(userInfoPage.language);
        List<WebElement> dropOptions = select.getOptions();
        Assert.assertEquals(dropOptions.get(0).getText(), string);
        Assert.assertEquals(dropOptions.get(1).getText(), string2);
        Assert.assertEquals(dropOptions.size(), 2);
    }
//    password
@Given("Click on user name and click on password")
public void click_on_user_name_and_click_on_password() {
        userInfoPage.accountMenu.click();
    userInfoPage.password_text.click();
}

    @Then("verify")
    public void verify() {

        int ilk = userInfoPage.gri.size();
        userInfoPage.newPassword.sendKeys("aliveli");
        int son = userInfoPage.gri.size();
        userInfoPage.newPassword.sendKeys();
        Assert.assertTrue(ilk>2);
        System.out.println(userInfoPage.gri.size());



    }


}
