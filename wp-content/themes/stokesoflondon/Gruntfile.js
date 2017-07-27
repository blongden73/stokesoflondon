module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'style/style.css' : 'style/style.scss'
				}
			}
		},

		'ftp-deploy': {
			build: {
				auth: {
				host: '160.153.162.21',
				port: 21,
				authKey: 'key1'
    		},
			src: 'images',
			dest: '/images'
  			},
  			json:{
  				auth: {
				host: '160.153.162.21',
				port: 21,
				authKey: 'key1'
    		},
			src: 'json',
			dest: '/json'
  			}
		},

    copy: {
      main: {
        expand: true,
        cwd: 'style',
        src: 'style.css',
        dest: 'deploy/style',
      },
      js: {
        expand: true,
        cwd: 'js',
        src: 'main.js',
        dest: 'deploy/js',
      },
      deploy: {
        expand: true,
        cwd: 'deploy/style',
        src: 'style.css',
        dest: '',
      }
    },

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}

	});
	grunt.loadNpmTasks('grunt-ftp-deploy');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('default',['sass', 'copy', 'watch']);

	// grunt.registerTask('deploy',['execute', 'sass', 'ftp-deploy']);
}
