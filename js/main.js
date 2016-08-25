$(document).ready(function(){
  var intervalId = startClock();

  console.log( intervalId );
  //$("#stop").on("click",function(){})
  $("#stop").click(function(){
    if( intervalId ) {
      clearInterval(intervalId);
      intervalId = null;
      this.innerHTML = "Start";
    } else {
      intervalId = startClock();
      this.innerHTML = "Stop";
    }
  });
});

/* Starts the clock and returns the intervalId */
function startClock() {
  return setInterval(function(){
    var dateTime = new Date();
    var minutesTwoDigitsWithLeadingZero = ("0" + dateTime.getMinutes()).substr(-2);
    $("#milliseconds").text(dateTime.getMilliseconds());
    $("#seconds").text(dateTime.getSeconds());
    $("#minutes").text(minutesTwoDigitsWithLeadingZero);
    $("#hours").text(dateTime.getHours());
  },100);
}