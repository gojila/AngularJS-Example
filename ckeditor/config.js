/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
  // config.filebrowserBrowseUrl = '/ckfinder/ckfinder.html';
  // config.filebrowserImageBrowseUrl = '/ckfinder/ckfinder.html?type=Images';
  // config.filebrowserFlashBrowseUrl = '/ckfinder/ckfinder.html?type=Flash';
  // config.filebrowserUploadUrl = '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files';
  //config.filebrowserImageUploadUrl = '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';
  //config.filebrowserFlashUploadUrl = '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash';

  config.filebrowserBrowseUrl = 'ckeditor/ckfinder/ckfinder.html';
	config.filebrowserImageBrowseUrl = 'ckeditor/ckfinder/ckfinder.html?type=Images&currentFolder=images';
	config.filebrowserFlashBrowseUrl = 'ckeditor/ckfinder/ckfinder.html?type=Flash&currentFolder=images';
	config.filebrowserUploadUrl =
  'ckeditor/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files&currentFolder=/images/';
  //config.filebrowserUploadUrl = 'ckeditor/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=userfiles';
	config.filebrowserImageUploadUrl =
  'ckeditor/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Images&currentFolder=/images/';
	config.filebrowserFlashUploadUrl = 'ckeditor/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash';
	config.filebrowserWindowWidth = '1000';
 	config.filebrowserWindowHeight = '700';
};
