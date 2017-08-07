console.log( "loader.js" );

{
	var BlogSpace = {}
}
//Loads from json
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
			
		}

		function blogLoaderFailed (event) {
			console.log( "BlogLoader Failed" );
		
		}
	}

	BlogSpace.loadBlogInfo();

}