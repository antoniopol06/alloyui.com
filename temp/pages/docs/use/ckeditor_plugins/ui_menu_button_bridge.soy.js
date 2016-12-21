/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from ui_menu_button_bridge.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsUseCkeditorPluginsUiMenuButtonBridgeHtml.
 * @public
 */

goog.module('docsUseCkeditorPluginsUiMenuButtonBridgeHtml.incrementaldom');

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
  var param214 = function() {
    ie_open('h6');
      itext('There are some CKEDITOR plugins that it add menu button through their UI. This tutorial is about using this kind of plugins.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article1');
      ie_open('h2');
        itext('Example to use \'Spell Checker AS YOU TYPE\' plugin');
      ie_close('h2');
      ie_open('p');
        ie_open('span', null, null,
            'class', 'code-header');
          itext('You can download ');
          ie_open('a', null, null,
              'alt', 'download spell checker as you type plugin',
              'href', 'http://ckeditor.com/addon/scayt');
            itext('Scayt');
          ie_close('a');
          itext(' and, after that, you can paste it into ');
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
        itext('The plugin\u00B4s code contains ');
        ie_open('a', null, null,
            'alt', 'code of plugin',
            'href', 'https://github.com/WebSpellChecker/ckeditor-plugin-scayt/blob/master/plugin.js#L39');
          itext('this part of code');
        ie_close('a');
        itext('.');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('  editor.ui.add(\'Scayt\', CKEDITOR.UI_MENUBUTTON, {label : lang.text_title, title : ( editor.plugins.wsc ? editor.lang.wsc.title : lang.text_title ), ...');
        ie_close('code');
      ie_close('pre');
      ie_open('p');
        itext('This plugin uses ');
        ie_open('strong');
          itext('editor.ui.add(name, CKEDITOR.UI_MENUBUTTON definition)');
        ie_close('strong');
        itext('.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article3');
      ie_open('h2');
        itext('ae_menubuttonbridge AlloyEditor plugin');
      ie_close('h2');
      ie_open('p');
        itext('AlloyEditor provides a plugin that works as an adapter for CKEditor UI features generating compatible menu buttons.');
        ie_open('strong');
          itext('ae_menubuttonbridge uses ae_uibridge and ae_menubridge AlloyEditor plugins');
        ie_close('strong');
        itext(' to work.');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('  AlloyEditor.editable(\'myContentEditable\', {extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value + \',ae_uibridge,ae_menubridge,ae_menubuttonbridge,scayt\'});');
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
        itext('Adding \'Scayt\' button to AlloyEditor toolbar');
      ie_close('h2');
      ie_open('p');
        itext('Into the plugin appears this ');
        ie_open('a', null, null,
            'alt', 'Name of buttons',
            'href', 'https://github.com/WebSpellChecker/ckeditor-plugin-scayt/blob/master/plugin.js#L39');
          itext('code');
        ie_close('a');
        itext(', we can set toolbar buttons with \'Scayt\' button: ');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('   var selections = AlloyEditor.Selections; selections[3].buttons.push(\'Scayt\'); AlloyEditor.editable(\'myContentEditable\', {extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value + \',ae_uibridge,ae_menubridge,ae_menubuttonbridge,scayt\', toolbars: {styles: {selections: selections, tabIndex: 1}}});');
        ie_close('code');
      ie_close('pre');
      ie_open('div', null, null,
          'class', 'thumbnail');
        ie_open('img', null, null,
            'class', 'img img-polaroid',
            'src', '<%= @getAssetsUrl() %>/img/guides/ckeditor_ui_menu_button1.png');
        ie_close('img');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'thumbnail');
        ie_open('img', null, null,
            'class', 'img img-polaroid',
            'src', '<%= @getAssetsUrl() %>/img/guides/ckeditor_ui_menu_button2.png');
        ie_close('img');
      ie_close('div');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param214}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsUseCkeditorPluginsUiMenuButtonBridgeHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsUseCkeditorPluginsUiMenuButtonBridgeHtml extends Component {}
Soy.register(docsUseCkeditorPluginsUiMenuButtonBridgeHtml, templates);
export { docsUseCkeditorPluginsUiMenuButtonBridgeHtml, templates };
export default templates;
/* jshint ignore:end */
