module.exports = function (wallaby) {
    return {
        files: [
            'src/**/*.ts',
            'package.json',
            '!src/**/*.spec.ts'
        ],
        tests: [
            'src/**/*.spec.ts'
        ],
        env: {
            type: 'node',
            runner: 'node'
        },

        testFramework: 'jest',
        
    };
};