const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

describe('general', () => {
    var options = {
        projectName: 'testProjectName',
        exportName: 'testMain',
        version: '0.0.1',
        author: 'zjs@baidu.com'
    };

    before(done => {
        helpers
            .run(path.join(__dirname, '../generators/app'))
            .withPrompts(options)
            .on('end', done);
    });

    it('creates expected files', () => {
        assert.file([
            'package.json',
            'src/.babelrc',
            'src/main.js',
            '.editorconfig',
            '.gitignore',
            'test',
            'README.md',
            'rollup.config.js'
        ]);
    });

    it('creates expected npm scripts', () => {
        assert.fileContent('package.json', '"build"');
        assert.fileContent('package.json', '"dev"');
        assert.fileContent('package.json', '"test"');
    });

    it('create expected projectname', () => {
        assert.JSONFileContent('package.json', { name: options.projectName });
    });

    it('create expected global variable', () => {
        assert.fileContent('rollup.config.js', /input:\s*'src\/main\.js'/);
        assert.fileContent(
            'rollup.config.js',
            new RegExp(`name:\\s*'${options.exportName}'`)
        );
    });
});
