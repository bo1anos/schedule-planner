$(document).ready(function() {
    //uses moment thats linked from our script tag to write the date in the following format
    $("#currentDay").text(moment().format("MMMM DD YYYY"));

    //i use this to console the time for myself
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    let description = $(".description");
    let saveButton = $(".saveBtn");
    let currentHour = moment().hour();

    console.log(currentHour);

    description.each(function() {
        let timeBlock = parseInt($(this).attr("id"));

        if (timeBlock === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
            
        }
        else if(timeBlock < currentHour){
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");

        }
    });
    description.each(function(){
        for(let i = 0; i < localStorage.length; i++) {
            let objectKey = localStorage.key(i);
            let taskValue = localStorage.getItem(objectKey)
            let rowHour = $(this).siblings(".hour").text();

            console.log(objectKey);
            console.log(taskValue);

            if(objectKey === rowHour){
                $(this).val(taskValue);
            }
        }
    });

    function saveTasks() {
        let currentTime = $(this).data("hour");
        let rowHour = $(this).siblings(".hour").text();
        let task = $(this).siblings(".description").val();

        console.log(currentTime);
        console.log(rowHour);
        console.log(task);

        if (task === "") {
            localStorage.setItem(rowHour,"");
        }
        else{
            localStorage.setItem(rowHour, task)
        }

        
    }

    saveButton.on("click",saveTasks);

})