define( [ "qlik"
],
function ( qlik) {

	return {
		support : {
			snapshot: true,
			export: true,
			exportData : false
		},
		paint: function ($element) {
			//add your rendering code here
			console.log($element[0]);
			
			$element.html( 'qwee <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" />' );
			//needed for export
			return qlik.Promise.resolve();
		}
	};

} );
