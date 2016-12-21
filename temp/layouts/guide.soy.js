/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from guide.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace guide.
 * @public
 */

goog.module('guide.incrementaldom');

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

var $templateAlias3 = Soy.getTemplate('SSGReadingProgress.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('SSGSidebar.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('main.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param57 = function() {
    $templateAlias2({section: opt_data.site.index.children[0]}, null, opt_ijData);
    $guide(opt_data, null, opt_ijData);
  };
  $templateAlias1(soy.$$assignDefaults({elementClasses: 'docs', content: param57}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'guide.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $guide(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'sidebar-offset');
    ie_open('header', null, null,
        'class', 'guide-header');
      ie_open('div', null, null,
          'class', 'container-hybrid');
        ie_open('h1', null, null,
            'class', 'guide-header-title');
          var dyn2 = opt_data.page.title;
          if (typeof dyn2 == 'function') dyn2(); else if (dyn2 != null) itext(dyn2);
          itext(' Guide');
        ie_close('h1');
      ie_close('div');
    ie_close('header');
    ie_open('div', null, null,
        'class', 'container-hybrid');
      ie_open('div', null, null,
          'class', 'docs-guide row');
        ie_open('div', null, null,
            'class', 'docs-content col-xs-16 col-md-9');
          var dyn3 = opt_data.content;
          if (typeof dyn3 == 'function') dyn3(); else if (dyn3 != null) itext(dyn3);
          $feedback(opt_data, null, opt_ijData);
        ie_close('div');
        ie_open('nav', null, null,
            'class', 'col-xs-16 col-md-offset-2 col-md-5');
          ie_open('div', null, null,
              'class', 'docs-nav-container');
            $templateAlias3({elementClasses: 'docs-nav'}, null, opt_ijData);
          ie_close('div');
        ie_close('nav');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.guide = $guide;
if (goog.DEBUG) {
  $guide.soyTemplateName = 'guide.guide';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $feedback(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  ie_open('div');
    ie_open('div', null, null,
        'class', 'guide-feedback');
      ie_open('p');
        itext('Was this section helpful?');
      ie_close('p');
      ie_open('button', null, null,
          'class', 'btn btn-accent guide-feedback-btn guide-feedback-btn-yes');
        itext('Yes');
      ie_close('button');
      ie_open('button', null, null,
          'class', 'btn btn-accent guide-feedback-btn guide-feedback-btn-no');
        itext('No');
      ie_close('button');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'guide-github');
      ie_open('div', null, null,
          'class', 'guide-github-img');
        ie_void('span', null, null,
            'class', 'icon-16-github');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'guide-github-text');
        ie_open('p');
          itext('Contribute to this Doc on Github! ');
          ie_open('a', null, null,
              'href', (($$temp = opt_data.site.repo) == null ? '' : $$temp) + '/tree/master/' + opt_data.page.srcFilePath,
              'class', 'docs-github-link',
              'target', '_blank');
            itext('Edit this section');
          ie_close('a');
          itext('.');
        ie_close('p');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.feedback = $feedback;
if (goog.DEBUG) {
  $feedback.soyTemplateName = 'guide.feedback';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
exports.guide.params = ["page","content"];
exports.guide.types = {"page":"any","content":"any"};
exports.feedback.params = ["page","site"];
exports.feedback.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class guide extends Component {}
Soy.register(guide, templates);
export { guide, templates };
export default templates;
/* jshint ignore:end */
