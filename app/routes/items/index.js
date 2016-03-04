import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let item = this.store.createRecord('item');
    //For this to work, item has to be saved first...
    item.save().then(()=> {
      let discount = this.store.createRecord('discount',{
        item:item
      });
      discount.set('percentage', 2);
      //the following won't work....
      //discount.save().then(() => item.save());

      //this doesn't even work...
      discount.save().then(() => {
        item.get('discounts').addObject(discount);
        item.save();
      });
    });
    return item;

  }
});
