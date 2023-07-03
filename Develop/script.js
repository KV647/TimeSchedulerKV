// in colaboration with kenny, sam, brou

$(function () {
  $(document).ready(function () {
    var today = dayjs().format("M/D/YYYY")
    
    $('#currentDay').text(today);
  });
  var notes = JSON.parse(localStorage.getItem("note")) || {}
  $(".saveBtn").on("click", function () {
    var note = $(this).siblings("textarea").val()
    var hour = $(this).parent().attr("id")
    notes[hour] = note
    localStorage.setItem("note", JSON.stringify(notes))
  })



  var notes = JSON.parse(localStorage.getItem("note")) || {};
  for (var hour in notes) {
    $("#" + hour + " textarea").val(notes[hour]);
  }


  function updateBoxClasses() {
    const boxes = document.querySelectorAll('.time-block');
    const currentTime = dayjs().hour();

    boxes.forEach((box, index) => {
        const hour = index + 9;
       
        if (currentTime === hour) {
            box.classList.add('present');
        } else if (currentTime > hour) {
            box.classList.add('past');
        } else {
            box.classList.add('future');
        }
    });
}

updateBoxClasses();
setInterval(updateBoxClasses, 60000);



  const currentDateElement = document.getElementById('currentDay');

  function updateCurrentDate() {
    const currentDate = dayjs().format('MMMM DD, YYYY');
    currentDateElement.textContent = `${currentDate}`;
  }

  updateCurrentDate();
});
