console.log( "views.js" );

{

	let addBlogEntry = document.getElementById("add-entry");
	let articleDiv = document.getElementById("article-div");
	let listLink = document.getElementById("listView")
	let addLink = document.getElementById("addView")

	listLink.addEventListener("click", (event) => {
		event.preventDefault();
		BlogSpace.listView();
	});

	addLink.addEventListener("click", (event) => {
		event.preventDefault();
		BlogSpace.addView();
	});

	BlogSpace.listView = () => {
		addBlogEntry.classList.add("hidden")
		articleDiv.classList.remove("hidden")
	}

	BlogSpace.addView = () => {
		addBlogEntry.classList.remove("hidden")
		articleDiv.classList.add("hidden")
	}
 
}


