"use strict";

let blogDOM = require('./blog.js');

function getBlogs() {
	return new Promise((resolve, reject) =>{
			$.ajax({
				url: 'https://nss-blog-project.firebaseio.com/blogs.json'
			}).done((blogData) => {
				console.log( "blogData", blogData );
				resolve(blogData);
		});
	});
}

function addBlogs(addBlogObject) {
	return new Promise((resolve, reject) =>{
			$.ajax({
				url: 'https://nss-blog-project.firebaseio.com/blogs.json',
				type: 'POST',
				data: JSON.stringify(addBlogObject),
				dataType: 'json'
			}).done((blogID) =>{
				resolve(blogID);
		});
	});
}
module.exports = {addBlogs, getBlogs };
