"use strict";

console.log( "loader.js" );

var blogLoader = {};
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
		console.log( "blogObject", blogLoader.blogObject );
		// BlogSpace.passJSON(blogObject);
	}

	function blogLoaderFailed (event) {
		console.log( "BlogLoader Failed" );
	}
};

blogLoader.getBlogs = () => {
	return blogLoader.blogObject;
};

module.exports = blogLoader;