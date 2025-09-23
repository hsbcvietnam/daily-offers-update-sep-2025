const express = require('express');
// const path = require('path');
// const config = path.join(__dirname, '../config/config');

const router = express.Router();
const folderName = 'projects/daily-offers';

let curDate = new Date();
let hideDate = new Date('31 Dec 2024 23:59:59')
// Test Date
// let showDate = new Date('1 Jan 2024 23:59:59') // Hide this when air
// Air Date
let showDate = new Date('17 Jun 2024 23:59:59') // Show this when air

/* All the routes goes here */
router.get('/daily-offers/en', function(req, res, next) {
  res.render(`${folderName}/daily-offers/index_en`, {
    folderName,
    csrfToken: req.csrfToken(),
    language: 'english',
    search: req.query,
    campaign: 'promotion'
  });
});

router.get('/daily-offers/all/en', function(req, res, next) {
  res.render(`${folderName}/daily-offers/index_en`, {
    folderName,
    csrfToken: req.csrfToken(),
    language: 'english',
    search: req.query,
    campaign: 'promotion'
  });
});

router.get('/daily-offers/liveplusdining', function(req, res, next) {
  res.render(`${folderName}/daily-offers/liveplus`, {
    folderName,
    csrfToken: req.csrfToken(),
    search: req.query,
    campaign: 'promotion'
  });
});

router.get('/daily-offers/dining-entertainment/en', function(req, res, next) {
  res.render(`${folderName}/daily-offers/dining-entertainment`, {
    folderName,
    csrfToken: req.csrfToken(),
    search: req.query,
    campaign: 'promotion'
  });
});

router.get('/daily-offers/shopping/en', function(req, res, next) {
  res.render(`${folderName}/daily-offers/shopping`, {
    folderName,
    csrfToken: req.csrfToken(),
    search: req.query,
    campaign: 'promotion'
  });
});

router.get('/daily-offers/travel/en', function(req, res, next) {
  res.render(`${folderName}/daily-offers/travel`, {
    folderName,
    csrfToken: req.csrfToken(),
    search: req.query,
    campaign: 'promotion'
  });
});

router.get('/daily-offers/others/en', function(req, res, next) {
  res.render(`${folderName}/daily-offers/others`, {
    folderName,
    csrfToken: req.csrfToken(),
    search: req.query,
    campaign: 'promotion'
  });
});

if (curDate.getTime() < hideDate.getTime()) {
  router.get('/daily-offers/iphone16', function(req, res, next) {
    res.render(`${folderName}/daily-offers/iphone`, {
      folderName,
      csrfToken: req.csrfToken(),
      search: req.query,
      campaign: 'promotion'
    });
  });
}

router.get('/uu-dai-moi-ngay/vn', function(req, res, next) {
  res.render(`${folderName}/uu-dai-moi-ngay/index_vi`, {
    folderName,
    csrfToken: req.csrfToken(),
    language: 'vietnamese',
    search: req.query,
    campaign: 'promotion'
  });
});

router.get('/uu-dai-moi-ngay/tat-ca/vn', function(req, res, next) {
  res.render(`${folderName}/uu-dai-moi-ngay/index_vi`, {
    folderName,
    csrfToken: req.csrfToken(),
    language: 'vietnamese',
    search: req.query,
    campaign: 'promotion'
  });
});

router.get('/uu-dai-moi-ngay/amthucliveplus', function(req, res, next) {
  res.render(`${folderName}/uu-dai-moi-ngay/liveplus`, {
    folderName,
    csrfToken: req.csrfToken(),
    search: req.query,
    campaign: ''
  });
});

router.get('/uu-dai-moi-ngay/an-uong-giai-tri/vn', function(req, res, next) {
  res.render(`${folderName}/uu-dai-moi-ngay/an-uong-giai-tri`, {
    folderName,
    csrfToken: req.csrfToken(),
    search: req.query,
    campaign: ''
  });
});

router.get('/uu-dai-moi-ngay/mua-sam/vn', function(req, res, next) {
  res.render(`${folderName}/uu-dai-moi-ngay/mua-sam`, {
    folderName,
    csrfToken: req.csrfToken(),
    search: req.query,
    campaign: ''
  });
});

router.get('/uu-dai-moi-ngay/du-lich/vn', function(req, res, next) {
  res.render(`${folderName}/uu-dai-moi-ngay/du-lich`, {
    folderName,
    csrfToken: req.csrfToken(),
    search: req.query,
    campaign: ''
  });
});

router.get('/uu-dai-moi-ngay/khac/vn', function(req, res, next) {
  res.render(`${folderName}/uu-dai-moi-ngay/khac`, {
    folderName,
    csrfToken: req.csrfToken(),
    search: req.query,
    campaign: ''
  });
});
if (curDate.getTime() < hideDate.getTime()) {
  router.get('/uu-dai-moi-ngay/iphone16', function(req, res, next) {
    res.render(`${folderName}/uu-dai-moi-ngay/iphone`, {
      folderName,
      csrfToken: req.csrfToken(),
      search: req.query,
      campaign: ''
    });
  });
}

module.exports = router;
