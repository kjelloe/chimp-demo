// Doc references: 
// Assertion inside steps: https://jasmine.github.io/edge/introduction.html#section-Expectations
// Webdriver.IO browser manipulation: http://webdriver.io/api/property/getText.html
// Webdriver text selectors, remember: http://blog.kevinlamping.com/selecting-elements-in-webdriverio/

var globals = {
	
	waitUntilTimeMs : 30000,
	waitForTimeMs : 3000
}

var helpers = {
	
	WaitForEnabled : function(elementExpr) {
		browser.waitUntil(function () {
			return browser.getAttribute(elementExpr, 'disabled') !== true
		});
		return browser.element(elementExpr);
	},
	WaitForExists : function(elementExpr) {
		browser.waitUntil(function () {
			return browser.element(elementExpr).value !== null
		}, globals.waitUntilTimeMs, 'Element "'+elementExpr+'" does not exist in DOM within '+globals.waitUntilTimeMs+' ms');
		return browser.element(elementExpr);
	},	
	WaitForVisible : function(elementExpr) {
		browser.waitUntil(function () {
			return browser.isVisible(elementExpr) === true
		}, globals.waitUntilTimeMs, 'Element "'+elementExpr+'" was not visible within '+globals.waitUntilTimeMs+' ms');
		return browser.element(elementExpr);
	}
}

module.exports = function() {

	var self = this;
	
    this.Given(/^SSP UI is available on "([^"]*)"$/, function (sspUrl) {
		browser.url('https://'+sspUrl);
        browser.windowHandleSize({width: 2500, height: 2500});
        browser.waitForExist('#username', globals.waitForTimeMs);
        browser.pause(globals.waitForTimeMs);        
    });

    this.When(/^I login to SSP UI with user "([^"]*)" and password "([^"]*)"$/, function (username, pass1) {
        browser.setValue('#username', username);
        browser.setValue('#password', pass1);
        browser.click('#sign-in-button');
        browser.pause(globals.waitForTimeMs);
    });


	this.Then(/^Then I should be able to view orders/, function (groupname) {
		 // TODO Implement 
    });
	
	// TODO: Impement other scenario steps
};
