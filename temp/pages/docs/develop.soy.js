/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from develop.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDevelopHtml.
 * @public
 */

goog.module('docsDevelopHtml.incrementaldom');

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
  var param103 = function() {
    ie_open('h6');
      itext('The main idea behind the editor is to fully separate the core from the UI. And not only to separate it, but to give opportunity to people to add very easy new Buttons and Toolbars or to create completely new UI, based on different Framework or vanilla JavaScript.');
    ie_close('h6');
    ie_open('h1');
      itext('Architecture');
    ie_close('h1');
    ie_open('article', null, null,
        'id', 'article1');
      ie_open('h2');
        itext('Core');
      ie_close('h2');
      ie_open('section', null, null,
          'class', 'guide-nested');
        ie_open('h4', null, null,
            'class', 'guide-step');
          itext('Built on top of CKEditor');
        ie_close('h4');
        ie_open('p');
          itext('AlloyEditor uses CKEditor under the hood to deal with the HTML. Browsers still generate very inconsistent HTML, not to mention how buggy they are. In fact, to create an editor, which is able to handle all browsers, let\'s say IE9+, Chrome, Firefox and Safari, is very challenging. Fortunately, CKEditor does it well, so it was the natural choice not only because of that, but because it is mature, well documented and configurable.');
        ie_close('p');
        ie_open('p');
          itext('Not everything from CKEditor is being used. In fact, AlloyEditor uses only the core from it. The whole UI has been discarded and the version of CKEditor which comes in AlloyEditor is twice smaller than the version OOTB.');
        ie_close('p');
        ie_open('p');
          ie_open('h4', null, null,
              'class', 'guide-step');
            itext('Plugins and UI Core');
          ie_close('h4');
        ie_close('p');
        ie_open('p');
          itext('On top of what CKEditor provides, new plugins and modules were created, which form the core of AlloyEditor. Among these plugins is a plugin, which adds new functions which provide information about the selection - its regions, direction and so on. This is the key part and that is what allows the Toolbars to display themselves just above or below the selection. Other plugins are related to Drag&Drop of images directly in the editor, or they provide common API for creating, editing and removing links and so on.');
        ie_close('p');
        ie_open('p');
          itext('There is no much dependency of CKEditor in AlloyEditor. If there is better base, or if we reach the point when creation of new core would be easier but we still will be able to support the majority of the browsers, nothing prevents us of replacing CKEditor core with our own.');
        ie_close('p');
      ie_close('section');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article2');
      ie_open('h2');
        itext('UI');
      ie_close('h2');
      ie_open('p');
        itext('The UI has been thought in the way that it should provide the following functionality:');
      ie_close('p');
      ie_open('ul');
        ie_open('li');
          itext('Toolbars should allow adding, removing and reordering Buttons.');
        ie_close('li');
        ie_open('li');
          itext('The developer should be able to add new Toolbars to the editor.');
        ie_close('li');
        ie_open('li');
          itext('It should be easy to create a new UI. The default one uses React. However, if a developer wants to use another Framework or to create UI using vanilla JavaScript and CSS - that should be possible.');
        ie_close('li');
      ie_close('ul');
      ie_open('p', null, null,
          'class', 'guide-note');
        itext('Currently AlloyEditor supports only one UI - it uses React. Please feel free to contact us if you want to contribute another UI.');
      ie_close('p');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param103}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDevelopHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsDevelopHtml extends Component {}
Soy.register(docsDevelopHtml, templates);
export { docsDevelopHtml, templates };
export default templates;
/* jshint ignore:end */
