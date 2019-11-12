//This file isn't transpiled, so must use commonjs and es5

//Register babel to tanspile before our test run.
require('babel-register')();

//Disable webpack features that Mocha dosent understand
require.extensions['.css'] = function() {};
