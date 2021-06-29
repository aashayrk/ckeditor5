/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';

// basic text styles 
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import AlignmentUI from '@ckeditor/ckeditor5-alignment/src/alignmentui';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';

// code and code block
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';

// headings, paragraph, lists, blockquote, hr
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';
import List from '@ckeditor/ckeditor5-list/src/list';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';

// link
import Link from '@ckeditor/ckeditor5-link/src/link';

// table
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

// image 
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageTextAlternative from '@ckeditor/ckeditor5-image/src/imagetextalternative';	
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageInsert';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

// media 
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';

// clipboard 
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials, 
	Bold, 
	Italic, 
	Underline, 
	Strikethrough, 
	Subscript, 
	Superscript, 
	Alignment, 
	AlignmentUI, 
	TextTransformation, 
	Highlight, 
	Autoformat, 
	RemoveFormat, 
	SpecialCharacters, 
	SpecialCharactersEssentials, 
	Code, 
	CodeBlock, 
	Heading, 
	HeadingButtonsUI,
	Paragraph,  
	ParagraphButtonUI, 
	List, 
	BlockQuote, 
	HorizontalLine, 
	Link, 
	Table, 
	TableToolbar, 
	Image, 
	ImageTextAlternative, 
	ImageCaption, 
	ImageInsert, 
	AutoImage, 
	ImageUpload, 
	SimpleUploadAdapter, 
	MediaEmbed, 
	Clipboard, 
];

// // Editor configuration.
// ClassicEditor.defaultConfig = {
// 	toolbar: {
// 		items: [ 
// 			'paragraph', 
// 			'heading1', 
// 			'heading2', 
// 			'heading3', 
// 			'blockquote', 
// 			'horizontalline', 
// 			'|', 
// 			'bold', 
// 			'italic', 
// 			'underline', 
// 			'strikethrough', 
// 			'alignment', 
// 			'superscript', 
// 			'subscript', 
// 			'texttransformation',
// 			'highlight', 
// 			'specialcharacter', 
// 			'|', 
// 			'removeformat',  
// 			'|', 
// 			'code', 
// 			'codeblock',
// 			'|',  
// 			'table', 
// 			'image', 
// 			'mediaembed' 
// 		]
// 	},
// 	heading: {
// 		options: [
// 			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
// 			{ model: 'heading1', view: 'h2', title: 'Heading 1', class: 'ck-heading_heading1' },
// 			{ model: 'heading2', view: 'h3', title: 'Heading 2', class: 'ck-heading_heading2' },
// 			{ model: 'heading3', view: 'h4', title: 'Heading 3', class: 'ck-heading_heading3' }
// 		]
// 	}, 
// 	image: {
// 		toolbar: [
// 			'toggleImageCaption', 
// 			'imageTextAlternative' 
// 		]
// 	},
// 	table: {
// 		contentToolbar: [
// 			'tableColumn',
// 			'tableRow',
// 			'mergeTableCells'
// 		]
// 	},
// 	// This value must be kept in sync with the language defined in webpack.config.js.
// 	language: 'en'
// };