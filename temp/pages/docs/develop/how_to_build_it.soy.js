/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from how_to_build_it.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDevelopHowToBuildItHtml.
 * @public
 */

goog.module('docsDevelopHowToBuildItHtml.incrementaldom');

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
  var param159 = function() {
    ie_open('h6');
      itext('How to build a version of AlloyEditor.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article1');
      ie_open('h2');
        itext('Install NodeJS');
      ie_close('h2');
      ie_open('p');
        itext('Using your browser, navigate to http://nodejs.org and install NodeJS.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article2');
      ie_open('h2');
        itext('Install Gulp');
      ie_close('h2');
      ie_open('p');
        ie_open('span', null, null,
            'class', 'code-header');
          itext('Open a terminal on your computer and execute');
        ie_close('span');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-bash');
          itext('[sudo] npm install -g gulp');
        ie_close('code');
      ie_close('pre');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article3');
      ie_open('h2');
        itext('Fork AlloyEditor');
      ie_close('h2');
      ie_open('p');
        itext('Use the ');
        ie_open('strong');
          itext('Fork');
        ie_close('strong');
        itext(' button in our ');
        ie_open('a', null, null,
            'href', 'https://github.com/liferay/alloy-editor');
          itext('Github Repository page');
        ie_close('a');
        itext(' to get a copy of alloyEditor. After that, follow the instructions to clone the project into your computer.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article4');
      ie_open('h2');
        itext('Install AlloyEditor dependencies');
      ie_close('h2');
      ie_open('p');
        ie_open('span', null, null,
            'class', 'code-header');
          itext('Navigate to the AlloyEditor project in your computer and execute');
        ie_close('span');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-bash');
          itext('[sudo] npm install');
        ie_close('code');
      ie_close('pre');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article5');
      ie_open('h2');
        itext('Build AlloyEditor');
      ie_close('h2');
      ie_open('p');
        ie_open('span', null, null,
            'class', 'code-header');
          itext('Navigate to the AlloyEditor project in your computer and execute');
        ie_close('span');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-bash');
          itext('gulp build');
        ie_close('code');
      ie_close('pre');
      ie_open('p', null, null,
          'class', 'guide-note');
        itext('There are other gulp tasks you can use like ');
        ie_open('strong');
          itext('release');
        ie_close('strong');
        itext(' to generate a bundled zip file, or ');
        ie_open('strong');
          itext('watch');
        ie_close('strong');
        itext(' if you\'re in development mode');
      ie_close('p');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param159}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDevelopHowToBuildItHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsDevelopHowToBuildItHtml extends Component {}
Soy.register(docsDevelopHowToBuildItHtml, templates);
export { docsDevelopHowToBuildItHtml, templates };
export default templates;
/* jshint ignore:end */
