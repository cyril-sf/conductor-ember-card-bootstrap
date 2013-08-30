import Resolver from 'resolver';

var App = Ember.Application.create({
  rootElement: '#card'
});

App.Router.map( function() {

});

App.deferReadiness();
requireModule('templates');

export default App;
