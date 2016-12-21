/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from create_toolbars.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDevelopCreateCreateToolbarsHtml.
 * @public
 */

goog.module('docsDevelopCreateCreateToolbarsHtml.incrementaldom');

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
  var param199 = function() {
    ie_open('h6');
      itext('Adding a new toolbar is also as straightforward as adding a button.');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article1');
      ie_open('h2');
        itext('Creating a Toolbar');
      ie_close('h2');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('// Use the built-in version of React if your site does not use React var React = AlloyEditor.React; var ToolbarVersions = React.createClass({mixins: [AlloyEditor.WidgetDropdown, AlloyEditor.WidgetExclusive, AlloyEditor.WidgetFocusManager, AlloyEditor.ToolbarButtons, AlloyEditor.WidgetPosition, AlloyEditor.WidgetArrowBox], statics: {key: \'versions\'}, componentDidMount: function () {this._updatePosition();}, componentDidUpdate: function (prevProps, prevState) {this._updatePosition();}, getDefaultProps: function() {return {circular: true, descendants: \'.ae-button, .ae-toolbar-element\', keys: {next: [38, 39], prev: [37, 40]}};}, _getToolbarClassName: function() {var cssClass = \'ae-toolbar-versions\'; if (this.props.renderExclusive) {cssClass = \'ae-toolbar \' + this.getArrowBoxClasses();}return cssClass;}, _updatePosition: function() {var region; if (this.props.selectionData) {region = this.props.selectionData.region;}if (region) {var domNode = React.findDOMNode(this); var domElement = new CKEDITOR.dom.element(domNode); var startRect = region.startRect || region; var right = this.props.editor.get(\'nativeEditor\').editable().getClientRect().right; domNode.style.right = right + domNode.offsetWidth + this.props.gutterExclusive.left + \'px\'; domNode.style.top = region.top - domNode.offsetHeight/2 + startRect.height/2 + \'px\'; domNode.style.opacity = 1; domElement.removeClass(\'ae-arrow-box\'); this.cancelAnimation();}}, render: function() {var buttons = this.getToolbarButtons(this.props.config.buttons); var className = this._getToolbarClassName(); return ( <div className={className} data-tabindex={this.props.config.tabIndex || 0} onFocus={this.focus} onKeyDown={this.handleKey} tabIndex="-1"> <div className="ae-container">{buttons}</div> </div> );}}); AlloyEditor.Toolbars[ToolbarVersions.key] = AlloyEditor.ToolbarVersions = ToolbarVersions;');
        ie_close('code');
      ie_close('pre');
      ie_open('article', null, null,
          'id', 'article2');
        ie_open('h2');
          itext('Using a Toolbar');
        ie_close('h2');
        ie_open('p');
          itext('After creating your toolbar, you have to add it to the configuration of the editor where you want to use it.');
        ie_close('p');
        ie_open('pre');
          ie_open('code', null, null,
              'class', 'language-js');
            itext('var toolbars = {add: {buttons: [\'image\', \'camera\', \'hline\', \'table\'], tabIndex: 2}, versions: {buttons: [\'annotate\', \'comment\', \'acceptChanges\', \'rejectChanges\'], tabIndex: 1}}');
          ie_close('code');
        ie_close('pre');
        ie_open('p');
          itext('In this example, ');
          ie_open('em');
            itext('annotate');
          ie_close('em');
          itext(', ');
          ie_open('em');
            itext('comment');
          ie_close('em');
          itext(', ');
          ie_open('em');
            itext('acceptChanges');
          ie_close('em');
          itext(' and ');
          ie_open('em');
            itext('rejectChanges');
          ie_close('em');
          itext(' will be the buttons that will be loaded on the toolbar, and that will help us handle document version changes. Read our ');
          ie_open('a', null, null,
              'href', '/docs/develop/create/create_buttons.html');
            itext('Create Buttons');
          ie_close('a');
          itext(' Guide to know how to do this!');
        ie_close('p');
      ie_close('article');
    };
    $templateAlias1(soy.$$assignDefaults({content: param199}, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'docsDevelopCreateCreateToolbarsHtml.render';
  }

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsDevelopCreateCreateToolbarsHtml extends Component {}
Soy.register(docsDevelopCreateCreateToolbarsHtml, templates);
export { docsDevelopCreateCreateToolbarsHtml, templates };
export default templates;
/* jshint ignore:end */
