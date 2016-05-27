
var constants = require('../common/constants');

module.exports = {
    
 
   "Environment warmup" : function (browser) {

      var env = constants.LCL;
      var param = process.argv[2];
      if (param) {
        env = constants[param];
      }

      browser
          .windowMaximize()
          .url("http://" + env.url + "/it")
          .waitForElementVisible("body", env.timeout)
          .url("http://" + env.url + "/it/myoox/login/logout")
          .waitForElementVisible("body", env.timeout)
          .url("http://" + env.url + "/it/myoox")
          .waitForElementVisible("body", env.timeout)          
          .execute('document.getElementById("Email").value="test.it@yoox.com"')
          .pause(100)
          .execute('document.getElementById("Password").value="password1"')
          .pause(100)
          .execute('document.getElementById("loginButton").click()')
          .pause(20000)
          .waitForElementVisible("body", env.timeout)
          .assert.urlEquals("https://" + env.securePrefix + env.url + "/it/myoox")
          .url("https//" + env.url + "/it/myoox/login/logout")
          .waitForElementVisible("body", env.timeout)
          .url("http://" + env.url)
          .waitForElementVisible("body", env.timeout)
          .end();

      return browser;
    }
};


  