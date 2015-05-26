var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PlakaSchema   = new Schema({
	plaka: String,
	il: String
});

module.exports = mongoose.model('Plaka', PlakaSchema);
