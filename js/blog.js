console.log( "blog.js" );

{
	let blogArray = [];
	console.log( "blogArray", blogArray );

	BlogSpace.passJSON = (blogObject) => {

		for (let i = 0; i < blogObject.length; i++) {
			let blogPost = blogObject[i]
			blogArray.push(blogPost);

		};

		BlogSpace.outputToDOM(blogArray);
	}

	////////////////////////////////////////////////////

	BlogSpace.outputToDOM = (blogArray) => {
 
		let blogArticleDiv = document.getElementById("article-div");
		// console.log( "blogArticleDiv", blogArticleDiv );
		blogArticleDiv.innerHTML = "";
		console.log( "blogArray", blogArray );

		for (let j = 0; j < blogArray.length; j++) {

			let blogCard = `<article class="blog-article" id="blogPost--${j}">
							<header class="blog-header">${blogArray[j].Title}</header>
							<section>
							<p>${blogArray[j].Content}</p>
							</section>
							<footer class="entry-footer">Posted by <strong>${blogArray[j].Author}</strong> on ${blogArray[j].Timestamp}</footer>
							<footer class="keyword-footer"><strong>Keywords: </strong>${blogArray[j].Keywords}</footer>`

				$(blogArticleDiv).prepend(blogCard);

		};

	}

}