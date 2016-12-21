/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from skins.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsUseSkinsHtml.
 * @public
 */

goog.module('docsUseSkinsHtml.incrementaldom');

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
  var param184 = function() {
    ie_open('h6');
      itext('Skins in AlloyEditor are a very powerful feature that allows you to seamlessly integrate the editor inside your app.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article1');
      ie_open('h2');
        itext('Skin Architecture');
      ie_close('h2');
      ie_open('p');
        itext('AlloyEditor skins are organized according to the following principles:');
      ie_close('p');
      ie_open('section', null, null,
          'class', 'guide-nested');
        ie_open('h4', null, null,
            'class', 'guide-step');
          itext('Variables');
        ie_close('h4');
        ie_open('p');
          itext('Style values are parameterized as much as possible. This allows skins to fully extend others just by changing a small set of variable values.');
        ie_close('p');
      ie_close('section');
      ie_open('section', null, null,
          'class', 'guide-nested');
        ie_open('h4', null, null,
            'class', 'guide-step');
          itext('Components');
        ie_close('h4');
        ie_open('p');
          itext('A skin is created by combining one or more components together. Different skins may use different components, so irrelevant styling can be easily stripped out.');
        ie_close('p');
      ie_close('section');
      ie_open('section', null, null,
          'class', 'guide-nested');
        ie_open('h4', null, null,
            'class', 'guide-step');
          itext('Structure vs Skin');
        ie_close('h4');
        ie_open('p');
          itext('All styling is separated into structure and skin. Structure represents everything that affects the sizing and position of the elements. Meanwhile, skin represents all the purely cosmetic changes.');
        ie_close('p');
      ie_close('section');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article2');
      ie_open('h2');
        itext('Skins Overview');
      ie_close('h2');
      ie_open('p');
        itext('At this moment, you can use any of the following skins out of the box:');
      ie_close('p');
      ie_open('section', null, null,
          'class', 'guide-nested');
        ie_open('h4', null, null,
            'class', 'guide-step');
          itext('Ocean (default)');
        ie_close('h4');
        ie_open('div', null, null,
            'class', 'thumbnail');
          ie_open('img', null, null,
              'class', 'img img-polaroid',
              'src', '<%= @getAssetsUrl() %>/img/guides/skin_ocean.png');
          ie_close('img');
        ie_close('div');
      ie_close('section');
      ie_open('section', null, null,
          'class', 'guide-nested');
        ie_open('h4', null, null,
            'class', 'guide-step');
          itext('Atlas');
        ie_close('h4');
        ie_open('div', null, null,
            'class', 'thumbnail');
          ie_open('img', null, null,
              'class', 'img img-polaroid',
              'src', '<%= @getAssetsUrl() %>/img/guides/skin_atlas.png');
          ie_close('img');
        ie_close('div');
        ie_open('p');
          ie_open('span', null, null,
              'class', 'code-header');
            itext('Add the following external stylesheet to use ');
            ie_open('b');
              itext('Atlas Skin');
            ie_close('b');
          ie_close('span');
        ie_close('p');
        ie_open('pre');
          ie_open('code', null, null,
              'class', 'language-html');
            itext('<link href="alloy-editor/assets/alloy-editor-atlas-min.css" rel="stylesheet">');
          ie_close('code');
        ie_close('pre');
      ie_close('section');
      ie_open('section', null, null,
          'class', 'guide-nested');
        ie_open('h4', null, null,
            'class', 'guide-step');
          itext('Moono');
        ie_close('h4');
        ie_open('div', null, null,
            'class', 'thumbnail');
          ie_open('img', null, null,
              'class', 'img img-polaroid',
              'src', '<%= @getAssetsUrl() %>/img/guides/skin_moono.png');
          ie_close('img');
        ie_close('div');
        ie_open('p');
          ie_open('span', null, null,
              'class', 'code-header');
            itext('Add the following external stylesheet to use ');
            ie_open('b');
              itext('Moono Skin');
            ie_close('b');
          ie_close('span');
        ie_close('p');
        ie_open('pre');
          ie_open('code', null, null,
              'class', 'language-html');
            itext('<link href="alloy-editor/assets/alloy-editor-moono-min.css" rel="stylesheet">');
          ie_close('code');
        ie_close('pre');
      ie_close('section');
      ie_open('p', null, null,
          'class', 'guide-note');
        itext('Check out ');
        ie_open('a', null, null,
            'href', '/docs/create/create_skin.html');
          itext('this guide');
        ie_close('a');
        itext(' to know more about how to create your own skin.');
      ie_close('p');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param184}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsUseSkinsHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsUseSkinsHtml extends Component {}
Soy.register(docsUseSkinsHtml, templates);
export { docsUseSkinsHtml, templates };
export default templates;
/* jshint ignore:end */
