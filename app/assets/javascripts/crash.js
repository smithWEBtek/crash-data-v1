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
			var crashes = []; 
				for (var i = response.length - 1; i >= 0; i--) {
					crash = {
						location_address: response[i].location_address,
						date_time: response[i].date_time,
			    	day_of_week: response[i].day_of_week,
			    	p1_sex: response[i].p1_sex,
			    	v1_driver_contribution: response[i].v1_driver_contribution
						}
				crashes.push(crash);
// debugger; 

			$("#data_index").append(
				"<hr>"
				+ crash.day_of_week
				+ crash.date_time
				+ crash.location_address
				+ "<br>"
				+ crash.p1_sex + "------"
				+ crash.v1_driver_contribution
				);
			}
		});
		e.preventDefault();
	})
};

function load_show(){
}

function load_report(){
}
