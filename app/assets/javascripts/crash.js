$(function(){
	load_index();
	load_show();
	load_report();
})



function load_index(){
	$("#button_index").on("click", function(e){
		$.ajax({
			type: "get",
			url: "https://data.cambridgema.gov/resource/nqki-ytz6.json",
			dataType: "JSON"
		}).success(function(response){
			var crash = {};
			var mon = [];
			var tue = [];
			var wed = [];
			var thu = [];
			var fri = [];
			var sat = [];
			var sun = [];
			var crashes = []; 
				for (var i = response.length - 1; i >= 0; i--) {
					

					crash = {
						location_address: response[i].location_address,
						date_time: response[i].date_time
						}
				crashes.push(crash);
				debugger; 

			$("#data_index").append(crash.location_address + "<br>");
			}
		});
		e.preventDefault();
	})
};

function load_show(){
}

function load_report(){
}
