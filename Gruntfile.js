module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},

			build: ['Gruntfile.js', 'public/js/**/*.js']
		},

		clean: {
			dist: {
				src: 'dist'
			},

			stylesheets: {
				src: 'public/css/<%= pkg.name%>.css'
			}
		},

		less: {
			build: {
				src: 'public/less/<%= pkg.name%>.css',
				dest:'public/css/<%= pkg.name%>.css'
			}
		},

		watch: {
			options: {
				livereload: true
			},

			stylesheets: {
				files: 'public/less/**/*.less',
				tasks: ['clean:stylesheets', 'less:build']
			},

			scripts: {
				files: ['Gruntfile.js', 'public/js/**/*.js'],
				tasks: ['jshint:build']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-html-build');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('dist', ['clean:dist', 'jshint:build']);
};