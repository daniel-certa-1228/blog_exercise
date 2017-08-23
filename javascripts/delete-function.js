"use strict";

var deleteFunction = {};

// console.log( "delete-function.js" );

//Handles the deletion of posts

$('#article-div').click(function(event) {
	let target = event.target;
	if (target.className === 'deleteBtn') {
		$(target).closest('article').remove();
	}
});
