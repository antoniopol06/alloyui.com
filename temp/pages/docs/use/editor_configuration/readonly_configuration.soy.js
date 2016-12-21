/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from readonly_configuration.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsUseEditorConfigurationReadonlyConfigurationHtml.
 * @public
 */

goog.module('docsUseEditorConfigurationReadonlyConfigurationHtml.incrementaldom');

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
  var param234 = function() {
    ie_open('h4');
      itext('AlloyEditor might be set to work in "read only" mode. In read only mode, changing the content will be not possible and clicking on a link will navigate to its URL instead to open a dialog for editing it.');
    ie_close('h4');
    ie_open('p');
      ie_open('span', null, null,
          'class', 'code-header');
        itext('The read only mode can be set by passing the ');
        ie_open('strong');
          itext('readOnly');
        ie_close('strong');
        itext(' property to the editor with value ');
        ie_open('code');
          itext('true');
        ie_close('code');
        itext(':');
      ie_close('span');
    ie_close('p');
    ie_open('pre');
      ie_open('code', null, null,
          'class', 'language-js');
        itext('var editor = AlloyEditor.editable(\'editable\', {readOnly: true}});');
      ie_close('code');
    ie_close('pre');
    ie_open('p');
      itext('The value of the ');
      ie_open('code');
        itext('readOnly');
      ie_close('code');
      itext(' property might be `true` or `false`. If set to ');
      ie_open('code');
        itext('true');
      ie_close('code');
      itext(' this means changes to the content won\'t be possible and clicking on a link will navigate to its URL instead to open a dialog for changing it.');
    ie_close('p');
    ie_open('p');
      itext('This behavior might be changed any time using the following code: ');
    ie_close('p');
    ie_open('pre');
      ie_open('code', null, null,
          'class', 'language-js');
        itext('var nativeEditor = editor.get(\'nativeEditor\'); nativeEditor.setReadOnly(false); `` <p>This will make the content editable again.</p>');
      ie_close('code');
    ie_close('pre');
  };
  $templateAlias1(soy.$$assignDefaults({content: param234}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsUseEditorConfigurationReadonlyConfigurationHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsUseEditorConfigurationReadonlyConfigurationHtml extends Component {}
Soy.register(docsUseEditorConfigurationReadonlyConfigurationHtml, templates);
export { docsUseEditorConfigurationReadonlyConfigurationHtml, templates };
export default templates;
/* jshint ignore:end */
