/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from create.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDevelopCreateHtml.
 * @public
 */

goog.module('docsDevelopCreateHtml.incrementaldom');

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
  var param154 = function() {
    ie_open('h6');
      itext('How to create your buttons, skins, toolbars and UI!');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article1');
      ie_open('h2');
        itext('Create Buttons');
      ie_close('h2');
      ie_open('p');
        itext('If you run the editor with the default UI, which is written in React, then adding a button will be straightforward. Buttons are standard React classes. For your convenience, there is also a number of mixins, which you can use that provide basic functionality out of the box. Then, use CKEditor\'s API to do style the content and that is it!');
      ie_close('p');
      ie_open('p');
        ie_open('i');
          itext('Please, check our ');
          ie_open('a', null, null,
              'href', '/docs/develop/create/create_buttons.html');
            itext('Create Buttons Guide');
          ie_close('a');
          itext('!');
        ie_close('i');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article2');
      ie_open('h2');
        itext('Create Skins');
      ie_close('h2');
      ie_open('p');
        itext('AlloyEditor bundles a couple of gorgeus skins that you can use out of the box. However, if you need a better integration with your app\'s look and feel, you can easily create your own skin.');
      ie_close('p');
      ie_open('p');
        ie_open('i');
          itext('Please, check our ');
          ie_open('a', null, null,
              'href', '/docs/develop/create/create_skin.html');
            itext('Create Skins Guide');
          ie_close('a');
          itext('!');
        ie_close('i');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article3');
      ie_open('h2');
        itext('Create Toolbars');
      ie_close('h2');
      ie_open('p');
        itext('Adding a new toolbar is also as straightforward as adding a button.');
      ie_close('p');
      ie_open('p');
        ie_open('i');
          itext('Please, check our ');
          ie_open('a', null, null,
              'href', '/docs/develop/create/create_toolbars.html');
            itext('Create Toolbars Guide');
          ie_close('a');
          itext('!');
        ie_close('i');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article4');
      ie_open('h2');
        itext('Create UI');
      ie_close('h2');
      ie_open('p');
        itext('You don\'t like React? You prefer jQuery? Or you are JavaScript ninja and prefer writing vanilla JS? Welcome on board. You\'ll see how straightforward it is to create a whole new UI for AlloyEditor.');
      ie_close('p');
      ie_open('p');
        ie_open('i');
          itext('Please, check our ');
          ie_open('a', null, null,
              'href', '/docs/develop/create.html');
            itext('Create Toolbars Guide');
          ie_close('a');
          itext('!');
        ie_close('i');
      ie_close('p');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param154}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDevelopCreateHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsDevelopCreateHtml extends Component {}
Soy.register(docsDevelopCreateHtml, templates);
export { docsDevelopCreateHtml, templates };
export default templates;
/* jshint ignore:end */
