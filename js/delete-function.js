console.log( "delete-function.js" );


//Handles the deletion of posts

{

	let blogArticleDiv = document.getElementById("article-div");

	blogArticleDiv.addEventListener("click", (event) => {
		let target = event.target;
		// console.log( "target", target );
		let targetClass = event.target.className;
		// console.log( "targetClass", targetClass );
		let articleCard = target.parentNode;
		
		if (targetClass === "deleteBtn") {
			// console.log( "target.parentNode", target.parentNode );
			articleCard.parentNode.removeChild(articleCard);

		}
	});
	
}