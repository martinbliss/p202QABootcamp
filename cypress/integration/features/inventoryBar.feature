Feature: Inventory Bar

    I want to make sure the inventory bar is interactive and responsive

    Scenario: Total starts off at $0.00
        Given I open the app
        Then I see a total of "$0.00"

    Scenario: Selecting a banana causes a non-zero balance
        Given I open the app
        When I select "1 Banana"
        Then there is a balance

    Scenario: Change Modal shows correct total
        Given I open the app 
        When I select "1 Banana"
        When I hit the tender button
        Then the tender modal total matches the inventory bar total