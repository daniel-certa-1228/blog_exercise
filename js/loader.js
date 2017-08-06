console.log( "loader.jd" );

{
	var BlogSpace = {}
}

{
	BlogSpace.loadBlogInfo = () => {

		let blogObject = {};

		let blogLoader = new XMLHttpRequest();
		blogLoader.addEventListener("load", blogLoaderComplete);
		blogLoader.addEventListener("error", blogLoaderFailed);
		blogLoader.open("GET", "../json/blog.json")
		blogLoader.send();

		function blogLoaderComplete (event) {
			console.log( "BlogLoader Complete" );
			blogObject = JSON.parse(event.target.responseText); 
			// console.log( "blogObject", blogObject );
			BlogSpace.passJSON(blogObject)
			// body...
		}

		function blogLoaderFailed (event) {
			console.log( "BlogLoader Failed" );
			// body...
		}
	}

	BlogSpace.loadBlogInfo();

}