

Feature: Userinyerface test
  I am a user
  I want to click on the HERE link to go to the next page
  So that I can choose 2 random interests, upload image, click "Next" button.

  Background:
    Given I'm on the Home page

  Scenario Outline: I can open the 3rd card
    When I click the HERE link to navigate the next page.
    Then The '1' card is open.
    When I input random valid password, email, accept the terms of use and click "next" button.
    Then The '2' card is open.
    When I Choose 2 random interests, upload image, click "Next" button.
    Then The '3' card is open.

