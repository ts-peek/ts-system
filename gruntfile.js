/// <vs BeforeBuild='ts:test' SolutionOpened='build' />
module.exports = function(grunt) {

    var app = {
        build: "Build/",
        dist: "Dist/",
        docs: "Docs/",
        projectItems: "_ProjectItems/",
        src: "Src/",
        test: "Test/"
    };

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // configuration of the tasks
        // ------------------------------------------------------------------------------

        clean: {
            build: [app.build],
            dist: [app.dist],
            docs: [app.docs]
        },

        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: app.build,
                        src: ["**/*"],
                        dest: app.dist
                    }
                ]
            }
        },

        karma: {
            test: {
                configFile: app.test + "karma.conf.js"
            }
        },

        ts: {
            build: {
                options: {
                    target: "es3", // "es3" (default) | "es5"
                    sourceMap: true, // true (default) | false
                    sourceRoot: "/" + app.src,
                    declaration: true, // true | false (default)
                    removeComments: true, // true (default) | false
                    fast: "never" // do not user fast compile (does not work when specifying the --out parameter anyways)
                },
                src: [app.src + "**/*.ts"],
                out: app.build + "<%= pkg.name %>.js"
            }
        },

        tslint: {
            options: {
                configuration: grunt.file.readJSON(app.projectItems + "tslint.json")
            },
            build: {
                src: [app.src + "**/*.ts", app.test + "**/*.ts*/"]
            }
        },

        typedoc: {
            build: {
                options: {
                    out: app.docs,
                    module: "commonjs",
                    target: "es3",
                    name: "<%= pkg.name %>",
                    readme: "README.md",
                    exclude: app.src + "reference.ts",
                    mode: "file"
                },
                src: app.src
            }
        },

        uglify: {
            build: {
                options: {
                    sourceMap: true,
                    sourceMapIn: app.build + "<%= pkg.name %>.js.map"
                },
                src: [app.build + "<%= pkg.name %>.js"],
                dest: app.build + "<%= pkg.name %>.min.js"
            }
        },

        watch: {
            build: {
                files: [app.src + "**/*.ts"],
                tasks: ["build"]
            }
        }
    });

    // Load the plugin that provides the uglify task
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-karma");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-typedoc");

    grunt.registerTask("doc", ["clean:docs", "typedoc:build"]);
    grunt.registerTask("qa", ["tslint", "karma"]);
    grunt.registerTask("build", ["clean:build", "ts", "qa"]);
    grunt.registerTask("all", ["build", "copy", "doc"]);
    grunt.registerTask("default", ["all"]);
};