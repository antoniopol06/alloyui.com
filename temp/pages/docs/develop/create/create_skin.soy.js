/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from create_skin.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDevelopCreateCreateSkinHtml.
 * @public
 */

goog.module('docsDevelopCreateCreateSkinHtml.incrementaldom');

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
  var param194 = function() {
    ie_open('h6');
      itext('AlloyEditor bundles a couple of gorgeus skins that you can use out of the box. However, if you need a better integration with your app\'s look and feel, you can easily create your own skin.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article1');
      ie_open('h2');
        itext('Get ready to build AlloyEditor');
      ie_close('h2');
      ie_open('p');
        itext('Follow the instructions in our ');
        ie_open('a', null, null,
            'href', '/docs/use/how_to_build_it.html');
          itext('How to build it');
        ie_close('a');
        itext(' guide to know how to change and build AlloyEditor.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article2');
      ie_open('h2');
        itext('Create skin folders');
      ie_close('h2');
      ie_open('p');
        itext('Create a new directory under ');
        ie_open('code');
          itext('src/ui/react/assets/icons/');
        ie_close('code');
        itext(' with the name of your skin ');
        ie_open('small');
          itext('(e.g ');
          ie_open('code');
            itext('zebra');
          ie_close('code');
          itext(')');
        ie_close('small');
        itext('. This directory will contain all the required icons of your skin.');
      ie_close('p');
      ie_open('p');
        itext('Create a new directory under ');
        ie_open('code');
          itext('src/ui/react/assets/sass/skin');
        ie_close('code');
        itext(' with the name of your skin ');
        ie_open('small');
          itext('(e.g ');
          ie_open('code');
            itext('zebra');
          ie_close('code');
          itext(')');
        ie_close('small');
        itext('. This directory will contain the styling of the skin.');
      ie_close('p');
      ie_open('blockquote');
        ie_open('p');
          itext('Note: You can reuse our own ');
          ie_open('a', null, null,
              'href', '/docs/use/skins.html');
            itext('Skin Architecture');
          ie_close('a');
          itext(' to simplify the process of creating your own skin!');
        ie_close('p');
      ie_close('blockquote');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article3');
      ie_open('h2');
        itext('Create your Skin');
      ie_close('h2');
      ie_open('p');
        itext('Place all the icons you need inside an ');
        ie_open('code');
          itext('svg');
        ie_close('code');
        itext(' folder in your skin\'s icon folder. These icons will be merged with the default ones, and the resulting set will be used to generate your skin icon font');
      ie_close('p');
      ie_open('p');
        itext('Create a file called ');
        ie_open('code');
          itext('main.scss');
        ie_close('code');
        itext(' inside your skin folder. This will be the entry point of your skin and should contain all the styling of your look and feel.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article4');
      ie_open('h2');
        itext('Build the editor');
      ie_close('h2');
      ie_open('p');
        ie_open('span', null, null,
            'class', 'code-header');
          itext('Your skin will be automatically picked up when building AlloyEditor:');
        ie_close('span');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-bash');
          itext('gulp [build]');
        ie_close('code');
      ie_close('pre');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article5');
      ie_open('h2');
        itext('Use your Skin');
      ie_close('h2');
      ie_open('p');
        ie_open('span', null, null,
            'class', 'code-header');
          itext('Include your skin to the page instead any of the default ones:');
        ie_close('span');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-html');
          itext('<link href="alloy-editor/assets/alloy-editor-zebra-min.css" rel="stylesheet">');
        ie_close('code');
      ie_close('pre');
      ie_open('p');
        itext('That is everything! Now AlloyEditor will appear with a new beautiful look and feel!');
      ie_close('p');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param194}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDevelopCreateCreateSkinHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsDevelopCreateCreateSkinHtml extends Component {}
Soy.register(docsDevelopCreateCreateSkinHtml, templates);
export { docsDevelopCreateCreateSkinHtml, templates };
export default templates;
/* jshint ignore:end */
