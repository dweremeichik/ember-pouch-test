import Model from 'ember-pouch/model';
import DS from 'ember-data';

const {
  attr,
  belongsTo
} = DS;

export default Model.extend({
  triggerQuantity: attr('number'),
  percentage: attr('number'),
  item: belongsTo('item')
});
