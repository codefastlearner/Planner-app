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
}
    
restoreEventsFromLocalStorage();