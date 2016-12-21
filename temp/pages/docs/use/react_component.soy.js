/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from react_component.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsUseReactComponentHtml.
 * @public
 */

goog.module('docsUseReactComponentHtml.incrementaldom');

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
  var param179 = function() {
    ie_open('h6');
      itext('Creating a React component');
    ie_close('h6');
    ie_open('p');
      ie_open('h4');
        itext('"Talking is cheap, show me the code" (to quote Linus Torvalds)');
      ie_close('h4');
    ie_close('p');
    ie_open('p');
      itext('Instead just explaining how to do it, we actually created an example ');
      ie_open('a', null, null,
          'href', 'https://github.com/ipeychev/alloyeditor-react-component');
        itext('repository');
      ie_close('a');
      itext(' on GitHub, which contains code and ');
      ie_open('a', null, null,
          'href', 'https://github.com/ipeychev/alloyeditor-react-component/blob/master/README.md');
        itext('instructions');
      ie_close('a');
      itext(' for usage. Please follow the ');
      ie_open('a', null, null,
          'href', 'https://github.com/ipeychev/alloyeditor-react-component/blob/master/README.md');
        itext('instructions');
      ie_close('a');
      itext(' there.');
    ie_close('p');
    ie_open('p');
      itext('The repository is an example project, which renders a page on the server an creates an instance of AlloyEditor in the browser. Same React component is used on both client and server and one cool thing is that instead to create just one bundle file, two bundles are created - one for the application files and another one for AlloyEditor file itself. In this case you will leverage browser\'s cache.');
    ie_close('p');
  };
  $templateAlias1(soy.$$assignDefaults({content: param179}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsUseReactComponentHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsUseReactComponentHtml extends Component {}
Soy.register(docsUseReactComponentHtml, templates);
export { docsUseReactComponentHtml, templates };
export default templates;
/* jshint ignore:end */
