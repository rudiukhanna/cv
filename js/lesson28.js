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


const sectionTitles = document.querySelectorAll('.title');
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let letterIndex = 0;

for (let i = 0; i < sectionTitles.length; i++) {
  const title = sectionTitles[i];
  const letter = alphabet[letterIndex % alphabet.length].toUpperCase();
  letterIndex++;
  title.innerHTML = `<span class="title-letter">${letter}</span>${title.innerHTML}`;


document.addEventListener('keydown', function(event) {
   
    if (event.code === 'KeyA' || event.code === 'KeyФ') {
        const section = document.querySelector('.summary');
        section.scrollIntoView({behavior: 'smooth'});
    } else if (event.code === 'KeyB' || event.code === 'KeyИ') {
        const section = document.querySelector('.skills');
        section.scrollIntoView({behavior: 'smooth'});
    } else if (event.code === 'KeyC' || event.code === 'KeyС') {
        const section = document.querySelector('.work');
        section.scrollIntoView({behavior: 'smooth'});
    } else if (event.code === 'KeyD' || event.code === 'KeyВ') {
        const section = document.querySelector('.education');
        section.scrollIntoView({behavior: 'smooth'});
    }
  });
}


