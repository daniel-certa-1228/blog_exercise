"use strict";
// console.log( "add.js" );

// {
	
// 	let blogTitleField = document.getElementById("blog-title");
// 	let blogAuthorField = document.getElementById("blog-author");
// 	let blogContentField = document.getElementById("blog-content");
// 	let blogKeywordsField = document.getElementById("blog-keywords");
// 	let blogTimestamp = new Date();

// 	let addBtn = document.getElementById("add-blog-btn");

// 	addBtn.addEventListener("click", (event) => {

// 		if (blogTitleField.value==="" || blogAuthorField.value==="" || blogContentField.value==="" ) {

// 			alert("Please fill in the required fields")

// 		}  else  {

// 			let addBlogObject = 	{
// 									"Title": blogTitleField.value,
// 									"Author": blogAuthorField.value,
// 									"Content": blogContentField.value,
// 									"Timestamp": blogTimestamp,
// 									"Keywords" : blogKeywordsField.value
// 									};

// 								BlogSpace.passNewBlogObject(addBlogObject);
// 								BlogSpace.listView();
// 								blogTitleField.value = ""
// 								blogAuthorField.value = ""
// 								blogContentField.value = ""
// 								blogKeywordsField.value = ""

// 		}


// 	});

// //////////////////////////////////////////////////////////

// 	function addBlogReturnButton(element) {
// 	element.addEventListener("keypress", function(event) {
//     if (event.keyCode == 13) {
//         addBtn.click();
//     	}
// 	});
// }

// 	addBlogReturnButton(blogTitleField)
// 	addBlogReturnButton(blogAuthorField)
// 	addBlogReturnButton(blogContentField)
// 	addBlogReturnButton(blogKeywordsField)


// }