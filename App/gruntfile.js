/// <vs AfterBuild='build' SolutionOpened='build' />
module.exports = function(grunt) {

    var app = {
        build: "Build",
        dist: "Dist",
        src: "Src",
        test: "Test"
    };

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // configuration of the tasks
        // ------------------------------------------------------------------------------

        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: app.build,
                        src: "*.min.js",
                        dest: app.dist
                    }
                ]
            }
        },

        karma: {
            test: {
                configFile: app.test + "/karma.conf.js"
            }
        },

        ts: {
            build: {
                options: {
                    target: "es3", // "es3" (default) | "es5"
                    sourceMap: true, // true (default) | false
                    sourceRoot: "/" + app.src,
                    declaration: false, // true | false (default)
                    removeComments: true // true (default) | false
                },
                src: [app.src + "/**/*.ts"],
                out: app.build + "/<%= pkg.name %>.js"
            }
        },

        tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            files: {
                src: [app.src + "/**/*.ts"]
            }
        },

        uglify: {
            app: {
                options: {
                    sourceMap: true,
                    sourceMapIn: app.build + "/<%= pkg.name %>.js.map"
                },
                src: [app.build + "/<%= pkg.name %>.js"],
                dest: app.build + "/<%= pkg.name %>.min.js"
            }
        },

        watch: {
            build: {
                files: [app.src + "/**/*.ts"],
                tasks: ["build"]
            }
        }
    });

    // Load the plugin that provides the uglify task
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-karma");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");

    grunt.registerTask("build", ["ts", "tslint", "karma", "uglify", "copy"]);
    grunt.registerTask("default", ["build"]);
};