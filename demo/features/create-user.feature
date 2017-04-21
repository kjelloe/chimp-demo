Feature: QA Candidate example

  Scenario: Log into SSP and view orders
    Given SSP UI is available on "core.dev.kezzler.net"
    When I login to SSP UI with user "user1" and password "******"
    Then I should be able to view orders
		