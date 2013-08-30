(function() {

var conductor, card;

module("Card loading", {
  setup: function() {
    conductor = new Conductor({
      testing: true,
      conductorURL: 'conductor-0.2.0.js.html'
    });
  }
});

test("The Ember application starts and renders the application template", function() {
  stop();

  var url = 'card.js';

  card = conductor.load( url, 1 );

  card.appendTo('#qunit-fixture');
  card.render();
});

})();
