/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from index.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace updatesIndex.
 * @public
 */

goog.module('updatesIndex.incrementaldom');

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

var $templateAlias2 = Soy.getTemplate('SSGUpdates.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('main.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param146 = function() {
    ie_open('div');
      ie_open('header', null, null,
          'class', 'header');
        ie_open('div', null, null,
            'class', 'container');
          ie_open('h1', null, null,
              'class', 'header-title');
            itext('Updates');
          ie_close('h1');
          ie_open('h1', null, null,
              'class', 'header-subtitle');
            itext('Check out what\'s new.');
          ie_close('h1');
        ie_close('div');
      ie_close('header');
      $templateAlias2({updates: opt_data.page.updates}, null, opt_ijData);
    ie_close('div');
  };
  $templateAlias1(soy.$$assignDefaults({content: param146}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'updatesIndex.render';
}

exports.render.params = ["page"];
exports.render.types = {"page":"any"};
templates = exports;
return exports;

});

class updatesIndex extends Component {}
Soy.register(updatesIndex, templates);
export { updatesIndex, templates };
export default templates;
/* jshint ignore:end */
