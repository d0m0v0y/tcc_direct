import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';
import config from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import UrlTemplates from 'ember-data-url-templates';

export default ActiveModelAdapter.extend(DataAdapterMixin, UrlTemplates, {
  authorizer: 'authorizer:application',
  host: config.apiHost,
  namespace: 'v2',
  queryUrlTemplate: '{+host}{/namespace}/{pathForType}/find{?query*}'
});
