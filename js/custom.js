// feel free to write some sth cool...
define(function(require) {
	require('jq');
	require('tpl');
	var demoData = {
		'title' : 'Competently restore cross-platform',
		'desc' : 'Holisticly engage superior communities and process-centric e-business. Distinctively aggregate ubiquitous collaboration and idea-sharing and scalable materials. Dynamically.',
		'p' : 'Energistically integrate stand-alone growth strategies vis-a-vis vertical scenarios. Compellingly plagiarize web-enabled quality vectors rather than leading-edge alignments. Interactively productivate maintainable experiences with adaptive meta-services. Credibly coordinate.',
		'a' : 'SignUp',
		'copyright' : '&copy; 2012 Your Logo Here',
		'nav' : {
			'name' : 'Home',
			'name' : 'About',
			'name' : 'Contact'
		}
	}
	$('.demo-data-title').append(Mustache.render('{{title}}', demoData));
	$('.demo-data-nav').append(Mustache.render('{{#nav}}{{name}}{{/nav}}', demoData));
	$('.demo-data-a').append(Mustache.render('{{a}}', demoData));
	$('.demo-data-p').append(Mustache.render('{{p}}', demoData));
	$('.demo-data-ft').append(Mustache.render('{{{copyright}}}', demoData));

// IT IS A require.async TPL
//	require.async('mp3' , function () {
//		audiojs.events.ready(function() {
//		    audiojs.createAll();
//		});
//	});
});