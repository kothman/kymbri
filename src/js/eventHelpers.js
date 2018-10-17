let u = require('umbrellajs');
let Mustache = require('mustache');
let cards = require('json-loader!yaml-loader!../cards.yaml');

module.exports = {
    handleWaresSelection: function(i) {
	console.log(i);

	let template = u('#wares-card-display-template').html();
	var rendered = Mustache.render(template, cards.cards[i-1]);
	u('#wares-card-display').html(rendered);

	
	u('#card-overlay').toggleClass('active');
	u('#card-overlay').on('click', this.handleOutsideClick);
    },

    handleDismissCard: function() {
	u('#card-overlay').toggleClass('active');
	u('#card-overlay').off('click', this.handleOutsideClick);
    },

    handleOutsideClick: function(e) {
	console.log(e);
	if (u(e.target).is('#card-overlay'))
	    EventHelpers.handleDismissCard();
    }
}
