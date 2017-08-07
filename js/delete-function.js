console.log( "delete-function.js" );

{

	let blogArticleDiv = document.getElementById("article-div");

	blogArticleDiv.addEventListener("click", (event) => {
		let target = event.target;
		console.log( "target", target );
		
	});


}