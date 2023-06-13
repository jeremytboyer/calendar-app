$(function() {
  // Add a listener for click events on the save button
  $("button").on("click", function() {
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

})