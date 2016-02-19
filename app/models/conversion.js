import DS from 'ember-data';

export default DS.Model.extend({
  shortReference: DS.attr(),
  settlementDate: DS.attr('date'),
  conversionDate: DS.attr('date'),
  buyCurrency: DS.attr(),
  sellCurrency: DS.attr(),
  clientBuyAmount: DS.attr(),
  clientSellAmount: DS.attr(),
  status: DS.attr()
});
