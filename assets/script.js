let currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDate);

$(".saveBtn").on("click", saveEvent);

function saveEvent() {
    let event = $(this).siblings(".description").val();
    console.log("event= ", event);
}
