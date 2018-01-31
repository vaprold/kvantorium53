var showPopup = function() {
  var body = document.querySelector("body");
  var popup = document.querySelector(".popup");

  body.classList.add ("blur");
  popup.classList.add ("popup-shown");
}

var popupTimer = setTimeout(showPopup, 1000);
