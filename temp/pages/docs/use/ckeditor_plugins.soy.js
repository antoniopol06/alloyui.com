/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from ckeditor_plugins.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsUseCkeditorPluginsHtml.
 * @public
 */

goog.module('docsUseCkeditorPluginsHtml.incrementaldom');

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
  var param164 = function() {
    ie_open('h6');
      itext('The section below assumes that you are using the default UI, which is built using React. The AlloyEditor core is fully separated from the UI and creating another one based on any other framework is very easy.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article1');
      ie_open('h2');
        itext('Download your plugin');
      ie_close('h2');
      ie_open('p');
        itext('CKEditor offers a ');
        ie_open('a', null, null,
            'href', 'http://ckeditor.com/addons/plugins/all');
          itext('huge selection of plugins');
        ie_close('a');
        itext('. Find and download those you need along with all its dependencies into AlloyEditor\'s ');
        ie_open('strong');
          itext('plugins');
        ie_close('strong');
        itext(' folder.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article2');
      ie_open('h2');
        itext('Add the CKEditor plugin');
      ie_close('h2');
      ie_open('p');
        ie_open('span');
          itext('All that\'s left for you to do is to add the plugin to your editor configuration*');
        ie_close('span');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('// Extend the extraPlugins value adding the new plugins to the default ones AlloyEditor.editable(\'contentEditable\', {extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value + \',myplugin,myplugindependency\'});');
        ie_close('code');
      ie_close('pre');
      ie_open('p');
        ie_open('small');
          itext('* Keep in mind that some plugins have dependencies that are not bundled inside AlloyEditor. You\'ll need to download and add them to the ');
          ie_open('code');
            itext('extraPlugins');
          ie_close('code');
          itext(' property as well');
        ie_close('small');
      ie_close('p');
      ie_open('blockquote');
        ie_open('p');
          itext('Note: Keep reading if the plugin you want contains UI...');
        ie_close('p');
      ie_close('blockquote');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article3');
      ie_open('h2');
        itext('Add one of AlloyEditor\'s ui-bridge plugins');
      ie_close('h2');
      ie_open('p');
        itext('AlloyEditor provides a set of plugins that work as an adapter for CKEditor UI features generating compatible buttons, richcombos, panels and more that can be reused. All you need to do is use the appropriate ui-bridge plugin and add the buttons to an existing or new selection.');
      ie_close('p');
      ie_open('p');
        ie_open('span', null, null,
            'class', 'code-header');
          itext('For example, you can reuse the ');
          ie_open('a', null, null,
              'href', 'http://ckeditor.com/addon/font');
            itext('Font Size and Family Plugin');
          ie_close('a');
          itext(' like this:.');
        ie_close('span');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('var textSelection; for (var i = 0; i < AlloyEditor.Selections.length; i++) {textSelection = AlloyEditor.Selections[i]; if (textSelection.name === \'text\') {break;}}textSelection.buttons = [\'Font\', \'FontSize\'].concat(textSelection.buttons); AlloyEditor.editable(\'contentEditable\', {extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value + \',ae_richcombobridge,font\'});');
        ie_close('code');
      ie_close('pre');
      ie_open('div', null, null,
          'class', 'thumbnail');
        ie_open('img', null, null,
            'class', 'img img-polaroid',
            'src', '<%= @getAssetsUrl() %>/img/guides/ckeditor_plugins.gif');
        ie_close('img');
      ie_close('div');
      ie_open('p');
        itext('Current existing UI-Bridge plugins are:');
        ie_open('ul');
          ie_open('li');
            ie_open('a', null, null,
                'href', 'http://alloyeditor.com/api/classes/CKEDITOR.plugins.ae_buttonbridge.html');
              itext('Button');
            ie_close('a');
          ie_close('li');
          ie_open('li');
            ie_open('a', null, null,
                'href', 'http://alloyeditor.com/api/classes/CKEDITOR.plugins.ae_panelmenubuttonbridge.html');
              itext('Panel Menu Button');
            ie_close('a');
          ie_close('li');
          ie_open('li');
            ie_open('a', null, null,
                'href', 'http://alloyeditor.com/api/classes/CKEDITOR.plugins.ae_richcombobridge.html');
              itext('RichCombo');
            ie_close('a');
          ie_close('li');
        ie_close('ul');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article4');
      ie_open('h2');
        itext('Use moono skin for visual compatibility');
      ie_close('h2');
      ie_open('blockquote');
        ie_open('p');
          itext('Note: AlloyEditor\'s UI Bridge is in its early stages, so there are still some uncovered areas. For example, `dialogs are not converted and will still appear with CKEditor\'s default look and feel.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('p');
        ie_open('span', null, null,
            'class', 'code-header');
          itext('Use the new ');
          ie_open('code');
            itext('moono');
          ie_close('code');
          itext(' skin to close the gap between AlloyEditor default look and feel and CKEditor\'s.');
        ie_close('span');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-html');
          itext('    <link href="alloy-editor/assets/alloy-editor-moono-min.css" rel="stylesheet"></link>');
        ie_close('code');
      ie_close('pre');
      ie_open('div', null, null,
          'class', 'thumbnail');
        ie_open('img', null, null,
            'class', 'img img-polaroid',
            'src', '<%= @getAssetsUrl() %>/img/guides/ckeditor_moono.gif');
        ie_close('img');
      ie_close('div');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param164}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsUseCkeditorPluginsHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsUseCkeditorPluginsHtml extends Component {}
Soy.register(docsUseCkeditorPluginsHtml, templates);
export { docsUseCkeditorPluginsHtml, templates };
export default templates;
/* jshint ignore:end */
