module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	// Concatenate Configuration
	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/script.js'
			],
			dest: '../markup/js/script.min.js'
		}
	},

	// Uglify Configuration
	uglify: {
		dist: {
			files: {
				'../markup/js/jquery.min.js': ['dist/js/plugin/jquery.js'],
				'../markup/js/jquery.mask.min.js': ['dist/js/plugin/jquery.mask.js'],
				'../markup/js/jquery.matchHeight.min.js': ['dist/js/plugin/jquery.matchHeight.js'],
				'../markup/js/jcf.min.js': ['dist/js/plugin/jcf.js'],
				'../markup/js/jcf.checkbox.min.js': ['dist/js/plugin/jcf.checkbox.js'],
				'../markup/js/jcf.radio.min.js': ['dist/js/plugin/jcf.radio.js'],
				'../markup/js/jcf.select.min.js': ['dist/js/plugin/jcf.select.js'],
				'../markup/js/jcf.number.min.js': ['dist/js/plugin/jcf.number.js'],
				'../markup/js/slick.min.js': ['dist/js/plugin/slick.js'],
				'../markup/js/jquery.responsiveTabs.min.js': ['dist/js/plugin/jquery.responsiveTabs.js'],
				'../markup/js/script.min.js': ['dist/js/script.js'],
				'../markup/js/new.min.js': ['dist/js/new.js'],
				'../markup/js/home.min.js': ['dist/js/home.js'],
				'../markup/js/news.min.js': ['dist/js/news.js'],
				'../markup/js/letter-director.min.js': ['dist/js/letter-director.js'],
				'../markup/js/privacy-terms.min.js': ['dist/js/privacy-terms.js'],
				'../markup/js/authorization.min.js': ['dist/js/authorization.js'],
				'../markup/js/delivery.min.js': ['dist/js/delivery.js'],
				'../markup/js/personal-area.min.js': ['dist/js/personal-area.js'],
				'../markup/js/card-product.min.js': ['dist/js/card-product.js'],
				'../markup/js/stocks.min.js': ['dist/js/stocks.js'],
				'../markup/js/contacts.min.js': ['dist/js/contacts.js'],
				'../markup/js/error.min.js': ['dist/js/error.js'],
				'../markup/js/basket-page.min.js': ['dist/js/basket-page.js'],
				'../markup/js/replace.min.js': ['dist/js/replace.js'],
			}
		}
	},

	// Sass Configuration
	sass: {
		options: {
			loadPath: ['bower_components/foundation/foundation.scss']
		},
		dist: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'dist/scss/',
				src: ['*.scss'],
				dest: '../markup/css/',
				ext: '.css'
			}]
		}
	},

	// Watch Configuration
	watch: {
		grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

		sass: {
			files: 'dist/scss/*.scss',
			tasks: ['buildCss']
		},

		script: {
			files: 'dist/js/*.js',
			tasks: ['buildJs']
		},

		markup: {
			files: '*.html',
			tasks: ['htmlbuild']
		}
	},

	fixturesPath: './',
	sourcesPath: '../markup',

    htmlbuild: {
        dist: {
            src: '*.html',
            dest: '<%= sourcesPath %>/templates/',
            options: {
                beautify: true,
                prefix: '../',
                relative: false,
                sections: {
                    views: '<%= fixturesPath %>/*.html',
                    templates: '<%= fixturesPath %>/*.html',
                    layout: {
						header: '<%= fixturesPath %>/templates/header.html',
                    	footer: '<%= fixturesPath %>/templates/footer.html',
                    	settings: '<%= fixturesPath %>/templates/settings.html',
					}
                },
            }
        }
    }


});

// Load Grunt tasks
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-html-build');

// Register Grunt tasks
grunt.registerTask('buildCss', ['sass']);
grunt.registerTask('buildJs',  ['concat', 'uglify']);
grunt.registerTask('default',  ['buildCss', 'buildJs', 'watch', 'sass']);

}
