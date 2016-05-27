
var constants = require('../common/constants');

module.exports = {
    
  '@disabled': true,
 
   "Check if A/B test is working" : function (browser) {

      var env = constants.LCL;
      var param = process.argv[2];
      if (param) {
        env = constants[param];
      }

      browser
          .windowMaximize()
          .url(env.url)
          .waitForElementVisible("body", env.timeout)
          .setCookie({
                        name : env.abtest.name,
                        domain : env.domain,
                        value: JSON.stringify(env.abtest.value)})
          .refresh()
          .waitForElementVisible(".ta-footer-about", env.timeout)
          .end();

      return browser;
    }
};


  