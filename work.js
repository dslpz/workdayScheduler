// // create a table with 3 columns
// var textInput;
// function create() {
// 	$(".container").empty();
// 	for (var i = 8; i < 18; i++) {
// 		// get local storage for a specific time, use that if it exist. Add value prop. to input , set that to local storage value
// 		$(".container").append(`<div class="row">
// <div class="time col-sm-2">
//   <span> ${formatDate(i)} </span>
// </div>
// <div class="text col-sm-8">
// <input id="input-${formatDate(i)}" type = "text" />
// </div>
// <div class ="buttons col-sm-2">
//   <button>Save</button>
// </div>
// </div>`);
// 	}
// }
// function formatDate(hour) {
// 	var formattedHour = moment(`${hour}00`, "hmm").format(`LT`);
// 	return formattedHour;
// }

// // each column will have user input, time, and save button
// // total of 8 rows for business hours
// // use local storage to store user responses
// // use moment.js to format the time
// // past hours are red
// // current hours are blue
// // future hours are green
// $(document).ready(function () {
// 	create();
// });
$(document).ready(function () {
	// tell browser to load html & css
	//display current day/time
	$("#currentDay").text(moment().format("MMMM Do YYYY, LT"));

	//Assign saveBtn click listener for user input and time
	$(".saveBtn").on("click", function () {
		//get nearby values.
		console.log(this);
		var text = $(this).siblings(".description").val();
		var time = $(this).parent().attr("id");

		//set items in local storage.
		localStorage.setItem(time, text);
	});
	//load saved data from LocalStorage - do this for every hour
	$("#hour9 .description").val(localStorage.getItem("hour9"));
	$("#hour10 .description").val(localStorage.getItem("hour10"));
	$("#hour11 .description").val(localStorage.getItem("hour11"));
	$("#hour12 .description").val(localStorage.getItem("hour12"));
	$("#hour13 .description").val(localStorage.getItem("hour13"));
	$("#hour14 .description").val(localStorage.getItem("hour14"));
	$("#hour15 .description").val(localStorage.getItem("hour15"));
	$("#hour16 .description").val(localStorage.getItem("hour16"));
	$("#hour17 .description").val(localStorage.getItem("hour17"));

	function hourTracker() {
		//get current number of hours
		var currentHour = moment().hour();

		// loop time blocks
		$(".time-block").each(function () {
			var blockHour = parseInt($(this).attr("id").split("hour")[1]);
			console.log(blockHour, currentHour);

			//check for current time
			if (blockHour < currentHour) {
				$(this).addClass("past");
				$(this).removeClass("future");
				$(this).removeClass("present");
			} else if (blockHour === currentHour) {
				$(this).removeClass("past");
				$(this).addClass("present");
				$(this).removeClass("future");
			} else {
				$(this).removeClass("present");
				$(this).removeClass("past");
				$(this).addClass("future");
			}
		});
	}
	hourTracker();
});