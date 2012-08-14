// IT IS A require.async TPL
//	require.async('mp3' , function () {
//		audiojs.events.ready(function() {
//		    audiojs.createAll();
//		});
//	});

// feel free to write some sth cool...
define(function(require) {
	// require libs
	require('jq');
	require('tpl');
	// preset demo data
	var demoData = {
		'title' : 'Competently restore cross-platform',
		'desc' : 'Holisticly engage superior communities and process-centric e-business. Distinctively aggregate ubiquitous collaboration and idea-sharing and scalable materials. Dynamically.',
		'p' : 'Energistically integrate stand-alone growth strategies vis-a-vis vertical scenarios. Compellingly plagiarize web-enabled quality vectors rather than leading-edge alignments. Interactively productivate maintainable experiences with adaptive meta-services. Credibly coordinate.',
		'a' : 'SignUp',
		'copyright' : '&copy; 2012 Your Logo Here',
		'li' : {
			'name' : 'Credibly',
			'name' : 'integrate',
			'name' : 'ubiquitous',
			'name' : 'experiences',
			'name' : 'strategies',
			'name' : 'process'
		}
	}
	// append demo data
	$("*[demo='title']").append(Mustache.render('{{title}}', demoData));
	$("*[demo='li'] a").append(Mustache.render('{{#li}}{{name}}{{/li}}', demoData));
	$("*[demo='a']").append(Mustache.render('{{a}}', demoData));
	$("*[demo='p']").append(Mustache.render('{{p}}', demoData));
	$("*[demo='ft']").append(Mustache.render('{{{copyright}}}', demoData));
});