/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from search.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace pageDocsSearch.
 * @public
 */

goog.module('pageDocsSearch.incrementaldom');

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

var $templateAlias2 = Soy.getTemplate('SSGSearch.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('guide.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param131 = function() {
    ie_open('div', null, null,
        'class', 'container-hybrid docs-home-top');
      $templateAlias2({action: '/docs/search.html', placeholder: 'Search Docs', section: opt_data.site.index.children[0]}, null, opt_ijData);
    ie_close('div');
  };
  $templateAlias1(soy.$$assignDefaults({elementClasses: 'docs', content: param131}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'pageDocsSearch.render';
}

exports.render.params = ["site"];
exports.render.types = {"site":"any"};
templates = exports;
return exports;

});

class pageDocsSearch extends Component {}
Soy.register(pageDocsSearch, templates);
export { pageDocsSearch, templates };
export default templates;
/* jshint ignore:end */
