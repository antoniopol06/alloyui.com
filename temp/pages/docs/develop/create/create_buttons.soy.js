/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from create_buttons.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDevelopCreateCreateButtonsHtml.
 * @public
 */

goog.module('docsDevelopCreateCreateButtonsHtml.incrementaldom');

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
  var param189 = function() {
    ie_open('h6');
      itext('If you run the editor with the default UI, which is written in React, then adding a button will be straightforward. Buttons are standard React classes. For your convenience, there is also a number of mixins, which you can use that provide basic functionality out of the box. Then, use CKEditor\'s API to do style the content and that is it!');
    ie_close('h6');
    ie_open('article', null, null,
        'id', 'article1');
      ie_open('h2');
        itext('Creating a Button');
      ie_close('h2');
      ie_open('p');
        ie_open('span', null, null,
            'class', 'code-header');
          itext('Example of a new button that converts the current selection into a marquee');
        ie_close('span');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('// Use the built-in version of React if your site does not use React var React = AlloyEditor.React; var ButtonMarquee = React.createClass({mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle], propTypes: {editor: React.PropTypes.object.isRequired}, getDefaultProps: function() {return {style: {element: \'marquee\'}};}, statics: {key: \'marquee\'}, render: function() {var cssClass = \'ae-button \' + this.getStateClasses(); return ( <button className={cssClass} data-type="button-marquee" onClick={this.applyStyle} tabIndex={this.props.tabIndex}> <span className="ae-icon-separator"></span> </button> );}}); AlloyEditor.Buttons[ButtonMarquee.key] = AlloyEditor.ButtonMarquee = ButtonMarquee;');
        ie_close('code');
      ie_close('pre');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'article2');
      ie_open('h2');
        itext('Using a Button');
      ie_close('h2');
      ie_open('p');
        itext('After creating your button, you have to add it to the configuration of the Toolbar where you want to use it.');
      ie_close('p');
      ie_open('p');
        ie_open('span', null, null,
            'class', 'code-header');
          itext('Buttons, which handle styles are usually used within the Styles Toolbar, inside a text-like selection');
        ie_close('span');
      ie_close('p');
      ie_open('pre');
        ie_open('code', null, null,
            'class', 'language-js');
          itext('var toolbars = [ styles: {selections: [{name: \'text\', buttons: [\'styles\', \'bold\', \'italic\', \'underline\', \'link\', \'twitter\', \'marquee\'], test: AlloyEditor.SelectionTest.text}], tabIndex: 1}];');
        ie_close('code');
      ie_close('pre');
      ie_open('p');
        itext('In this case the ');
        ie_open('em');
          itext('Marquee');
        ie_close('em');
        itext(' button will appear after ');
        ie_open('em');
          itext('Twitter');
        ie_close('em');
        itext(' one, last on the toolbar.');
      ie_close('p');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param189}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDevelopCreateCreateButtonsHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class docsDevelopCreateCreateButtonsHtml extends Component {}
Soy.register(docsDevelopCreateCreateButtonsHtml, templates);
export { docsDevelopCreateCreateButtonsHtml, templates };
export default templates;
/* jshint ignore:end */
