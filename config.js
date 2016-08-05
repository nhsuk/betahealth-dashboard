// Load environment variables from .env file if available
require('dotenv').load();

var config = {
  env: 'prod',

  host: '0.0.0.0',
  port: process.env.PORT || 5000,

  // Available themes:
  // + bordeau
  // + harlequin
  // + light-grey
  // + light-yellow
  // + night-blue
  // + snow
  // + yellow
  theme: 'night-blue',

  // clients configs
  api: {
    slack: {
      // Slack api token
      // $SLACK_TOKEN
      token: process.env.SLACK_TOKEN,

      // NOTE: Following config parameters are OPTIONAL!
      // Download the uploaded images and show them in dashboard
      // $SLACK_SHOW_IMAGES
      showImages: true,
      // The age of temp images to delete
      // $SLACK_MAX_IMAGE_AGE
      maxImageAge: '8 hours',
    },
  },

  // define duration between each dashboard rotation (ms)
  rotationDuration: 8000,

  // define the interval used by Mozaïk Bus to call registered APIs
  apisPollInterval: 15000,

  dashboards: [{
    // 4 x 3 dashboard
    columns: 4,
    rows: 3,
    widgets: [{
      type: 'travis.repository',
      owner: 'nhsuk',
      repository: 'betahealth',
      columns: 1,
      rows: 1,
      x: 0,
      y: 0,
    }, {
      type: 'travis.build_history',
      owner: 'nhsuk',
      repository: 'betahealth',
      columns: 1,
      rows: 2,
      x: 0,
      y: 1,
    }, {
      type: 'github.repository_contributors_stats',
      repository: 'nhsuk/betahealth',
      columns: 1,
      rows: 1,
      x: 1,
      y: 0,
    }, {
      type: 'github.pull_requests',
      repository: 'nhsuk/betahealth',
      columns: 1,
      rows: 2,
      x: 1,
      y: 1,
    }, {
      type: 'github.status',
      columns: 1,
      rows: 1,
      x: 2,
      y: 0
    }, {
      type: 'slack.channel',
      channel: 'nhsuk-beta-notices',
      columns: 2,
      rows: 2,
      x: 2,
      y: 1
    }, {
      type: 'weather.weather',
      city: 'London',
      country: 'UK',
      lang: 'en',
      limit: 1,
      columns: 1,
      rows: 1,
      x: 3,
      y: 0
    }, ]
  }, ]
};

module.exports = config;
