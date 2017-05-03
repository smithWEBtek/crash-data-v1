$(function(){
	load_index();
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
		load_stats1(crashes);
		});
		e.preventDefault();
	})
};

function load_stats1(crashes){
	// group crashes by day_of_week
	// count number of crashes per day
	// group by sex of primary driver
	// count number of crashes by sex of primary driver
	// sort groups by counts
 
 
  var day_of_week = [];
  var mon = 0;
  var tue = 0;
  var wed = 0;
  var thu = 0;
  var fri = 0;
  var sat = 0;
  var sun = 0;
  
  for (let i = 0; i < crashes.length; i++) {
    const element = crashes[i];
    
    if (element.day_of_week){	
  	  const day_of_week = element.day_of_week;
    	}
    if (element.day_of_week == "Monday"){
    	mon++;
    }
    if (element.day_of_week == "Tuesday"){
    	tue++;
    }
    if (element.day_of_week == "Wednesday"){
    	wed++;
    }
    if (element.day_of_week == "Thursday"){
    	thu++;
    }
    if (element.day_of_week == "Friday"){
    	fri++;
    }
    if (element.day_of_week == "Saturday"){
    	sat++;
    }
    if (element.day_of_week == "Sunday"){
    	sun++;
    }
	$("#mon").text("Monday: " + mon);
	$("#tue").text("Tuesday: " + tue);
	$("#wed").text("Wednesday: " + wed);
	$("#thu").text("Thursday: " + thu);
	$("#fri").text("Friday: " + fri);
	$("#sat").text("Saturday: " + sat);
	$("#sun").text("Sunday: " + sun);
  }
}

