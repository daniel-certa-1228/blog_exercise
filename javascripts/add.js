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
	
});
	// let blogTitleField = $("#blog-title");
	// // console.log( "blogTitleField", blogTitleField );
	// let blogAuthorField = $("#blog-author");
	// let blogContentField = $("#blog-content");
	// let blogKeywordsField = $("#blog-keywords");
	// let blogTimestamp = new Date();

	// if ($("#blog-title")==="" || blogAuthorField.value==="" || blogContentField.value==="" ) {

	// 	alert("Please fill in the required fields");

	// }  
	// else  {

	// 	let addBlogObject = 	{
	// 							"Title": blogTitleField.value,
	// 							"Author": blogAuthorField.value,
	// 							"Content": blogContentField.value,
	// 							"Timestamp": blogTimestamp,
	// 							"Keywords" : blogKeywordsField.value
	// 							};

	// 	blogLoader.blogArray.push(addBlogObject);
	// 	viewHandler.listView();
	// 	blogDOM.outputToDOM(blogLoader.blogArray);
	// 	blogTitleField.value = "";
	// 	blogAuthorField.value = "";
	// 	blogContentField.value = "";
	// 	blogKeywordsField.value = "";
	// }


// let blogTitleField = document.getElementById("blog-title");
// let blogAuthorField = document.getElementById("blog-author");
// let blogContentField = document.getElementById("blog-content");
// let blogKeywordsField = document.getElementById("blog-keywords");
// let blogTimestamp = new Date();

// let addBtn = document.getElementById("add-blog-btn");

// addBtn.addEventListener("click", (event) => {

// 	if (blogTitleField.value==="" || blogAuthorField.value==="" || blogContentField.value==="" ) {

// 		alert("Please fill in the required fields");

// 	}  else  {

// 		let addBlogObject = 	{
// 								"Title": blogTitleField.value,
// 								"Author": blogAuthorField.value,
// 								"Content": blogContentField.value,
// 								"Timestamp": blogTimestamp,
// 								"Keywords" : blogKeywordsField.value
// 								};

// 							// BlogSpace.passNewBlogObject(addBlogObject);
// 							viewHandler.listView();
// 							blogTitleField.value = "";
// 							blogAuthorField.value = "";
// 							blogContentField.value = "";
// 							blogKeywordsField.value = "";

// 	}


// });

// //////////////////////////////////////////////////////////

// 	function addBlogReturnButton(element) {
// 	element.addEventListener("keypress", function(event) {
//     if (event.keyCode == 13) {
//         addBtn.click();
//     	}
// 	});
// }

// 	addBlogReturnButton(blogTitleField);
// 	addBlogReturnButton(blogAuthorField);
// 	addBlogReturnButton(blogContentField);
// 	addBlogReturnButton(blogKeywordsField);


