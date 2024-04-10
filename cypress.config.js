const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  env:{
    domain: 'https://www.uhaul.com',
    storage: '/Storage/'
  },
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 90000,
  chromeWebSecurity: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, {
        resultsDir: "allure-results"
      });
    },
  },
});
