require('../scss/main.scss');
const Card = require('./Card.js');
const Mustache = require('mustache');
const EventHelpers = require('./eventHelpers');
const utilities = require('./utilities');
window.EventHelpers = EventHelpers;

var view = require('json-loader!yaml-loader!../cards.yaml');

for (let i = 1; i <= view['cards'].length; i++) {
    view['cards'][i-1].id = i;
    view['cards'][i-1].price = utilities.formatAsUSD(view['cards'][i-1].price);
}

console.log(view);

var cardContainer = document.getElementById('cards-container');

var template = document.getElementById('wares-card-template');
var rendered = Mustache.render(template.innerHTML, view);
document.getElementById('cards-container').innerHTML = rendered;
