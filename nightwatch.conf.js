module.exports = {
  src_folders: [],
  custom_commands_path: "./properties/commands",
  custom_assertions_path: "./properties/assertions",
  page_objects_path: "./properties/pageObjects",

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    log_path: "",
    host: "127.0.0.1",
    port: 4445,
    cli_args: {
      "webdriver.chrome.driver": require('chromedriver').path,
    }
  },

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org',
      skip_testcases_on_fail: false,
      desiredCapabilities: {
        browserName: 'chrome',
        screenshots: {
          "enabled": true,
          "path": "screenshots"
        },
        chromeOptions: {
          args: ['--disable-gpu', '--no-sandbox', '--disable-extensions', '--disable-dev-shm-usage'] //"--headless"
        },
        alwaysMatch: {

        }
      }
    }
  }
};