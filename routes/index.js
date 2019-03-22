const express = require('express');
const router = express.Router();

const landing = require('../controllers/landing');

router.get('/', landing.get_landing);

router.post('/', landing.submit_lead);

router.get('/leads', landing.show_leads);

router.get('/lead/:lead_id', landing.show_lead);

module.exports = router;
