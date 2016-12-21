/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from button_configuration.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsUseEditorConfigurationButtonConfigurationHtml.
 * @public
 */

goog.module('docsUseEditorConfigurationButtonConfigurationHtml.incrementaldom');

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
  var param229 = function() {
    ie_open('h4');
      itext('Changing the default configuration of the buttons is possible by passing configuration attributes to them and it will affect only the button behavior, without affecting their position in the Toolbars. Both configuring the Toolbars and the buttons can be used giving maximum flexibility.');
    ie_close('h4');
    ie_open('p');
      itext('The buttons are configured via a common ');
      ie_open('strong');
        itext('buttonCfg');
      ie_close('strong');
      itext(' property, like this:');
    ie_close('p');
    ie_open('pre');
      ie_open('code', null, null,
          'class', 'language-js');
        itext('var editor = AlloyEditor.editable(\'editable\', {buttonCfg: {bold: {tabIndex: 1}}});');
      ie_close('code');
    ie_close('pre');
    ie_open('p');
      itext('The ');
      ie_open('code');
        itext('buttonCfg');
      ie_close('code');
      itext(' is the property which contains the configurations for the different buttons. In this example, ');
      ie_open('code');
        itext('bold');
      ie_close('code');
      itext(' is the name of the button, which has to be configured and ');
      ie_open('code');
        itext('tabIndex');
      ie_close('code');
      itext(' is the property with the new value of 1 (by default 0). Each button has a static property ');
      ie_open('strong');
        itext('key');
      ie_close('strong');
      itext(' which value is the button name as should be passed to the configuration.');
    ie_close('p');
    ie_open('p');
      itext('The list of properties for each button can be retrieved from the ');
      ie_open('a', null, null,
          'href', '/api/classes/ButtonBold.html');
        itext('API documentation');
      ie_close('a');
      itext(', including the ');
      ie_open('strong');
        itext('key');
      ie_close('strong');
      itext(' property, which should be passed as button name in the configuration.');
    ie_close('p');
  };
  $templateAlias1(soy.$$assignDefaults({content: param229}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsUseEditorConfigurationButtonConfigurationHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsUseEditorConfigurationButtonConfigurationHtml extends Component {}
Soy.register(docsUseEditorConfigurationButtonConfigurationHtml, templates);
export { docsUseEditorConfigurationButtonConfigurationHtml, templates };
export default templates;
/* jshint ignore:end */
