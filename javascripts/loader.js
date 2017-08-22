"use strict";

console.log( "loader.js" );

let blogDOM = require('./blog.js');

var blogLoader = {};

blogLoader.blogArray = [];
console.log( "blogLoader.blogArray", blogLoader.blogArray );
// Loads from json
blogLoader.loadBlogInfo = () => {

	blogLoader.blogObject = {};

	$.ajax({
		url:'../json/blog.json'
	}).done(blogLoaderComplete)
	  .fail(blogLoaderFailed);

	function blogLoaderComplete (json) {
		console.log( "BlogLoader Complete" );
		blogLoader.blogObject = json; 
		for (let i = 0; i < blogLoader.blogObject.length; i++) {
			blogLoader.blogArray.push(blogLoader.blogObject[i]);
		}
		blogDOM.outputToDOM(blogLoader.blogArray);
	}

	function blogLoaderFailed (event) {
		console.log( "BlogLoader Failed" );
	}
};

// blogLoader.getBlogs = () => {
// 	return blogLoader.blogArray;
// };

module.exports = blogLoader;