import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render(this.routeName, {
      into: 'application',
      outlet: 'side-panel',
      view: 'sidePanel'
    });
  },
});