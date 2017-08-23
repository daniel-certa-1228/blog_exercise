"use strict";

console.log( "main.js" );

let blogLoader = require('./loader.js');
let viewHandler = require('./views.js');
let blogDOM = require('./blog.js');
let deleteFunction = require('./delete-function.js');
let add = require('./add.js');

blogLoader.getBlogs()
	.then((blogData) => {
		let blogIdArray = Object.keys(blogData);
		blogIdArray.forEach((key) => {
			blogData[key].id = key;
		});
		let blogArray = Object.values(blogData);
		blogDOM.outputToDOM(blogArray);
	});

