exports.get_landing = (req, res, next) => {
  res.render('landing', {title: 'Express'});
}

exports.submit_lead = (req, res, next) => {
  console.log('lead email:', req.body.lead_email);
  res.redirect('/');  // go back to landing page after submit form
}
