const { defineConfig } = require("cypress");

module.exports = defineConfig({
  videosFolder: 'cypress/videos', 
  video: true,
    "defaultCommandTimeout": 3000,  
    "pageLoadTimeout": 10000,        
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
