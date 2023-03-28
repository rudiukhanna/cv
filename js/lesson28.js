const photo = document.getElementById("photo");

let isEnlarged = false;

photo.addEventListener("click", function() {
  if (!isEnlarged) {
    photo.classList.toggle("photo-enlarge");
    isEnlarged = true;
  } else {
    photo.classList.toggle("photo-reduce");
    isEnlarged = false;
  }
});

