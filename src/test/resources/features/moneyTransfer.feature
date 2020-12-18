
  Feature: US_016 Money transfer should be available
    Background: User should be on the homepage
      Given user goes to  homepage

      Scenario: TC_001 User should have at least 2 accounts
        When user enters system as customer
        And user clicks my operations
        And user click My Accounts
        Then User verifies the number of accounts

        Scenario: TC_002 User can select the first account as From dropdown where they receive their money from
          When user enters system as customer
          And user clicks my operations
          And user clicks Transfer Money
          And User selects first account from dropdown
          And User verifies the from account name contains "2313"
          Then User selects another account from to dropdown
          Then User verifies the to account name contains "2346"

          Scenario: TC_003 User can select a balance that they want to proceed with
            When user enters system as customer
            And user clicks my operations
            And user clicks Transfer Money
            And User selects first account from dropdown
            And User selects another account from to dropdown
            And User enters valid value in balance box
            And user enters valid value in accent box
            Then User verifies required message is not displayed


          Scenario: TC_004 User should provide a description for that transfer
            When  user enters system as customer
            And user clicks my operations
            And user clicks Transfer Money
            And User selects first account from dropdown
            And User selects another account from to dropdown
            And User enters valid value in balance box
            And user enters valid value in accent box
            And user enters a description
            Then user verifies the required message is not displayed

          Scenario: TC_005 User can make sure transfer is done successfully validating the message  an amount of the transaction
            When user enters system as customer
            And user clicks my operations
            And user clicks Transfer Money
            And User selects first account from dropdown
            And User selects another account from to dropdown
            And User enters valid value in balance box
            And user enters valid value in accent box
            And user enters a description
            And User clicks make transfer button
            Then User verifies the successful message



