/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from editor_configuration.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsUseEditorConfigurationHtml.
 * @public
 */

goog.module('docsUseEditorConfigurationHtml.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias1 = Soy.getTemplate('guide.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var param169 = function() {
    ie_open('h6');
      itext('AlloyEditor allows you to configure the editor in the way you prefer. You will be able to custom Toolbars, Buttons and Editor behavior!');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article1');
      ie_open('h2');
        itext('Toolbar configuration');
      ie_close('h2');
      ie_open('p');
        itext('AlloyEditor allows you to configure the Toolbars in the way you prefer. You will be able to remove some of the existing Toolbars, to add your own or to reorder the buttons in each Toolbar');
      ie_close('p');
      ie_open('p');
        ie_open('i');
          itext('Please, check our ');
          ie_open('a', null, null,
              'href', '/docs/use/editor_configuration/toolbar_configuration.html');
            itext('Toolbar Configuration');
          ie_close('a');
          itext('!');
        ie_close('i');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article2');
      ie_open('h2');
        itext('Button configuration');
      ie_close('h2');
      ie_open('p');
        itext('Changing the default configuration of the buttons is possible by passing configuration attributes to them and it will affect only the button behavior, without affecting their position in the Toolbars. Both configuring the Toolbars and the buttons can be used giving maximum flexibility.');
      ie_close('p');
      ie_open('p');
        ie_open('i');
          itext('Please, check our ');
          ie_open('a', null, null,
              'href', '/docs/use/editor_configuration/button_configuration.html');
            itext('Button Configuration');
          ie_close('a');
          itext('!');
        ie_close('i');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article3');
      ie_open('h2');
        itext('ReadOnly configuration');
      ie_close('h2');
      ie_open('p');
        itext('Changing editor\u00B4s behavior. ReadOnly is a property that it allows you enable or disable AlloyEditor.');
      ie_close('p');
      ie_open('p');
        ie_open('i');
          itext('Please, check our ');
          ie_open('a', null, null,
              'href', '/docs/use/editor_configuration/readonly_configuration.html');
            itext('ReadOnly Configuration');
          ie_close('a');
          itext('!');
        ie_close('i');
      ie_close('p');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param169}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsUseEditorConfigurationHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsUseEditorConfigurationHtml extends Component {}
Soy.register(docsUseEditorConfigurationHtml, templates);
export { docsUseEditorConfigurationHtml, templates };
export default templates;
/* jshint ignore:end */
