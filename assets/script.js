let currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDate);

$(".saveBtn").on("click", saveEvent);

function saveEvent() {
    let event = $(this).siblings(".description").val();
    console.log("event= ", event);
    let eventTime = $(this).parent().attr("id");
    console.log("eventTime= ", eventTime);
    localStorage.setItem(eventTime, event);

}

function restoreEventsFromLocalStorage() {
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));


}
    
restoreEventsFromLocalStorage();

function colorRows() {
    let currentHour = moment().format("H");
    console.log("currentHour = ", currentHour);
    console.log(currentHour);
console.log(typeof(currentHour))
    $(".time-block").each(function(){
        let eventHour = ($(this).attr("id"));
        console.log("eventHour = ", eventHour);
        console.log(typeof(eventHour));
        if(eventHour < currentHour) {
            $(this).addClass("past");
        } else if (eventHour === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present"); 
        } else {
            $(this).removeClass("past");
            $(this).addClass("future"); 
            $(this).removeClass("present");
        }
    })
    
}

colorRows();

