import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  angle: DS.belongsTo('angle', { async: false }),
  createdAt: DS.attr('date', { defaultValue: function() { return new Date(); } }),
  teamMember: DS.belongsTo('user', { async: false }),
  targetValue: DS.attr('number', { defaultValue: 0 }),

  user: Ember.computed.alias('teamMember'),
  deliveryTarget: Ember.computed.alias('targetValue'),

  deliveryTargetDidChange: Ember.observer('deliveryTarget', function() {
    this.set('deliveryTarget', Math.max(0, this.get('deliveryTarget')));
  })
});