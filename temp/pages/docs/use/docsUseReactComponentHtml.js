'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './react_component.soy';

class docsUseReactComponentHtml extends Component {
};

Soy.register(docsUseReactComponentHtml, templates);

export default docsUseReactComponentHtml;