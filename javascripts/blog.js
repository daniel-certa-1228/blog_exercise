"use strict";
// console.log( "blog.js" );

let blogLoader = require('./loader.js');

var blogDOM = {};

blogDOM.outputToDOM = (blogArray) => {

	$("#article-div").html("");

	for (let j = 0; j < blogArray.length; j++) {
		let blogCard = `<article class="blog-article" id="blogPost--${j}">
						<header class="blog-header">${blogArray[j].Title}</header>
						<section>
						<p>${blogArray[j].Content}</p>
						</section>
						<footer class="entry-footer">Posted by <strong>${blogArray[j].Author}</strong> on ${blogArray[j].Timestamp}</footer>
						<footer class="keyword-footer"><strong>Keywords: </strong>${blogArray[j].Keywords}</footer>
						<button type="button" class="deleteBtn" 
						id="deleteBtn--${j}">Delete Post</button>`;

			$("#article-div").prepend(blogCard);
	}
};

module.exports = blogDOM;


