module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		jekyll: {
			full: {}
		},
		htmlmin: {
			site: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				expand: true,
				cwd: '_site/',
				src: '**/*.html',
				dest: '_site/'
			}
		},
		watch: {
			full: {
				files: [
					'**',
					'!_site/**',
					'!node_modules/**',
					'!css/*',
					'!Gruntfile.js',
					'!README.md',
					'!LICENSE.md',
					'!package.json',
					'!.git/**'
				],
				tasks: ['jekyll:full', 'htmlmin']
			}
		},
		rsync: {
			options: {
				args: [
					'--times', // preserve modification times…
					'--omit-dir-times', // …except for directories
					'--compress', // compress data during the transfer
					'--verbose', // increase verbosity
					'--chmod=ug=rwX,o=rX' // `chmod` new files
				],
				exclude: ['.DS_Store'],
				recursive: true
			},
			deploy: {
				options: {
					src: '_site/',
					dest: '/var/www/html/extensions/',
					host: '54.213.240.91'
				}
			}
		}
	});

	grunt.registerTask('default', function() {
		grunt.log.subhead('Please use one of the following commands:');
		grunt.log.writeln('• grunt watch  — for quick dev build');
		grunt.log.writeln('• grunt build  — for full site build');
		grunt.log.writeln('• grunt deploy — for deploying build');
	});

	grunt.registerTask('build', [
		'jekyll:full',
		'htmlmin'
	]);

	grunt.registerTask('deploy', ['rsync']);

};
