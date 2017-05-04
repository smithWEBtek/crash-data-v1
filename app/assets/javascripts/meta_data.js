$(function(){
	getData();
})

function getData(){
	$("#get_data").on("click", function(e){
		$.ajax({
			type: 'get',
			url: 'https://data.cambridgema.gov/resource/nqki-ytz6.json'
		}).success(function(response){
			var keys = Object.keys(response[0]);
			
	    var filename = 'file.csv';
	    var outputCSV = keys;
	    var blobby = new Blob([outputCSV], {type: 'text/plain'});

	    $(exportLink).attr({
      'download' : filename,
      'href': window.URL.createObjectURL(blobby),
      'target': '_blank'
      });
	    exportLink.click();
		});
	});
};
