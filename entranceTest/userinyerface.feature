

Feature: Userinyerface test
  I am a user
  I want to click on the HERE link to go to the next page
  So that I can choose 2 random interests, upload image, click "Next" button.

  Background:
    Given I'm on the Home page
  Scenario: Test Case 01
    When I click the HERE link
    Then The '1' card is open
    When I input random valid password, email, accept TOU & press next button
    Then The '2' card is open
    When I Choose 3 random interests
    And I click Next button
    Then The text "Please upload a picture" appear & it's text color is green

  Scenario: Test Case 02
    When I hide help form
    Then The form content is hidden

  Scenario: Test Case 03
    When I Accept cookies
    Then The first form warning says "Your password requires at least 10 characters."

  Scenario: Test Case 04
    And I Validate that timer starts from "00:00:00"
