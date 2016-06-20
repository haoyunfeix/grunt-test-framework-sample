# Test Framewok Example
a simpe example to describe how to setup the test framework

This example introduces how to use grunt + mocha + chai to take unit test for both nodejs code.

## Grunt ##
is a javascript task runner, is used to control the work flow, plugins are added to it to perform different tasks. Mocha and chai are all enabled by plugins.
Links:</br>
http://gruntjs.com/

## Mocha ##
is a nodejs test framework, and also has mocha plugin for grunt.
useful links:</br>
https://github.com/mochajs/mocha</br>
http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html</br>
grunt-mocha-test is the plugin for grunt:</br>
https://www.npmjs.com/package/grunt-mocha-test</br>

## Chai ##
Assertion library.

## Jshint ##
could verify js files using static check.</br>
http://jshint.com/docs/</br>
grunt-contrib-jshint is the grunt plugin:</br>
https://www.npmjs.com/package/grunt-contrib-jshint</br>

## Steps to run ##
a. download this example and under the directory, npm install all dependencies in the package.json file.
You may only need to npm install grunt globally first and then run "npm install" under the directory.
b. type "grunt" under the directory. And you will see:</br>
  Running "concat:dist1" (concat) task</br>
  Running "concat:dist2" (concat) task</br>
  Running "jshint:all" (jshint) task</br>
  >> 5 files lint free.</br>

  Running "mochaTest:test" (mochaTest) task</br>

  Test add function</br>
    ✓ 1+1 = 2 check</br>
    ✓ -1+1=0 check</br>

  2 passing (4ms)</br>

  Note: You can also run a single task, for example "grunt concat:dist1" will only take the dist1 test.
  
