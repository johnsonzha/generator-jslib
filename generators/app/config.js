module.exports = {
    options: {},
    prompts: [
        {
            type: 'input',
            name: 'projectName',
            message: 'type your project name ?',
            default: 'mylib'
        },
        {
            type: 'input',
            name: 'exportName',
            message: 'the global variable name of your jslib ?',
            default: 'mylib'
        },
        {
            type: 'input',
            name: 'version',
            message: 'the js lib version ?',
            default: '0.1.0'
        },
        {
            type: 'input',
            name: 'author',
            message: "author's name ?",
            default: ''
        }
    ],
    dirsToCreate: ['dist', 'src', 'test'],
    filesToCopy: [
        {
            input: 'babelrc',
            output: 'src/.babelrc'
        },
        {
            input: 'eslintignore',
            output: '.eslintignore'
        },
        {
            input: 'eslintrc.yml',
            output: '.eslintrc.yml'
        },
        {
            input: 'gitignore',
            output: '.gitignore'
        },
        {
            input: 'editorconfig',
            output: '.editorconfig'
        },
        {
            input: 'test.js',
            output: 'test/test.js'
        }
    ],
    filesToRender: [
        {
            input: '_package.json',
            output: 'package.json'
        },
        {
            input: 'main.js',
            output: 'src/main.js'
        },
        {
            input: 'rollup.config.js',
            output: 'rollup.config.js'
        },
        {
            input: 'README.md',
            output: 'README.md'
        }
    ]
};
