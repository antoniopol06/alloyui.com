/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from ui_button.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsUseCkeditorPluginsUiButtonHtml.
 * @public
 */

goog.module('docsUseCkeditorPluginsUiButtonHtml.incrementaldom');

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
  var param209 = function() {
    ie_open('h6');
      itext('There are some CKEDITOR plugins that it add button panel through their UI. This tutorial is about using this kind of plugins.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article1');
      ie_open('h2');
        itext('Example to use \'UNDO\' button');
      ie_close('h2');
      ie_open('p');
        ie_open('span', null, null,
            'class', 'code-header');
          itext('In this case, Undo CKEDITOR plugin exists into AlloyEditor core, but, if the plugin does not exist into AlloyEditor core, you can download it and, after that, you can paste it into ');
          ie_open('strong');
            itext('plugins folder');
          ie_close('strong');
        ie_close('span');
      ie_close('p');
      ie_open('blockquote');
        ie_open('p');
          itext('Note: Keep in mind, if this plugin has dependencies, we need to dowload and to configure them too.');
        ie_close('p');
      ie_close('blockquote');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article2');
      ie_open('h2');
        itext('What CKEDITOR UI is used by plugin?');
      ie_close('h2');
      ie_open('p');
        itext('This button is given by \'undo\' CKEDITOR plugin. ');
        ie_open('a', null, null,
            'alt', 'code source of undo plugin',
            'href', 'https://github.com/ckeditor/ckeditor-dev/blob/master/plugins/undo/plugin.js#L105-L109');
          itext('It\u00B4s code source');
        ie_close('a');
        itext(' contains this part of code: ');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('  editor.ui.addButton( \'Undo\', {label: editor.lang.undo.undo, command: \'undo\', toolbar: \'undo,10\'} );');
        ie_close('code');
      ie_close('pre');
      ie_open('p');
        itext('This plugin uses ');
        ie_open('strong');
          itext('editor.ui.addButton');
        ie_close('strong');
        itext('. Also, CKEDITOR plugins can use the following code to add buttons:');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('  editor.ui.add(name, CKEDITOR.UI_BUTTON, definition)');
        ie_close('code');
      ie_close('pre');
      ie_open('p');
        itext('Both of the ways are correct and it means that we need an AlloyEditor adapter to use this kind of CKEDITOR plugins.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article3');
      ie_open('h2');
        itext('ae_buttonbridge AlloyEditor plugin');
      ie_close('h2');
      ie_open('p');
        itext('AlloyEditor provides a plugin that works as an adapter for CKEditor UI features generating compatible buttons');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('  AlloyEditor.editable(\'myContentEditable\', {extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value + \',ae_buttonbridge,undo\'});');
        ie_close('code');
      ie_close('pre');
      ie_open('p');
        ie_open('strong');
          itext('AlloyEditor.Core.ATTRS.extraPlugins.value');
        ie_close('strong');
        itext(' is used to keep current extraPlugins that AlloyEditor use, but you can avoid that to set your plugins there. After this step, this plugin will work, but AlloyEditor will not show the button yet.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article4');
      ie_open('h2');
        itext('Adding \'Undo\' button to AlloyEditor toolbar');
      ie_close('h2');
      ie_open('p');
        itext('Following ');
        ie_open('a', null, null,
            'alt', 'toolbar configuration',
            'href', 'guides/ckeditor_plugins/ui_button');
          itext('toolbar configuration');
        ie_close('a');
        itext(', we can set toolbar buttons with \'Undo\' button: ');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('  var selections = AlloyEditor.Selections; selections[3].buttons.push(\'Undo\'); AlloyEditor.editable(\'myContentEditable\', {extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value + \',ae_buttonbridge,undo\', toolbars: {styles: {selections: selections, tabIndex: 1}}});');
        ie_close('code');
      ie_close('pre');
      ie_open('div', null, null,
          'class', 'thumbnail');
        ie_open('img', null, null,
            'class', 'img img-polaroid',
            'src', '<%= @getAssetsUrl() %>/img/guides/ckeditor_ui_button.png');
        ie_close('img');
      ie_close('div');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param209}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsUseCkeditorPluginsUiButtonHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsUseCkeditorPluginsUiButtonHtml extends Component {}
Soy.register(docsUseCkeditorPluginsUiButtonHtml, templates);
export { docsUseCkeditorPluginsUiButtonHtml, templates };
export default templates;
/* jshint ignore:end */
