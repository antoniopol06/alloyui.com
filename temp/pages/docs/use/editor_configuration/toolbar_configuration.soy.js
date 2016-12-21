/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from toolbar_configuration.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsUseEditorConfigurationToolbarConfigurationHtml.
 * @public
 */

goog.module('docsUseEditorConfigurationToolbarConfigurationHtml.incrementaldom');

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
  var param239 = function() {
    ie_open('h4');
      itext('AlloyEditor allows you to configure the Toolbars in the way you prefer. You will be able to remove some of the existing Toolbars, to add your own or to reorder the buttons in each Toolbar.');
    ie_close('h4');
    ie_open('article', null, null,
        'id', 'article1');
      ie_open('h2');
        itext('Default configuration');
      ie_close('h2');
      ie_open('p');
        ie_open('span');
          itext('This is the default editor toolbars configuration');
        ie_close('span');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('var toolbars = {add: {buttons: [\'image\', \'camera\', \'hline\', \'table\'], tabIndex: 2}, styles: {selections: AlloyEditor.Selections, tabIndex: 1}};');
        ie_close('code');
      ie_close('pre');
      ie_open('p');
        ie_open('span');
          itext('where ');
          ie_open('code');
            itext('AlloyEditor.Selections');
          ie_close('code');
          itext(' is');
        ie_close('span');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('var Selections = [{name: \'link\', buttons: [\'linkEdit\'], test: AlloyEditor.SelectionTest.link}, {name: \'image\', buttons: [\'imageLeft\', \'imageRight\'], test: AlloyEditor.SelectionTest.image}, {name: \'text\', buttons: [\'styles\', \'bold\', \'italic\', \'underline\', \'link\', \'twitter\'], test: AlloyEditor.SelectionTest.text}, {name: \'table\', buttons: [\'tableRow\', \'tableColumn\', \'tableCell\', \'tableRemove\'], getArrowBoxClasses: AlloyEditor.SelectionGetArrowBoxClasses.table, setPosition: AlloyEditor.SelectionSetPosition.table, test: AlloyEditor.SelectionTest.table}];');
        ie_close('code');
      ie_close('pre');
      ie_open('p');
        itext('The configuration above represents two toolbars - for adding content (images, code, etc.) and modify content based on the current selection type. You may remove any of those and the toolbar won\'t be shown when user makes the corresponding selection.');
      ie_close('p');
      ie_open('p');
        ie_open('span');
          itext('To remove the toolbar for adding content, just ');
          ie_open('strong');
            itext('remove');
          ie_close('strong');
          itext(' the property ');
          ie_open('em');
            itext('add');
          ie_close('em');
        ie_close('span');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('var toolbars = {styles: {selections: AlloyEditor.Selections, tabIndex: 1}};');
        ie_close('code');
      ie_close('pre');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param239}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsUseEditorConfigurationToolbarConfigurationHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsUseEditorConfigurationToolbarConfigurationHtml extends Component {}
Soy.register(docsUseEditorConfigurationToolbarConfigurationHtml, templates);
export { docsUseEditorConfigurationToolbarConfigurationHtml, templates };
export default templates;
/* jshint ignore:end */
