
//// FIRST Getting my date on the screen

  var today = new Date();
  
  // Define the weekdays and Months
  var weekdays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var currHour = parseInt(dayjs().format('HH'));
  document.getElementById('currentDay').innerHTML = dayjs().format('dddd, DD MMM YYYY H:m:ss A')

  // Create variables for both date and time showing in my screen
  var dateString = weekdays[today.getDay()] + ', ' + today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear();
  var timeString = today.toLocaleTimeString();
  
  setInterval(() => { // Making sure my hour goes live
  var d = new Date();
  var timeString = d.toLocaleTimeString();
  document.getElementById('currentDay').innerHTML = dateString + ' ' + timeString;
  }, 1000);



//// SECOND identifying if it's past/present/future
// Applying a this instead of an if condition to make it faster to make the change of color
//toggleClass will make by past/present/future words be added dierctly to my box-content class
function hourlyColor() { 
  $('.box-content').each(function() {
    var blockHour = parseInt(this.id);
    $(this).toggleClass('past', blockHour < currHour);
    $(this).toggleClass('present', blockHour === currHour);
    $(this).toggleClass('future', blockHour > currHour);
  });
}

hourlyColor() // calling the function



// This is where I store my agena information and also make it reappear when I reload the website.
  $('.input-group-text').each(function() {
    console.log($(this));
    //var id = $(this.id).split()
    $(this).siblings(".box-content").val(localStorage.getItem($(this).siblings(".box-content").attr("id")))
  })

//$("#16pm").val(localStorage.getItem("4PM")); Another way to do it one by one


// Button for saving into the local storage
var userInput;
var hourSpan;
$(".saveBtn").on("click", function(){
  userInput = $(this).siblings(".box-content").val().trim();
  console.log(userInput);
  hourSpan = $(this).siblings(".box-content").attr("id");
  console.log(hourSpan);
  localStorage.setItem(hourSpan, userInput);
})

