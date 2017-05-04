$(function(){
	downloadCsvOfColumnNames();
	importCrashes();
})

function downloadCsvOfColumnNames(){
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

function importCrashes(){
	$("#import_crashes").on("click", function(e){
		$.ajax({
			type: 'get',
			url: 'https://data.cambridgema.gov/resource/nqki-ytz6.json'
		}).success(function(response){
			for (var i = response.length - 1; i >= 0; i--) {
			var data = {crash: response[i]};
			$.ajax({
				type: 'post',
				url: '/crashes',
				data: data
				});
			};
		});	
	})
}
 

