seajs.config({
  alias: {
  	'jq' : 'http://code.jquery.com/jquery.min.js',
  	'less': './less/less-1.3.0.min',
  	// js plugins
  	'bgi' : './plugins/jquery.backstretch.min',
  	'tiptip' : './plugins/tiptip/jquery.tiptip.min',
  	'mp3' : './plugins/audiojs/audio.min',
  	// tomato webdemo frame UI scripts
  	'fuc' : './function',
  	// custom scripts
  	'cus' : './custom'
  }
});
define(function(require) {
	require('cus');
});