'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './ckeditor_plugins.soy';

class docsUseCkeditorPluginsHtml extends Component {
};

Soy.register(docsUseCkeditorPluginsHtml, templates);

export default docsUseCkeditorPluginsHtml;