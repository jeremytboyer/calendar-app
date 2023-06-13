$(function () {
  // Add a listener for click events on the save button
  $("button").on("click", function () {
    var item = {
      time: $(this).parent().attr("id"),
      task: $(this).prev().val(),
    };

    var tasksArray = getTasks();
    tasksArray.push(item);

    saveUserData(tasksArray);

    console.log(item);
  });

  // Save data to localStorage
  function saveUserData(arr) {
    var jsonVal = JSON.stringify(arr);
    localStorage.setItem("tasks", jsonVal);
  }

  function getTasks() {
    var rawData = localStorage.getItem("tasks");
    var parsed = JSON.parse(rawData) || [];
    return parsed;
  }

  // Apply the past, present, or future class to each time block
  $(".time-block").each(function () {
    var hour = $(this).attr("id").split("-")[1];
    if (hour < dayjs().hour()) {
      $(this).addClass("past");
    } else if (hour > dayjs().hour()) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
});
