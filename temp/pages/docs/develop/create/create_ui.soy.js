/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from create_ui.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDevelopCreateCreateUiHtml.
 * @public
 */

goog.module('docsDevelopCreateCreateUiHtml.incrementaldom');

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
  var param204 = function() {
    ie_open('h6');
      itext('You don\'t like React? You prefer jQuery? Or you are JavaScript ninja and prefer writing vanilla JS? Welcome on board. You\'ll see how straightforward it is to create a whole new UI for AlloyEditor.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article1');
      ie_open('h2');
        itext('Get ready to build AlloyEditor');
      ie_close('h2');
      ie_open('p');
        itext('Follow the instructions in our ');
        ie_open('a', null, null,
            'href', 'guids/how_to_build_it');
          itext('How to build it');
        ie_close('a');
        itext(' Guide to know how to change and build AlloyEditor.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article2');
      ie_open('h2');
        itext('Create UI folder');
      ie_close('h2');
      ie_open('p');
        itext('Create a new directory under ');
        ie_open('code');
          itext('src/ui');
        ie_close('code');
        itext(' with the name of your UI ');
        ie_open('small');
          itext('(e.g jquery)');
        ie_close('small');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article3');
      ie_open('h2');
        itext('Create Build');
      ie_close('h2');
      ie_open('p');
        itext('Create a subfolder, called ');
        ie_open('code');
          itext('gulp-tasks');
        ie_close('code');
        itext(' and a ');
        ie_open('code');
          itext('build.js');
        ie_close('code');
        itext(' file with your custom build steps. You can check out the [Gulp Project](http://gulpjs.com/) or some of the existing tasks for extra insight into the build system.');
      ie_close('article');
      ie_open('article', null, null,
          'id', 'article4');
        ie_open('h2');
          itext('Build your UI');
        ie_close('h2');
        ie_open('p');
          ie_open('span', null, null,
              'class', 'code-header');
            itext('In order to build AlloyEditor using your brand new UI (jquery), run');
          ie_close('span');
        ie_close('p');
        ie_open('pre');
          ie_open('code', null, null,
              'class', 'language-bash');
            itext('gulp --ui jquery');
          ie_close('code');
        ie_close('pre');
        ie_open('p');
          itext('That is everything. How will you structure the directories, which modules will you use, will you load Buttons and Toolbars on demand, what gulp tasks will you add - these questions are entirely up to you. The good news is that you won\'t start from scratch entirely. You still will be able to use the core of AlloyEditor, as well as the API from CKEditor.');
        ie_close('p');
        ie_open('p', null, null,
            'class', 'guide-note');
          itext('Once you are ready with the UI, please send us a pull request and we will merge it!');
        ie_close('p');
      ie_close('article');
    };
    $templateAlias1(soy.$$assignDefaults({content: param204}, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'docsDevelopCreateCreateUiHtml.render';
  }

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsDevelopCreateCreateUiHtml extends Component {}
Soy.register(docsDevelopCreateCreateUiHtml, templates);
export { docsDevelopCreateCreateUiHtml, templates };
export default templates;
/* jshint ignore:end */
