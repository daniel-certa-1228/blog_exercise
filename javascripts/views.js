"use strict";

console.log( "views.js" );

let viewHandler = {};

$("#listView").click(function(event) {
	event.preventDefault();
	viewHandler.listView();
});

$("#addView").click(function(event) {
	event.preventDefault();
	viewHandler.addView();
});

viewHandler.listView = () => {
	$('#add-entry').addClass('hidden');
	$('#article-div').removeClass('hidden');
};

viewHandler.addView = () => {
	$('#add-entry').removeClass('hidden');
	$('#article-div').addClass('hidden');
};

module.exports = viewHandler;



