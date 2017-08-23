"use strict";

console.log( "add.js" );

let viewHandler = require('./views.js');
let blogLoader = require('./loader.js');
let blogDOM = require('./blog.js');

$('#add-blog-btn').click(function(event){
	let blogTitle = $("#blog-title").val();
	let blogAuthor = $("#blog-author").val();
	let blogContent = $("#blog-content").val();
	let blogKeywords = $("#blog-keywords").val();
	let blogTimestamp = new Date();

	if (blogTitle ==="" || blogAuthor ==="" || blogAuthor ==="" ) {

		alert("Please fill in the required fields");

	} else {

	let addBlogObject = 	{
							"Title": blogTitle,
							"Author": blogAuthor,
							"Content": blogContent,
							"Timestamp": blogTimestamp,
							"Keywords" : blogKeywords
							};

						blogLoader.blogArray.push(addBlogObject);
						blogDOM.outputToDOM(blogLoader.blogArray);
						viewHandler.listView();
						$("#blog-title").val("");
						$("#blog-author").val("");
						$("#blog-content").val("");
						$("#blog-keywords").val("");
	}
});

//////////////////////////////////////////////////////////

function addBlogReturnButton(element) {
	$(element).keypress(function(event) {
		if (event.which === 13) {
			$('#add-blog-btn').click();
		}
	});
}

addBlogReturnButton($("#blog-title"));
addBlogReturnButton($("#blog-author"));
addBlogReturnButton($("#blog-content"));
addBlogReturnButton($("#blog-keywords"));




