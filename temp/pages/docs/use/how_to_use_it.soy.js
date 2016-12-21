/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from how_to_use_it.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsUseHowToUseItHtml.
 * @public
 */

goog.module('docsUseHowToUseItHtml.incrementaldom');

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
  var param174 = function() {
    ie_open('h6');
      itext('The section below assumes that you are using the default UI, which is built using React. The AlloyEditor core is fully separated from the UI and creating another one based on any other framework is very easy.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article1');
      ie_open('h2');
        itext('Add AlloyEditor\'s CSS to the page');
      ie_close('h2');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-html');
          itext('<link href="alloy-editor/assets/alloy-editor-ocean-min.css" rel="stylesheet"></link>');
        ie_close('code');
      ie_close('pre');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article2');
      ie_open('h2');
        itext('Add AlloyEditor\'s JS to the page');
      ie_close('h2');
      ie_open('p');
        itext('There are a ');
        ie_open('strong');
          itext('few ways');
        ie_close('strong');
        itext(' to add the editor to the page:');
      ie_close('p');
      ie_open('section');
        ie_open('span');
          itext('Add the whole editor with all UI on the page');
        ie_close('span');
        ie_open('pre');
          ie_open('code', null, null,
              'class', 'language-html');
            itext('<script src="alloy-editor/alloy-editor-all-min.js"></script>');
          ie_close('code');
        ie_close('pre');
        ie_open('p');
          ie_open('span');
            itext('Add it on the page separating the CKEditor code from AlloyEditor. This is useful if in your project you already use CKEditor.');
          ie_close('span');
        ie_close('p');
        ie_open('pre');
          ie_open('code');
            ie_void('script', null, null,
                'src', 'alloy-editor/alloy-editor-no-ckeditor-min.js');
          ie_close('code');
        ie_close('pre');
        ie_open('p');
          ie_open('span');
            itext('Add it on the page separating the React code from AlloyEditor. This is useful if you already use React in your project.');
          ie_close('span');
        ie_close('p');
        ie_open('pre');
          ie_open('code');
            ie_void('script', null, null,
                'src', 'alloy-editor/alloy-editor-no-react-min.js');
          ie_close('code');
        ie_close('pre');
        ie_open('p');
          ie_open('span');
            itext('If you use both React and CKEditor on your page, then just include AlloyEditor\'s core');
          ie_close('span');
        ie_close('p');
        ie_open('pre');
          ie_open('code', null, null,
              'class', 'language-html');
            itext('<script src="alloy-editor/alloy-editor-core-min.js"></script>');
          ie_close('code');
        ie_close('pre');
      ie_close('section');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article3');
      ie_open('h2');
        itext('Invoke the static editable method of AlloyEditor');
      ie_close('h2');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('AlloyEditor.editable(\'myContentEditable\');');
        ie_close('code');
      ie_close('pre');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article4');
      ie_open('h2');
        itext('Retrieve the content from the editor');
      ie_close('h2');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('var alloyEditor = AlloyEditor.editable(\'myContentEditable\'); var content = alloyEditor.get(\'nativeEditor\').getData();');
        ie_close('code');
      ie_close('pre');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param174}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsUseHowToUseItHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsUseHowToUseItHtml extends Component {}
Soy.register(docsUseHowToUseItHtml, templates);
export { docsUseHowToUseItHtml, templates };
export default templates;
/* jshint ignore:end */
