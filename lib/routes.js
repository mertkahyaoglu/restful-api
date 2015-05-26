var router       = require('express').Router();
var Plaka        = require('../models/plaka');

router.use(function(req, res, next) {
    console.log('Yeni İstek');
    next();
});

// index
router.get('/', function(req, res) {
  res.json({ mesaj: 'Plaka API!!!' });
});

// tüm plakaları getir
router.route('/plakalar')

  // plaka ekle
  .post(function(req, res) {
    var plaka = new Plaka();
    plaka.il = req.body.il;
    plaka.plaka = req.body.plaka;

    plaka.save(function(err) {
      if (err) res.send(err);
      res.json({ mesaj: 'Yeni plaka girildi!' });
    });
  })

  // tüm plakaları getir
  .get(function(req, res) {
    Plaka.find(function(err, plakalar) {
			if (err) res.send(err);
			res.json(plakalar);
		});
  });


router.route('/plakalar/:il')

	// ilin plakasını getir
	.get(function(req, res) {
		Plaka.find({il: req.params.il}, function(err, plaka) {
			if (err) res.send(err);
			res.json(plaka);
		});
	})

	// ilin plakasını güncelle
	.put(function(req, res) {
		Plaka.findOne({il: req.params.il}, function(err, plaka) {
			if (err) res.send(err);
			plaka.plaka = req.body.plaka;

			plaka.save(function(err) {
				if (err) res.send(err);
				res.json({ message: 'Plaka Güncellendi!' });
			});
		});
	})

	// plakayı sil
	.delete(function(req, res) {
		Plaka.remove({il: req.params.il}, function(err, plaka) {
			if (err) res.send(err);
			res.json({ mesaj: 'Plaka silindi!' });
		});
	});

module.exports.router = router;
