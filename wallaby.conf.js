module.exports = function (wallaby) {
    return {
        files: [
            'src/**/*.js',
            'package.json',
            '!src/**/*.spec.js'
        ],
        tests: [
            'src/**/*.spec.js'
        ],
        env: {
            type: 'node',
            runner: 'node'
        },

        testFramework: 'jest',
        
    };
};