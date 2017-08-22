"use strict";

console.log( "main.js" );

let blogLoader = require('./loader.js');
let viewHandler = require('./views.js');
let blogDOM = require('./blog.js');

blogLoader.loadBlogInfo();

