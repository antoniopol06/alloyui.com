'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './skins.soy';

class docsUseSkinsHtml extends Component {
};

Soy.register(docsUseSkinsHtml, templates);

export default docsUseSkinsHtml;