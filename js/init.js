seajs.config({
  alias: {
  	// libs
  	'jq' : 'http://code.jquery.com/jquery.min.js',
  	'less': './less/less-1.3.0.min', // write less css
  	'd3':'./lib/d3.v2', // d3 data-driven canvas lib
  	'cufon':'./lib/cufon-yui', // font creator
  	'tpl':'./lib/mustache',
  	// plugins
  	'mas':'./plugins/jquery.masonry.min',
  	'bgi' : './plugins/jquery.backstretch.min',
  	'tiptip' : './plugins/tiptip/jquery.tiptip.min',
  	'mp3' : './plugins/audiojs/audio.min',
  	'fancybox' : './plugins/fancybox/jquery.fancybox-1.3.4.pack',
  	'placeholder':'./plugins/jquery.placeholder.min',
  	// tomato webdemo frame UI scripts
  	'fuc' : './function',
  	// custom scripts
  	'cus' : './custom'
  }
});
define(function(require) {
	require('cus');
});