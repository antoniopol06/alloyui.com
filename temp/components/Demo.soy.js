/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Demo.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Demo.
 * @public
 */

goog.module('Demo.incrementaldom');

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


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'id', opt_data.divId,
      'contenteditable', 'true',
      'data-placeholder', 'Write content here');
    if (opt_data.contentHtml) {
      var dyn0 = opt_data.contentHtml;
      if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
    }
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Demo.render';
}

exports.render.params = ["divId","contentHtml"];
exports.render.types = {"divId":"any","contentHtml":"any"};
templates = exports;
return exports;

});

class Demo extends Component {}
Soy.register(Demo, templates);
export { Demo, templates };
export default templates;
/* jshint ignore:end */
