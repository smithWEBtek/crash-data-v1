var crashes = [];
var crash = {};
var day_of_week = "";

$(function(){
		load_index();
		load_day_counts();
		load_gender_counts();
})



	function load_index(){
		$("#button_index").on("click", function(e){
			$.ajax({
				type: "get",
				url: "https://data.cambridgema.gov/resource/nqki-ytz6.json",
				dataType: "JSON"
			}).success(function(response){
				crash = {};
				crashes = []; 
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
					crash.p1_sex + "..."
					+ crash.v1_driver_contribution + "..." + "<br>"
					+ crash.day_of_week
					+ crash.date_time
					+ crash.location_address
					+ "<br>"
					);
				}
			});
			e.preventDefault();
		})
	}

	function load_day_counts(){
		$("#day_counts").on("click", function(e){
		$.ajax({
			type: "get",
			url: "https://data.cambridgema.gov/resource/nqki-ytz6.json",
			dataType: "JSON"
		}).success(function(response){
			crash = {};
			crashes = []; 
				for (var i = response.length - 1; i >= 0; i--) {
					crash = {
						location_address: response[i].location_address,
						date_time: response[i].date_time,
			    	day_of_week: response[i].day_of_week,
			    	p1_sex: response[i].p1_sex,
			    	v1_driver_contribution: response[i].v1_driver_contribution
						}
			crashes.push(crash);
		}
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
		  	  day_of_week = element.day_of_week;
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
		   }
			$("#mon").text("Monday: " + mon);
			$("#tue").text("Tuesday: " + tue);
			$("#wed").text("Wednesday: " + wed);
			$("#thu").text("Thursday: " + thu);
			$("#fri").text("Friday: " + fri);
			$("#sat").text("Saturday: " + sat);
			$("#sun").text("Sunday: " + sun);

			});
		})
	}

	function load_gender_counts(){
		$("#gender_counts").on("click", function(e){ 
		$.ajax({
			type: "get",
			url: "https://data.cambridgema.gov/resource/nqki-ytz6.json",
			dataType: "JSON"
		}).success(function(response){

			crash = {};
			crashes = []; 
				for (var i = response.length - 1; i >= 0; i--) {
					crash = {
						location_address: response[i].location_address,
						date_time: response[i].date_time,
			    	day_of_week: response[i].day_of_week,
			    	p1_sex: response[i].p1_sex,
			    	v1_driver_contribution: response[i].v1_driver_contribution
						}
			crashes.push(crash);
		}
	  var male = 0;
	  var female = 0;
	  var unknown = 0;
	  var blank = 0;

	  for (let i = 0; i < crashes.length; i++) {
	    const element = crashes[i];
		    if (element.p1_sex){	
		  	  p1_sex = element.p1_sex;
		    	}
		    if (element.p1_sex == "MALE"){
		    	male++;
		    }
		    if (element.p1_sex == "FEMALE"){
		    	female++;
		    }
		    if (element.p1_sex == "UNKNOWN"){
		    	unknown++;
		    }
		    if (element.p1_sex == ""){
		    	blank++;
		    }

		   }
			$("#male").text("Male: " + male);
			$("#female").text("Female: " + female);
			$("#unknown").text("Unknown: " + unknown);
			$("#blank").text("Blank: " + blank);
		  });
		});
	}

