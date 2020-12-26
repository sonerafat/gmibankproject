@validation
Feature: US_029 Validate all data
  Background: USer connected to the database
    Given user connects to the database with credentials "jdbc:postgresql://157.230.48.97:5432/gmibank_db"  "techprodb_user" and "Techpro_@126"

  Scenario: TC_001 All users info (user, employee, manager and admin) should be retrieved by database
    And user gets all user info from query "SELECT * FROM jhi_user" and validates the user datas
    And user gets all customer info from query "select * from tp_employee" and validates the employee datas
      #And user gets all manager info from query "" and validates  the manager datas
      # And user gets all admin info from query "" and validates the admin datas

  Scenario Outline: TC_002 All countries' info should be retrieved by database and validated
    When user gets all country info from query "<query>" and validates the country data
    Examples: country query
      |query                        |
      |select * from tp_country     |
