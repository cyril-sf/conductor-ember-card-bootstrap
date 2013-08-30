/*global Conductor */

Conductor.require('loader.js');
Conductor.require('jquery.js');
Conductor.require('handlebars.js');
Conductor.require('ember.js');

Conductor.card( {
  App: null,

  initializeDOM: function () {
    document.body.innerHTML = "<div id=\"card\"></div>";
    Ember.run(this.App, 'advanceReadiness');
  },

  activate: function() {
    Conductor.Oasis.configure('eventCallback', Ember.run);
    this.App = requireModule('app/application');
  }
} );
