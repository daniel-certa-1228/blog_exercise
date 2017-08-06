console.log( "blog.js" );

{
	let blogArray = [];
	console.log( "blogArray", blogArray );

	BlogSpace.passJSON = (blogObject) => {

		for (let i = 0; i < blogObject.length; i++) {
			let blogPost = blogObject[i]
			blogArray.push(blogPost);
		};
	}

	////////////////////////////////////////////////////

	BlogSpace.outputToDOM = (blogArray) => {
 
		let blogArticleDiv = document.getElementById("article-div");
		blogArticleDiv.innerHTML = "";

		for (let i = 0; i < blogArray.length; i++) {
			// console.log( "test" );
			let blogPost = '${blogArray[i].Title}'

			console.log( "blogPost", blogPost );
			
			$(blogArticleDiv).prepend(blogPost)

		};

	}

	BlogSpace.outputToDOM(blogArray);

}