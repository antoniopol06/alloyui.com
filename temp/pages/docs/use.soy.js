/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from use.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsUseHtml.
 * @public
 */

goog.module('docsUseHtml.incrementaldom');

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
  var param141 = function() {
    ie_open('h6');
      itext('The section below assumes that you are using the default UI, which is built using React. The AlloyEditor core is fully separated from the UI and creating another one based on any other framework is very easy.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article1');
      ie_open('h2');
        itext('Download AlloyEditor');
      ie_close('h2');
      ie_open('p');
        itext('Option 1) Download AlloyEditor from ');
        ie_open('a', null, null,
            'href', '<%= @getDownloadUrl() %>',
            'onclick', '_gaq.push([\'_trackEvent\', \'Downloads\', \'Top\', \'<%= @getDownloadUrl() %>\']);');
          itext('here');
        ie_close('a');
        itext(', then unzip it.');
      ie_close('p');
      ie_open('p');
        itext('Option 2) Install AlloyEditor via Bower (');
        ie_open('code');
          itext('bower install alloyeditor');
        ie_close('code');
        itext(')');
      ie_close('p');
      ie_open('p');
        itext('Option 3) Install AlloyEditor via NPM (');
        ie_open('code');
          itext('npm install alloyeditor');
        ie_close('code');
        itext(')');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article2');
      ie_open('h2');
        itext('Copy and Paste');
      ie_close('h2');
      ie_open('p');
        itext('If you downloaded the zip file:');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-html');
          itext('<link href="alloy-editor/assets/alloy-editor-ocean-min.css" rel="stylesheet"> <script src="alloy-editor/alloy-editor-all-min.js"></script>');
        ie_close('code');
      ie_close('pre');
      ie_open('p');
        itext('If you downloaded it via Bower:');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-html');
          itext('<link href="bower_components/alloyeditor/dist/alloy-editor/assets/alloy-editor-ocean-min.css" rel="stylesheet"> <script src="bower_components/alloyeditor/dist/alloy-editor/alloy-editor-all-min.js"></script>');
        ie_close('code');
      ie_close('pre');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article3');
      ie_open('h2');
        itext('Use AlloyEditor');
      ie_close('h2');
      ie_open('p');
        ie_open('span', null, null,
            'class', 'code-header');
          itext('Invoke the ');
          ie_open('code');
            itext('editable');
          ie_close('code');
          itext(' static method on AlloyEditor passing the ID of the node you want to edit');
        ie_close('span');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('AlloyEditor.editable(\'myContentEditable\');');
        ie_close('code');
      ie_close('pre');
      ie_open('p', null, null,
          'class', 'guide-note');
        itext('And that is everything you need to get started!');
      ie_close('p');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param141}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsUseHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsUseHtml extends Component {}
Soy.register(docsUseHtml, templates);
export { docsUseHtml, templates };
export default templates;
/* jshint ignore:end */
