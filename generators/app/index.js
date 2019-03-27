'use strict';
const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const config = require('./config');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        for (let optionName in config.options) {
            this.option(optionName, config.options[optionName]);
        }
    }

    initializing() {}

    prompting() {
        return this.prompt(config.prompts).then(answers => {
            this.projectName = answers.projectName;
            this.exportName = answers.exportName;
            this.version = answers.version;
            this.author = answers.author;
        });
    }

    writing() {
        const templateData = {
            projectName: this.projectName,
            exportName: this.exportName,
            version: this.version,
            author: this.author
        };

        const copy = (input, output) => {
            this.fs.copy(
                this.templatePath(input),
                this.destinationPath(output)
            );
        };

        const copyTpl = (input, output, data) => {
            this.fs.copyTpl(
                this.templatePath(input),
                this.destinationPath(output),
                data
            );
        };

        // Render Files
        config.filesToRender.forEach(file => {
            copyTpl(file.input, file.output, templateData);
        });

        // Copy Files
        config.filesToCopy.forEach(file => {
            copy(file.input, file.output);
        });

        // Create extra directories
        config.dirsToCreate.forEach(item => {
            mkdirp(item);
        });
    }
};
