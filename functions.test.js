const { test } = require('@jest/globals');
const functions = require('./functions');

test('adds 1 and 2 to equal 3', () => { 
    expect(functions.sum(1, 2)).toBe(3);        // Expect excepts the fumction that is be be tested and tobe takes the expected output
});
