module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				reporter: 'jshint-stylish'
			},

			build: ['Grunfile.js', 'public/js/**/*.js']
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
				files: ['Grunfile.js', 'public/js/**/*.js'],
				tasks: ['jshint:build']
			}
		}
	});
}