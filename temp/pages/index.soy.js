/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from index.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace pageIndex.
 * @public
 */

goog.module('pageIndex.incrementaldom');

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

var $templateAlias2 = Soy.getTemplate('Demo.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('main.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param12 = function() {
    $header(opt_data, null, opt_ijData);
    $why(null, null, opt_ijData);
    $features(null, null, opt_ijData);
    $how(null, null, opt_ijData);
    $highlights(null, null, opt_ijData);
    $footer(null, null, opt_ijData);
  };
  $templateAlias1(soy.$$assignDefaults({content: param12}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'pageIndex.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $header(opt_data, opt_ignored, opt_ijData) {
  ie_open('header', null, null,
      'class', 'header');
    ie_open('div', null, null,
        'class', 'container');
      ie_open('h1', null, null,
          'class', 'header-title');
        itext('Awesome Project');
      ie_close('h1');
      ie_open('h2', null, null,
          'class', 'header-subtitle');
        var dyn1 = opt_data.site.index.description;
        if (typeof dyn1 == 'function') dyn1(); else if (dyn1 != null) itext(dyn1);
      ie_close('h2');
      ie_open('div', null, null,
          'class', 'header-cta');
        ie_open('a', null, null,
            'href', '#',
            'class', 'btn btn-accent');
          itext('Main call to action');
        ie_close('a');
        ie_open('a', null, null,
            'href', '#',
            'class', 'btn btn-default');
          itext('Secondary action');
        ie_close('a');
      ie_close('div');
    ie_close('div');
  ie_close('header');
}
exports.header = $header;
if (goog.DEBUG) {
  $header.soyTemplateName = 'pageIndex.header';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $why(opt_data, opt_ignored, opt_ijData) {
  ie_open('article', null, null,
      'class', 'about');
    ie_open('div', null, null,
        'class', 'container');
      var param27 = function() {
        ie_open('div', null, null,
            'class', 'row');
          ie_open('div', null, null,
              'class', 'col-md-12 col-md-offset-2');
            ie_open('h3', null, null,
                'class', 'about-title');
              itext('Start with why');
            ie_close('h3');
            ie_open('p', null, null,
                'class', 'about-description');
              itext('Throug the WHY, a story will arise, which will create trust and make an idea, a service, or a project uniqu. As Simon Sinek has said, having loyal users is all about attracting the people who share your fundamental beliefs. Remember: People don\'t buy what you do. They buy why you do it. I\'ll say it again: People don\'t buy what you do. They buy why you do it.');
            ie_close('p');
          ie_close('div');
        ie_close('div');
      };
      $templateAlias2({divId: 'why', contentHtml: param27}, null, opt_ijData);
    ie_close('div');
  ie_close('article');
}
exports.why = $why;
if (goog.DEBUG) {
  $why.soyTemplateName = 'pageIndex.why';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $highlights(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'highlights');
    ie_open('div', null, null,
        'class', 'container');
      var param34 = function() {
        ie_open('section', null, null,
            'class', 'highlight row');
          ie_open('div', null, null,
              'class', 'col-md-6 col-md-offset-2');
            ie_open('h4', null, null,
                'class', 'highlight-title');
              itext('First highlight. It\'ll blow your mind.');
            ie_close('h4');
            ie_open('p', null, null,
                'class', 'highlight-description');
              itext('Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros praesent commodo ultricies vehicula ut.');
            ie_close('p');
          ie_close('div');
          ie_open('div', null, null,
              'class', 'col-md-5 col-md-offset-1');
            ie_open('img', null, null,
                'class', 'highlight-image',
                'src', 'http://placehold.it/500x400/e7e8e8/64696d',
                'alt', 'Placeholder');
            ie_close('img');
          ie_close('div');
        ie_close('section');
        ie_open('section', null, null,
            'class', 'highlight row');
          ie_open('div', null, null,
              'class', 'col-md-6 col-md-push-8');
            ie_open('h4', null, null,
                'class', 'highlight-title');
              itext('It\'s that good. See for yourself.');
            ie_close('h4');
            ie_open('p', null, null,
                'class', 'highlight-description');
              itext('Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros praesent commodo ultricies vehicula ut.');
            ie_close('p');
          ie_close('div');
          ie_open('div', null, null,
              'class', 'col-md-5 col-md-offset-2 col-md-pull-6');
            ie_open('img', null, null,
                'class', 'highlight-image',
                'src', 'http://placehold.it/500x400/e7e8e8/64696d',
                'alt', 'Placeholder');
            ie_close('img');
          ie_close('div');
        ie_close('section');
        ie_open('section', null, null,
            'class', 'highlight row');
          ie_open('div', null, null,
              'class', 'col-md-6 col-md-offset-2');
            ie_open('h4', null, null,
                'class', 'highlight-title');
              itext('And lastly, this one. Checkmate.');
            ie_close('h4');
            ie_open('p', null, null,
                'class', 'highlight-description');
              itext('Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros praesent commodo ultricies vehicula ut.');
            ie_close('p');
          ie_close('div');
          ie_open('div', null, null,
              'class', 'col-md-5 col-md-offset-1');
            ie_open('img', null, null,
                'class', 'highlight-image',
                'src', 'http://placehold.it/500x400/e7e8e8/64696d',
                'alt', 'Placeholder');
            ie_close('img');
          ie_close('div');
        ie_close('section');
      };
      $templateAlias2({divId: 'highlights', contentHtml: param34}, null, opt_ijData);
    ie_close('div');
  ie_close('div');
}
exports.highlights = $highlights;
if (goog.DEBUG) {
  $highlights.soyTemplateName = 'pageIndex.highlights';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $how(opt_data, opt_ignored, opt_ijData) {
  ie_open('article', null, null,
      'class', 'about');
    ie_open('div', null, null,
        'class', 'container');
      var param41 = function() {
        ie_open('div', null, null,
            'class', 'row');
          ie_open('div', null, null,
              'class', 'col-md-12 col-md-offset-2');
            ie_open('h3', null, null,
                'class', 'about-title');
              itext('It\'s easier than you think');
            ie_close('h3');
            ie_open('p', null, null,
                'class', 'about-description');
              itext('Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros praesent commodo ultricies vehicula ut.');
            ie_close('p');
          ie_close('div');
        ie_close('div');
      };
      $templateAlias2({divId: 'how', contentHtml: param41}, null, opt_ijData);
    ie_close('div');
  ie_close('article');
}
exports.how = $how;
if (goog.DEBUG) {
  $how.soyTemplateName = 'pageIndex.how';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $features(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'features');
    ie_open('div', null, null,
        'class', 'container');
      var param48 = function() {
        ie_open('div', null, null,
            'class', 'row');
          ie_open('table');
            ie_open('thead');
              ie_open('tr');
                ie_open('th');
                  ie_open('div', null, null,
                      'class', 'feature-icon');
                    ie_void('span', null, null,
                        'class', 'icon-16-bullhorn');
                  ie_close('div');
                  ie_open('h3', null, null,
                      'class', 'feature-title icon-16-bullhorn');
                    itext('Heading');
                  ie_close('h3');
                ie_close('th');
                ie_open('th');
                  ie_open('div', null, null,
                      'class', 'feature-icon');
                    ie_void('span', null, null,
                        'class', 'icon-16-lock');
                  ie_close('div');
                  ie_open('h3', null, null,
                      'class', 'feature-title');
                    itext('Heading');
                  ie_close('h3');
                ie_close('th');
                ie_open('th');
                  ie_open('div', null, null,
                      'class', 'feature-icon');
                    ie_void('span', null, null,
                        'class', 'icon-16-calendar');
                  ie_close('div');
                  ie_open('h3', null, null,
                      'class', 'feature-title');
                    itext('Heading');
                  ie_close('h3');
                ie_close('th');
              ie_close('tr');
            ie_close('thead');
            ie_open('tbody');
              ie_open('tr');
                ie_open('td');
                  itext('Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros praesent commodo.');
                ie_close('td');
                ie_open('td');
                  itext('Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros praesent commodo.');
                ie_close('td');
                ie_open('td');
                  itext('Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros praesent commodo.');
                ie_close('td');
              ie_close('tr');
            ie_close('tbody');
          ie_close('table');
        ie_close('div');
      };
      $templateAlias2({divId: 'features', contentHtml: param48}, null, opt_ijData);
    ie_close('div');
  ie_close('div');
}
exports.features = $features;
if (goog.DEBUG) {
  $features.soyTemplateName = 'pageIndex.features';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $footer(opt_data, opt_ignored, opt_ijData) {
  ie_open('footer', null, null,
      'class', 'footer');
    ie_open('div', null, null,
        'class', 'container');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('p', null, null,
            'class', 'footer-description col-md-6 col-md-offset-2');
          itext('Copyright \u00A9 2016 ');
          ie_open('a', null, null,
              'href', 'https://liferay.com');
            itext('Liferay, Inc');
          ie_close('a');
        ie_close('p');
        ie_open('p', null, null,
            'class', 'footer-description col-md-6');
          itext('Powered by ');
          ie_open('a', null, null,
              'href', 'http://wedeploy.com');
            itext('WeDeploy\u2122');
          ie_close('a');
        ie_close('p');
      ie_close('div');
    ie_close('div');
  ie_close('footer');
}
exports.footer = $footer;
if (goog.DEBUG) {
  $footer.soyTemplateName = 'pageIndex.footer';
}

exports.render.params = ["site"];
exports.render.types = {"site":"any"};
exports.header.params = ["site"];
exports.header.types = {"site":"any"};
exports.why.params = [];
exports.why.types = {};
exports.highlights.params = [];
exports.highlights.types = {};
exports.how.params = [];
exports.how.types = {};
exports.features.params = [];
exports.features.types = {};
exports.footer.params = [];
exports.footer.types = {};
templates = exports;
return exports;

});

class pageIndex extends Component {}
Soy.register(pageIndex, templates);
export { pageIndex, templates };
export default templates;
/* jshint ignore:end */
