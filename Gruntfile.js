module.exports = function( grunt ) {
    require( "load-grunt-config" )( grunt );
    grunt.config.init({
        autoprefixer: {
            sass: {
                expand: true,
                cwd: "sass/",
                src: "*.css",
                dest: "sass/"
            }
        },
        sass: {
            options: {
                style: "expanded"
            },
            base: {
                expand: true,
                cwd: "sass/",
                src: "*.scss",
                dest: "sass/",
                ext: ".css"
            }
        },

        watch: {
            sass: {
                files: "sass/*.scss",
                tasks: [ "sass", "autoprefixer:sass" ]
            }
        }
    });
};