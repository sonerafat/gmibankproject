package gmibank.stepdefinitions;

import com.github.javafaker.Faker;
import gmibank.pages.MoneyTransferPage;
import gmibank.pages.US_015_Manage_Account;
import gmibank.utilities.Driver;
import io.cucumber.java.bs.A;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class MoneyTransferStepDefinitions {
    US_015_Manage_Account object = new US_015_Manage_Account();
    MoneyTransferPage moneyTransferPage =new MoneyTransferPage();
    Faker faker= new Faker();


    @When("user enters system as customer")
    public void user_enters_system_as_customer() {
        Driver.signinAsCustomer();
    }

    @When("user clicks my operations")
    public void user_clicks_my_operations() {
        Driver.waitAndClick(object.My_Operation,2);
    }

    @When("user click My Accounts")
    public void user_click_My_Accounts() {
        Driver.waitAndClick(object.My_Account,2);

    }

    @Then("User verifies the number of accounts")
    public void user_verifies_the_number_of_accounts() {
        for(WebElement each: moneyTransferPage.accountBalanceBody){
            if(moneyTransferPage.accountBalanceBody.size()>=2){
                System.out.println(each.getText());
            } else{
                System.out.println("You have less than 2 accounts");
            }
        }
        System.out.println("You have "+moneyTransferPage.accountBalanceBody.size()+" accounts");

    }
    @When("user clicks Transfer Money")
    public void user_clicks_Transfer_Money() {
        Driver.waitAndClick(moneyTransferPage.transferMoneyButton,2);
    }

    @When("User selects first account from dropdown")
    public void user_selects_first_account_from_dropdown() {
        Driver.waitAndClick(moneyTransferPage.fromBox,10);
      // Driver.waitAndClick(moneyTransferPage.fromAccount,10);


    }

    @When("User verifies the from account name contains {string}")
    public void user_verifies_the_from_account_name_contains(String fromAccountName) {
       Assert.assertTrue(moneyTransferPage.checkingAccount.getText().contains(fromAccountName));


    }

    @Then("User selects another account from to dropdown")
    public void user_selects_another_account_from_to_dropdown() {
       Driver.waitAndClick(moneyTransferPage.toBox,2);
       //Driver.waitAndClick(moneyTransferPage.toAccount,2);
    }

    @Then("User verifies the to account name contains {string}")
    public void user_verifies_the_to_account_name_contains(String toAccountName){
        Assert.assertTrue(moneyTransferPage.savingAccount.getText().contains(toAccountName));

    }
    @When("User enters valid value in balance box")
    public void user_enters_valid_value_in_balance_box() {
        Driver.waitAndSendText(moneyTransferPage.balanceBoX, ""+faker.number().numberBetween(0,168), 2);

    }

    @When("user enters valid value in accent box")
    public void user_enters_valid_value_in_accent_box() {
        Driver.waitAndSendText(moneyTransferPage.balanceAccentBox,""+faker.number().digits(1),2);
    }

    @Then("User verifies required message is not displayed")
    public void user_verifies_required_message_is_not_displayed() {
        Driver.verifyElementNotDisplayed(By.xpath("/html/body/div/div/div/div[3]/div[1]/div/div/div/form/div[3]/div/div[1]/div/div"));

    }
    @When("user enters a description")
    public void user_enters_a_description() {
        Driver.waitAndSendText(moneyTransferPage.descriptionBox, ""+faker.book().author(),2);
    }


    @Then("user verifies the required message is not displayed")
    public void user_verifies_the_required_message_is_not_displayed() {
        Driver.verifyElementNotDisplayed(By.xpath("/html/body/div/div/div/div[3]/div[1]/div/div/div/form/div[4]/div/div"));
    }

    @When("User clicks make transfer button")
    public void user_clicks_make_transfer_button() {
        Driver.waitAndClick(moneyTransferPage.makeTransferButton,2);
    }


    @Then("User verifies the successful message")
    public void user_verifies_the_successful_message() {
      Driver.waitForVisibility(By.xpath("/html/body/div/div/div/div[1]/div/div/div[1]"),10);
      System.out.println(Driver.getDriver().findElement(By.xpath("/html/body/div/div/div/div[1]/div/div/div[1]")).getText());
        // System.out.println(successMessage);
    }



}
