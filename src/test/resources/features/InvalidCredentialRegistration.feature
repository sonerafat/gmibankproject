

  Feature: Sigin with invalid credentials
    Background: User goes to GMI homepage
      Given user goes to  homepage

      Scenario: TC_01 Any field on the registration page should not be left blank
        When user clicks user icon
        When user clicks register button
        And user clicks register
        Then user verifies SSN message "translation-not-found[Your SSN is required]"
        Then user verifies firstname message "Your First Name is required"
        Then user verifies lastname message "Your Last Name is required"
        Then user verifies username message "Your username is required."
        Then user verifies email message "Your email is required."
        Then user verifies new password message "Your password is required."
        Then user verifies confirmation password message "Your confirmation password is required."
        Then And user verifies the visibility of message


      Scenario Outline: TC_02 SSN number cannot be of any chars nor spec chars except "-"
        When user clicks user icon
        When user clicks register button
        And User enters SSN number "<ssnNumber>"
        And user enters firstname "<firstname>"
        And user enters lastname "<lastname>"
        And user enters address "<address>"
        And user enters mobile phone "<mobilePhone>"
        And user enters username "<username>"
        And user enters email "<email>"
        And user enters new password "<password>"
        And user enters new password confirmation "<password>"
        And user clicks register
        Then User verifies the SSN invalid message "Your SSN is invalid"

        Examples:  Data for TC_02

          | ssnNumber | firstname | lastname  | address      | mobilePhone    | username  | email        | password |
          |1585-7854  | Thomas    | Ziegler   |Mainstreet 55 | 123-456-7890   | thozie    | jokl@gmx.de  | 123456   |

      Scenario Outline: TC_03 Mobilephone number cannot be of any chars nor spec chars except "-"
        When  When user clicks user icon
        When user clicks register button
        And User enters SSN number "<ssnNumber>"
        And user enters firstname "<firstname>"
        And user enters lastname "<lastname>"
        And user enters address "<address>"
        And user enters mobile phone "<mobilePhone>"
        And user enters username "<username>"
        And user enters email "<email>"
        And user enters new password "<password>"
        And user enters new password confirmation "<password>"
        And user clicks register
        Then user verifies the message "Your mobile phone number is invalid"

        Examples: Data for TC_03

          | ssnNumber | firstname    | lastname | address      | mobilePhone | username | email       | password |
          |157-85-7854| Sebastian    | Kaiser   |Mainstreet 52 | 13*45-78    | sebka    | pola@gmx.de | 123456   |

        Scenario Outline: TC_04 Email id cannot be created without "@" sign and ".com" extension
          When  When user clicks user icon
          When user clicks register button
          And User enters SSN number "<ssnNumber>"
          And user enters firstname "<firstname>"
          And user enters lastname "<lastname>"
          And user enters address "<address>"
          And user enters mobile phone "<mobilePhone>"
          And user enters username "<username>"
          And user enters email "<email>"
          And user enters new password "<password>"
          And user enters new password confirmation "<password>"
          And user clicks register
          Then user verifies the mail message "This field is invalid"

          Examples:  Data for TC_04

            | ssnNumber | firstname | lastname | address      | mobilePhone    | username | email       | password |
            |157-85-7854| Oliver    | Muller   |Mainstreet 52 | 123-456-7890   | olmul    | asdxgmx.de  | 123456   |








