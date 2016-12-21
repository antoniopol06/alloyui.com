/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from index.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace pageDocsIndex.
 * @public
 */

goog.module('pageDocsIndex.incrementaldom');

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
  var param109 = function() {
    $templateAlias2({section: opt_data.site.index.children[0]}, null, opt_ijData);
    $topics(opt_data, null, opt_ijData);
  };
  $templateAlias1(soy.$$assignDefaults({elementClasses: 'docs', content: param109}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'pageDocsIndex.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $topics(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'sidebar-offset');
    ie_open('div', null, null,
        'class', 'container-hybrid docs-home-top');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('div', null, null,
            'class', 'col-xs-16');
          ie_open('h1', null, null,
              'class', 'docs-home-top-title');
            ie_open('span');
              itext('Awesome');
            ie_close('span');
            itext(' Docs Center');
          ie_close('h1');
          ie_open('p', null, null,
              'class', 'docs-home-top-description');
            itext('Start learning how to leverage the power of Awesome in your project.');
          ie_close('p');
        ie_close('div');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('form', null, null,
            'class', 'docs-home-top-form',
            'action', '/docs/search.html',
            'method', 'GET',
            'enctype', 'multipart/form-data');
          ie_open('div', null, null,
              'class', 'col-md-7 col-md-offset-3 col-xs-16');
            ie_open('div', null, null,
                'class', 'form-group');
              ie_open('div', null, null,
                  'class', 'input-inner-addon input-inner-addon-right');
                ie_open('input', null, null,
                    'name', 'q',
                    'class', 'form-control',
                    'type', 'text',
                    'placeholder', 'Enter a search term here',
                    'autocomplete', 'off',
                    'required', '');
                ie_close('input');
                ie_void('span', null, null,
                    'class', 'input-inner-icon-helper icon-16-magnifier');
              ie_close('div');
            ie_close('div');
          ie_close('div');
          ie_open('div', null, null,
              'class', 'col-md-3 col-xs-16');
            ie_open('button', null, null,
                'class', 'btn btn-accent btn-block',
                'type', 'submit');
              itext('Search');
            ie_close('button');
          ie_close('div');
        ie_close('form');
      ie_close('div');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'docs-home-topics');
      ie_open('div', null, null,
          'class', 'container-hybrid');
        ie_open('div', null, null,
            'class', 'row');
          ie_open('div', null, null,
              'class', 'col-xs-16');
            ie_open('section', null, null,
                'class', 'docs-home-middle');
              ie_open('h2', null, null,
                  'class', 'docs-home-middle-subtitle');
                itext('Choose a Guide');
              ie_close('h2');
              ie_open('p', null, null,
                  'class', 'docs-home-middle-description');
                itext('Each one provide step by step coverage for every core feature.');
              ie_close('p');
            ie_close('section');
          ie_close('div');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'row');
          ie_open('div', null, null,
              'class', 'col-md-13 col-md-offset-3 col-xs-16');
            ie_open('div', null, null,
                'class', 'row');
              var topicList125 = opt_data.site.index.children[0].children;
              var topicListLen125 = topicList125.length;
              for (var topicIndex125 = 0; topicIndex125 < topicListLen125; topicIndex125++) {
                var topicData125 = topicList125[topicIndex125];
                if (! topicData125.hidden) {
                  ie_open('div', null, null,
                      'class', 'col-md-6 col-xs-16');
                    ie_open('a', null, null,
                        'class', 'topic radial-out',
                        'href', topicData125.url);
                      ie_open('div', null, null,
                          'class', 'topic-icon');
                        ie_void('span', null, null,
                            'class', 'icon-16-' + topicData125.icon);
                      ie_close('div');
                      ie_open('h3', null, null,
                          'class', 'topic-title');
                        var dyn5 = topicData125.title;
                        if (typeof dyn5 == 'function') dyn5(); else if (dyn5 != null) itext(dyn5);
                      ie_close('h3');
                    ie_close('a');
                  ie_close('div');
                }
              }
            ie_close('div');
          ie_close('div');
        ie_close('div');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.topics = $topics;
if (goog.DEBUG) {
  $topics.soyTemplateName = 'pageDocsIndex.topics';
}

exports.render.params = ["site"];
exports.render.types = {"site":"any"};
exports.topics.params = ["site"];
exports.topics.types = {"site":"any"};
templates = exports;
return exports;

});

class pageDocsIndex extends Component {}
Soy.register(pageDocsIndex, templates);
export { pageDocsIndex, templates };
export default templates;
/* jshint ignore:end */
